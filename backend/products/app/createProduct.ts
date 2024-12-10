import Product from "../domain/Products";
import mySqlProductRepository from "../infra/MySQLProductRepository";

export default async function createProduct(
    pieceOfClothingId: number,
    stock: number,
    sellingPrice: number,
    description: string,
    condition: 1 | 2 | 3 | 4,
) {
    let productRepository = mySqlProductRepository;

    let prod = new Product(stock, description, sellingPrice, condition, pieceOfClothingId)
    return productRepository.createProduct(prod)
        .then(data => {
            return prod
        })
        .catch((err: Error) => {
            console.log('Error', err);
        });
}