import User from "../domain/User";
import { Connection, ConnectionOptions, createConnection, RowDataPacket } from "mysql2/promise";

interface DBUser extends RowDataPacket {
    0: number,
    1: string,
    2: string,
    3: string
}

class MySQLUserRepository {
    public conn!: Connection; // add ! so the linter doesnt complain when we dont initialize var in constructor
    public credentials: ConnectionOptions;

    constructor(credentials: ConnectionOptions) {
        this.credentials = credentials;
        this.init()
    }

    async init(): Promise<void> {
        this.conn = await createConnection(this.credentials)
    }

    async createUser(user: User) {
        try {
            const [result, fields] = await this.conn.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                [user.name, user.email, user.email],
            )
            console.log("result:", result)
            console.log("fields: ", fields)
        } catch (erro) {
            console.error(erro)
        }
    }

    /* 
        deleteUser(user: User): void {
            this.mySQLRepository.query(
                'DELETE FROM user WHERE id = ?', // query
                [user.id], // data
                (error, results) => { //callback
                    if(error) throw error;
                    console.log(results)
                })
        }
      */

    /* getUsers(callback: Function){
         this.conn.query(
            'SELECT * FROM users',
            (_error, rows) => {
                return callback(rows)
            }
        )
    } */

    async getAllUsers() {
        try {
            const [fields] = await this.conn.query('SELECT * FROM users')
            return fields;
        } catch (error) {
            console.error(error)
        }
    }

    async getUserByID(id: number): Promise<User> {
        var newuser: User;
        let query: string = 'SELECT * FROM users WHERE id = ?;'
        let params = [id]

        try {
            const [users] = await this.conn.query<DBUser[]>(query, params)

            users.forEach((user: DBUser) => {
                console.log(user)
            })
            // newuser = new User(results[0][0].name, results[0].email, results[0].password, results[0].id)
        } catch (error) {
            console.error(error)
        }
        return new User('', '', '', 4);
        // return null;
    }

    // pass the user instance where changes have been applied
    /* public async updateUser(user: User): Promise<User | null> {
        var user: User;
        let query: string = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?'
        let params = [user.name, user.email, user.password, user.id]
        var updatedUser: User;
        
        try {
            const results = await this.mySQLRepository.query(query, params)
            console.log(results)
            updatedUser = new User('', '', '', 48)
            // updatedUser = new User(results[0].name, results[0].email, results[0].password, results[0].id)
            return updatedUser;
        } catch(error){
            console.error(error)
        }
        return null;
    } */
}

let mySqlUserRepository: MySQLUserRepository = new MySQLUserRepository({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'app',
    rowsAsArray: true,
})

export default mySqlUserRepository;