import { Connection, ConnectionOptions, createConnection } from "mysql2/promise";
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
            let sqlQuery = "INSERT INTO products (name, price, stock, url, description) VALUES (?, ?, ?, ?, ?)";
            let data = [product.name, product.price, product.stock, product.url, product.description]
            const [rows] = await this.conn.query(sqlQuery, data)

        } catch (error) {
            console.log("Error: ", error);
        }
    }
    
    async getProductById(id: number): Promise<any> {
        var product: Product;
        let sqlQuery = "SELECT * FROM products WHERE id=?";

        try {
            const [rows] = await this.conn.query(sqlQuery, [id]);
            return rows;
        } catch (error) {
            console.log("Error: ", error);  
            return null;
        }
        
    }

    async getAllProducts() {
        try {
            const [rows] = await this.conn.query('SELECT * FROM products');
            return rows;
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