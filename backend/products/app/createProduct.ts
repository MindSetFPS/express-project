import Product from "../domain/Products";
import mySqlProductRepository from "../infra/MySQLProductRepository";

export default function createProduct( name: string, price: number, stock: number , description: string, id?: number ){
    let productRepository = mySqlProductRepository;

    return productRepository.createProduct(new Product(name, price, stock, description, id))
        .then(data => {
            return new Product(name, price, stock, description, id)
        })
        .catch((err: Error) => {
            console.log('Error', err);
        });
}