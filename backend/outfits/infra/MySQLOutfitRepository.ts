import connection from "../../shared/MySQLConnectionOptions";
import Outfit from "../domain/Outfit";
import { Connection, ConnectionOptions, createConnection, RowDataPacket } from "mysql2/promise";

interface DBOutfit extends RowDataPacket {
    0: number;
    1: number;
    2: string;
}

class MySQLOutfitRepository {
    public conn!: Connection; // add ! so the linter doesn't complain when we don't initialize var in constructor
    public credentials: ConnectionOptions;

    constructor(credentials: ConnectionOptions) {
        this.credentials = credentials;
        this.init()
    }

    async init(): Promise<void> {
        this.conn = await createConnection(this.credentials)
    }

    async createOutfit(outfit: Outfit) {
        // This method will grow bigger, as it needs to consider clothes belonging to 
        // a user, befor saving.
        // And it will also save to at least 2 tables.
        try {
            let query = 'INSERT INTO outfits (user_id) VALUES (?)'
            let params = [outfit.userId]
            await this.conn.query(query, params);
            const [result] = await this.conn.query<RowDataPacket[]>("SELECT * FROM outfits WHERE id = LAST_INSERT_ID()")
            return {
                outfitId: result[0][0],
                userId: result[0][1]
            }
        } catch (err) {
            console.error(err)
        }
    }

    async getAllOutfits() {
        try {
            const [fields] = await this.conn.query<RowDataPacket[]>(`SELECT DISTINCT outfit_piece_of_clothing.outfit_id, MIN(piece_of_clothings.image_url) AS image_url
            FROM outfit_piece_of_clothing 
            JOIN piece_of_clothings ON piece_of_clothings.id = outfit_piece_of_clothing.piece_of_clothing_id
            GROUP BY outfit_piece_of_clothing.outfit_id;
            `)

            return fields
        } catch (error) {
            console.error(error)
        }
    }

    async getOutfitByID(id: number): Promise<Outfit | null> {
        let query: string = 'SELECT id, user_id, image_url FROM outfits WHERE id = ? LIMIT 1;'
        let params = [id]
        let outfit: Outfit;

        try {
            const [outfits] = await this.conn.query<DBOutfit[]>(query, params)
            let res = outfits[0];
            let userId = res[1]
            let imageURL = res[2]
            outfit = new Outfit(userId, imageURL);
            return outfit;
        } catch (error) {
            console.error(error)
            return null;
        }
    }
}

let mySqlOutfitRepository: MySQLOutfitRepository = new MySQLOutfitRepository(connection);

export default mySqlOutfitRepository;
