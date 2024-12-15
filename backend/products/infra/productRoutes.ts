import { Router, Request, Response } from "express";
import createProduct from "../app/createProduct";
import getAllProducts from "../app/getAllProducts";
import getProductByID from "../app/getProductById";
import { createConnection, RowDataPacket } from "mysql2/promise";
import connection from "../../shared/MySQLConnectionOptions";
import Product from "../domain/Products";

export const productRouter = Router();

productRouter.get("/random", async (req: Request, res: Response) => {
    console.log(req.query.limit)

    let conn = await createConnection(connection);
    try {
        const [rows] = await conn.query<RowDataPacket[]>(`
            SELECT pr.id, pr.selling_price, pi.name, pi.image_url
            FROM products pr
            JOIN piece_of_clothings pi ON pi.id = pr.id
            ORDER BY RAND() LIMIT ?`, [Number(req.query.limit)]);
        let productList: Product[]
        productList = rows.map((el) => {
            let productId = el[0];
            let productSellingPrice = el[1];
            let productCondition = el[11];
            let productDescription = el[53];
            let productName = el[2];
            let typeOfClothing = el[5];
            let brand = el[6];
            let size = el[7];
            let color = el[8];
            let season = el[9];
            let imageUrl = el[3];
            let userId = el[11];
            let isForSale = el[12];
            return new Product(1, productDescription, productSellingPrice, productCondition, productId, undefined, productName, brand, color, imageUrl, undefined, season, size, typeOfClothing, isForSale, userId)
        })
        return res.json(productList);
    } catch (error) {
        console.log("Error: ", error);
    }
})

productRouter.post("/create", async (req: Request, res: Response) => {
    let { id, stock, sellingPrice, condition, description } = req.body;
    let conn = await createConnection(connection);

    try {

        if (!id) {
            throw new Error('Missing Piece of clothing ID in the URL or request body.');
        }

        let query = `
                UPDATE piece_of_clothings
                SET 
                    is_for_sale = ?
                WHERE id = ?;`;

        let data = [
            true,
            id
        ]

        console.log(data)
        let [results, fp] = await conn.execute(query, data);

    } catch (e) {
        console.error(e);
    }

    createProduct(id, stock, sellingPrice, description, condition)
        .then(data => {
            res.json(data)
        })
})

productRouter.get("/all", (req: Request, res: Response) => {
    getAllProducts()
        .then(data => {
            res.json({ data });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send();
        })
})

productRouter.get("/:id", (req: Request, res: Response) => {
    const userId = req.params.id;
    getProductByID(parseInt(userId))
        .then(data => {
            res.json({ data });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send();
        })
})