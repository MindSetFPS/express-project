import mySqlUserRepository from "../infrastructure/MySQLUserRepository";
import User from "../domain/User";

export default function createUser(name: string, email: string, password: string, id: number): User {
    let UserRepository = mySqlUserRepository
    let user: User = UserRepository.createUser(new User(name, email, password, id))
    return user;
}