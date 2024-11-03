import mySqlProductRepository from "../infra/MySQLProductRepository";

export default function getProductByID(id: number) {
    let ProductRespository = mySqlProductRepository;

    return ProductRespository.getProductById(id)
    .then((product) => {
        return product;
    })
    .catch((error) => {
        console.log('Error', error);
    });
}