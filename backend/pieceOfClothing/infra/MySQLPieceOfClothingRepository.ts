import { Connection, ConnectionOptions, createConnection } from "mysql2/promise";
import connection from "../../shared/MySQLConnectionOptions";
import PieceOfClothing from "../domain/PieceOfClothing";

class MySQLPieceOfClothingRepository {
    public conn!: Connection;
    public credentials: ConnectionOptions;

    constructor(credentials: ConnectionOptions) {
        this.credentials = credentials;
        this.init()
    }

    async init() {
        this.conn = await createConnection(this.credentials);
    }

    async createPieceOfClothing(pieceOfClothing: PieceOfClothing) {
        try {
            let { brand, color, imageURL, name, purchasePrice, season, size, typeOfClothing, userId, isForSale } = pieceOfClothing;
            let query = `INSERT INTO piece_of_clothings 
            (name, type_of_clothing, brand, size, color, purchase_price, season, image_url, user_id, is_for_sale) VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
            let params = [name, typeOfClothing, brand, size, color, purchasePrice, season, imageURL, userId, false]
            const [result, fields] = await this.conn.query(query, params)
            let [rows] = await this.conn.query(`SELECT * FROM piece_of_clothings WHERE id = LAST_INSERT_ID()`)
            return rows
        } catch (error) {
            console.error("error: ", error)
        }
    }
}

const mysqlPieceOfClothingRepository = new MySQLPieceOfClothingRepository(connection)

export default mysqlPieceOfClothingRepository;