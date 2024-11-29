export default interface IUser {
    name: String;
    email: String;
    password: String;
    id?: number; 
}

const userExample: IUser = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'mysecretpassword', // DO NOT HARD-CODE REAL PASSWORDS IN YOUR EXAMPLE CODE!
    id: 1
};

export { userExample };