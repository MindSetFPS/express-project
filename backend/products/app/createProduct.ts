import Product from "../domain/Products";
import mySqlProductRepository from "../infra/MySQLProductRepository";

export default function createProduct(
    name: string, 
    price: number, 
    stock: number, 
    sellingPrice: number,
    description: string, 
    url: string
){
    let productRepository = mySqlProductRepository;

    let prod = new Product(name, price, stock, description, sellingPrice)
    return productRepository.createProduct(prod)
    .then(data => {
        return prod
    })
    .catch((err: Error) => {
        console.log('Error', err);
    });
}