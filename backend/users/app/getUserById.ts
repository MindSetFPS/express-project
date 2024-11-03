import mySqlUserRepository from "../infra/MySQLUserRepository";

export default function getUserByID(id: number){
    let UserRepository = mySqlUserRepository
    
    return UserRepository.getUserByID(id)
    .then( (data) => {
        return data;
    })
    .catch((err)=> {
        console.log(err);
    })
    
}