import mySQLRepository from "../../shared/database";
import UserRepository from "../domain/UserRepository"
import User from "../domain/User";
import { Connection } from "mysql2";

class MySQLUserRepository implements UserRepository {
    mySqlRepository: Connection;

    constructor(mySqlRepository: Connection) {
        this.mySqlRepository = mySqlRepository;
    }

    public createUser(user: User): User {
        mySQLRepository.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [user.name, user.email, user.email],
            (error, results) => {
                if (error) throw error;

                console.log(results)
            })
        return user;
    }

    deleteUser(user: User): void {
        mySQLRepository.query(
            'DELETE FROM user WHERE id = ?', // query
            [user.id], // data
            (error, results) => { //callback
                if(error) throw error;
                console.log(results)
            })
    }

    public async getUserByID(id: number): Promise<User | null> {
        var newuser: User;
        let query: string = 'SELECT * FROM users WHERE id = ?'
        let params = [id]
        
        try {
            const results = mySQLRepository.query(query, params)
            newuser = new User(results[0].name, results[0].email, results[0].password, results[0].id)
            return newuser;
        } catch (error) {
            console.error(error)
        }
        return null;
    }

    // pass the user instance where changes have been applied
    public async updateUser(user: User): Promise<User | null> {
        var user: User;
        let query: string = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?'
        let params = [user.name, user.email, user.password, user.id]
        var updatedUser: User;
        
        try {
            const results = mySQLRepository.query(query, params)
            updatedUser = new User(results[0].name, results[0].email, results[0].password, results[0].id)
            return updatedUser;
        } catch(error){
            console.error(error)
        }
        return null;
    }
}

let mySqlUserRepository: MySQLUserRepository = new MySQLUserRepository(mySQLRepository)

export default mySqlUserRepository;