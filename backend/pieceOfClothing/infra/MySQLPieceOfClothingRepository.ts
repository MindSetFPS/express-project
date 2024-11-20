import { Connection, ConnectionOptions, createConnection } from "mysql2/promise";
import connection from "../../shared/MySQLConnectionOptions";
import PieceOfClothing from "../domain/PieceOfClothing";

class MySQLPieceOfClothingRepository { public conn!: Connection;
    public credentials: ConnectionOptions;

    constructor(credentials: ConnectionOptions){
        this.credentials = credentials;
        this.init()
    }
    
    async init(){
        this.conn = await createConnection(this.credentials);
    }
    
    async createPieceOfClothing(pieceOfClothing: PieceOfClothing){
        try {
            let query = "INSERT INTO piece_of_clothings(id, name, type_of_clothing, brand, size, color, original_price, season, image_url, user_id) VALUES  (?, ?, ?, ?, ?, ?, ?, ?, ?, ? )"
            let params = [pieceOfClothing.id, pieceOfClothing.name, pieceOfClothing.typeOfClothing, pieceOfClothing.brand, pieceOfClothing.size, pieceOfClothing.color, pieceOfClothing.originalPrice, pieceOfClothing.season, pieceOfClothing.imageURL, pieceOfClothing.userId]
            const [ result, fields ] = await this.conn.query(query, params)
            console.log(result)
            console.log(fields)
        } catch (error) {
            console.error("error: ", error)
        }
    }
}

const mysqlPieceOfClothingRepository = new MySQLPieceOfClothingRepository(connection)

export default mysqlPieceOfClothingRepository;