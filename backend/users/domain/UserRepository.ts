import User from "./User";

export default interface UserRepository {
    getUserByID(id: number): Promise<User | null>;
    createUser(user: User): User;
    updateUser(user: User): Promise<User | null>;
    deleteUser(user: User): void;
}