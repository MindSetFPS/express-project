// Thining about this

// This is one of that entities that might not need the full suite of functions, but will
// keep writing them all bc who know if we will need them later.

import mysqlorderProductRepository from "../infra/MySQLOrderProductRepository";
import OrderProduct from "../domain/OrderProduct";

export default function createOrderProduct(amount: number, orderId: number, productId: number){
    let OrderProductRepository = mysqlorderProductRepository;
    
    return OrderProductRepository.createOrderProduct(new OrderProduct(amount, orderId, productId))
    .then((data) => {
        return new OrderProduct(amount, orderId, productId)
    })
    .catch(error => {
        console.error(error)
    })
}