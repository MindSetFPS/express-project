import { Connection, ConnectionOptions, createConnection, RowDataPacket } from "mysql2/promise";
import Product from "../domain/Products";
import connection from "../../shared/MySQLConnectionOptions";

class MySQLProductRepository {
    public conn!: Connection;
    public credentials: ConnectionOptions;

    constructor(credentials: ConnectionOptions) {
        this.credentials = credentials;
        this.init();
    }

    async init() {
        this.conn = await createConnection(this.credentials);
    }

    // async createProduct(product: Product): Promise<Product> {
    async createProduct(product: Product) {
        try {
            let sqlQuery = `INSERT INTO products 
            (id, selling_price, stock, product_condition, description) VALUES 
            (?, ?, ?, ?, ?)`;
            let data = [product.id, product.sellingPrice, product.stock, product.condition, product.description]
            const [rows] = await this.conn.query(sqlQuery, data)

        } catch (error) {
            console.log("Error: ", error);
        }
    }

    async getProductById(id: number): Promise<any> {
        var product: Product;
        let sqlQuery = `
            SELECT 
            products.id, products.selling_price, products.product_condition, products.description,
                piece_of_clothings.name, piece_of_clothings.type_of_clothing, piece_of_clothings.brand, 
                piece_of_clothings.size, piece_of_clothings.color, piece_of_clothings.season, 
                piece_of_clothings.image_url, piece_of_clothings.user_id, piece_of_clothings.is_for_sale
            FROM products
            INNER JOIN piece_of_clothings ON products.id = piece_of_clothings.id
            WHERE products.id = ?;
        `

        try {
            const [rows] = await this.conn.query<RowDataPacket[]>(sqlQuery, [id]);
            let el = rows[0]
            // return new Product(1, r[3], r[1], r[2], r[0], r[9], r[4], r[11])
            let productId = el[0];
            let productSellingPrice = el[1];
            let productCondition = el[2];
            let productDescription = el[3];
            let productName = el[4];
            let typeOfClothing = el[5];
            let brand = el[6];
            let size = el[7];
            let color = el[8];
            let season = el[9];
            let imageUrl = el[10];
            let userId = el[11];
            let isForSale = el[12];
            return new Product(1, productDescription, productSellingPrice, productCondition, productId, undefined, productName, brand, color, imageUrl, undefined, season, size, typeOfClothing, isForSale, userId)
        } catch (error) {
            console.log("Error: ", error);
            return null;
        }

    }

    async getAllProducts() {
        try {
            const [rows] = await this.conn.query<RowDataPacket[]>(`
                SELECT 
                products.id, products.selling_price, products.product_condition, products.description,
                piece_of_clothings.name, piece_of_clothings.type_of_clothing, piece_of_clothings.brand, 
                piece_of_clothings.size, piece_of_clothings.color, piece_of_clothings.season, 
                piece_of_clothings.image_url, piece_of_clothings.user_id, piece_of_clothings.is_for_sale
                FROM products INNER JOIN piece_of_clothings ON products.id = piece_of_clothings.id 
            `);


            let productList: Product[]
            productList = rows.map((el) => {
                let productId = el[0];
                let productSellingPrice = el[1];
                let productCondition = el[2];
                let productDescription = el[3];
                let productName = el[4];
                let typeOfClothing = el[5];
                let brand = el[6];
                let size = el[7];
                let color = el[8];
                let season = el[9];
                let imageUrl = el[10];
                let userId = el[11];
                let isForSale = el[12];
                return new Product(1, productDescription, productSellingPrice, productCondition, productId, undefined, productName, brand, color, imageUrl, undefined, season, size, typeOfClothing, isForSale, userId)
            })
            return productList;
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    /*     async updateProductById( updatedProduct: DBProduct ): Promise<any> {
            try {
                let sqlQuery = "UPDATE products SET name=?, price=?, stock=?, description=? WHERE id=?";
                let data = [updatedProduct.name, updatedProduct.price, updatedProduct.stock, updatedProduct.description, updatedProduct.id]
                const [rows] = await this.conn.query(sqlQuery,data);
                return 1;
            }
            catch(error) {
                console.log("Error: ", error);
            }
        } */
}

let mySqlProductRepository: MySQLProductRepository = new MySQLProductRepository(connection);
export default mySqlProductRepository;