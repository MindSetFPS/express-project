import mysqlOrderRepository from "../infra/MySQLOrderRepository";
import Order from "../domain/Order";

export default function createOrder(subtotal: number, total: number, userId: number){
    let OrderRepository = mysqlOrderRepository;

    return OrderRepository.createOrder(new Order(subtotal, total, userId))
    .then(data => {
        return new Order(subtotal, total, userId); // Here we are making another instance of the same entity wich is pointless
    })
    .catch(error => {
        console.log("Error: " + error)
    })
}
