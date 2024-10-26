import mySqlUserRepository from "../infrastructure/MySQLUserRepository";

export default function getUsers(){
    let userRepository = mySqlUserRepository;
    
    return userRepository.getAllUsers()
        .then(data => {
            return data
        })
        .catch(error => {
            console.error(error)
            return null
        })

}