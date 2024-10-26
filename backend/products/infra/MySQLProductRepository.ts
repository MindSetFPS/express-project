import { Connection, ConnectionOptions, createConnection } from "mysql2/promise";
import Product from "../domain/Products";

class MySQLProductRepository {
    public conn!: Connection;    
    public credentials: ConnectionOptions;
    
    constructor(credentials : ConnectionOptions) {
        this.credentials = credentials;
        this.init();
    }
    
    async init() {
        this.conn = await createConnection(this.credentials);
    }
    
    async createProduct(product: Product){
        try {
            let sqlQuery = "INSERT INTO products (name, price, stock, description) VALUES (?, ?, ?, ?)";
            const [rows] = await this.conn.query(sqlQuery, [product.name, product.price, product.stock, product.description])
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}

export let mySqlProductRepository: MySQLProductRepository = new MySQLProductRepository({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'app',
    rowsAsArray: true,
})