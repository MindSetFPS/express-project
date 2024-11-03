import mySqlUserRepository from "../infra/MySQLUserRepository";
import User from "../domain/User";

export default function createUser(name: string, email: string, password: string, id?: number) {
    let UserRepository = mySqlUserRepository
    

    return UserRepository.createUser(new User(name, email, password, id))
        .then(data => {
            console.log(data)
            return new User(name, email, password, id);
        })
        .catch(error => {
            console.error(error)
        })
    
    // let user = UserRepository.createUser(new User(name, email, password, id))
    // return new User(name, email, password, id);
}