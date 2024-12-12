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
            const [rows] = await this.conn.query<RowDataPacket[]>(`
                SELECT 
                products.id, products.selling_price, products.product_condition, products.description,
                piece_of_clothings.name, piece_of_clothings.type_of_clothing, piece_of_clothings.brand, 
                piece_of_clothings.size, piece_of_clothings.color, piece_of_clothings.season, 
                piece_of_clothings.image_url, piece_of_clothings.user_id, piece_of_clothings.is_for_sale
                FROM products INNER JOIN piece_of_clothings ON products.id = piece_of_clothings.id 
            `);
            let productList: Product[]
            productList = rows.map((el) => new Product(1, el[3], el[1],el[2], el[0], undefined, el[4], el[10]))
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