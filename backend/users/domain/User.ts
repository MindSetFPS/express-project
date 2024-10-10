import IUser from "./IUser";

class User implements IUser{
    name: String;
    email: String;
    password: String;
    id: number;

    constructor(name: string, email: string, password: string, id: number){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }
}

export default User;