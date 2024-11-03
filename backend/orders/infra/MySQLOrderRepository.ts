import connection from "../../shared/MySQLConnectionOptions";
import Order from "../domain/Order";

import { Connection, ConnectionOptions, createConnection, RowDataPacket } from "mysql2/promise";

class MySQLOrderRepository {
    public conn!: Connection; // add ! so the linter doesnt complain when we dont initialize var in constructor
    public credentials: ConnectionOptions;

    constructor(credentials: ConnectionOptions) {
        this.credentials = credentials;
        this.init()
    }

    async init(): Promise<void> {
        this.conn = await createConnection(this.credentials)
    }
    
    async createOrder(order: Order){
        try{
            var sql = `INSERT INTO orders (subtotal, total, user_id) VALUES (?, ?, ?)`;
            const  [ result ] = await this.conn.query(sql, [order.subtotal, order.total, order.userId]);
        } catch (err){
            console.log("Error creating order: ", err);
        }
    }
}

let mysqlOrderRepository = new MySQLOrderRepository(connection)

export default mysqlOrderRepository;