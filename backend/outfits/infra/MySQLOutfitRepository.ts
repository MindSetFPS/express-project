import connection from "../../shared/MySQLConnectionOptions";
import Outfit from "../domain/Outfit";
import { Connection, ConnectionOptions, createConnection, RowDataPacket } from "mysql2/promise";

interface DBOutfit extends RowDataPacket {
    0: number;
    1: number;
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

    async createOutfit(outfit: Outfit){
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
            const [fields] = await this.conn.query<DBOutfit[]>('SELECT * FROM outfits')
            let outfitsList = fields.map((outfit) => {
                return new Outfit(
                    outfit[0],
                    outfit[1]
                )
            })
            return outfitsList
        } catch (error) {
            console.error(error)
        }
    }

    async getOutfitByID(id: number): Promise<Outfit | null> {
        let query: string = 'SELECT * FROM outfits WHERE id = ? LIMIT 1;'
        let params = [id]
        let outfit: Outfit;

        try {
            const [outfits] = await this.conn.query<DBOutfit[]>(query, params)
            let res = outfits[0];
            outfit = new Outfit(res[0], res[1] );
            
            return outfit;
        } catch (error) {
            console.error(error)
            return null;
        }
    }
}

let mySqlOutfitRepository: MySQLOutfitRepository = new MySQLOutfitRepository(connection);

export default mySqlOutfitRepository;
