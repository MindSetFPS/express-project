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
            let { brand, color, id, imageURL, name, purchasePrice, season,size, typeOfClothing, userId} = pieceOfClothing;
            let query = `INSERT INTO piece_of_clothings
                        (name, type_of_clothing, brand, size, color, purchase_price, season, image_url, user_id) VALUES  
                        (?, ?, ?, ?, ?, ?, ?, ?, ?)`
            let params = [name, typeOfClothing, brand, size, color, purchasePrice, season, imageURL, userId]
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