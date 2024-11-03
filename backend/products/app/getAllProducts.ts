import mySqlProductRepository from "../infra/MySQLProductRepository";

export default function getAllProducts(){
    let ProductRepository = mySqlProductRepository;

    return ProductRepository.getAllProducts()
    .then(data => {
        return data;
    })
    .catch(err => {
        console.log("Error: ", err);
        return null;
    });
}