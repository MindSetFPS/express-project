import { Router, Request, Response } from "express";
import createProduct from "../app/createProduct";
import getAllProducts from "../app/getAllProducts";
import getProductByID from "../app/getProductById";
import { createConnection } from "mysql2/promise";
import connection from "../../shared/MySQLConnectionOptions";

export const productRouter = Router();

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