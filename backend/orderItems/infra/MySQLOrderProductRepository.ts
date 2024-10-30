import { Connection, ConnectionOptions, createConnection, RowDataPacket } from "mysql2/promise";
import OrderProduct from "../domain/OrderProduct";
import connection from "../../shared/MySQLConnectionOptions";

class MySQLOrderProductRepository {
    public conn!: Connection; // add ! so the linter doesnt complain when we dont initialize var in constructor
    public credentials: ConnectionOptions;

    constructor(credentials: ConnectionOptions) {
        this.credentials = credentials;
        this.init()
    }

    async init(): Promise<void> {
        this.conn = await createConnection(this.credentials)
    }
    
    async createOrderProduct(orderProduct: OrderProduct){
        try{
            var statement = `INSERT INTO orderProduct (amount, order_id, product_id) VALUES (?, ?, ?)`;
            const  [ result ] = await this.conn.query(statement, [orderProduct.amount, orderProduct.orderId, orderProduct.productId]);
        } catch (err){
            console.log("Error creating order: ", err);
        }
    }
}

let mysqlorderProductRepository = new MySQLOrderProductRepository(connection)

export default mysqlorderProductRepository;