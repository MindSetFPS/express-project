import { Connection, ConnectionOptions, createConnection } from "mysql2/promise";
import connection from "../../shared/MySQLConnectionOptions";
import PieceOfClothing from "../domain/PieceOfClothing";

class MySQLProductRepository {
    public conn!: Connection;
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
            let sqlAQuery = "INSERT INTO piecesOfClothing ()"
        } catch (error) {
            console.error("error: ", error)
        }
    }
}