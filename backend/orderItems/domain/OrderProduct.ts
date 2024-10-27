import IOrderItem from "./IOrderProduct";

export default class OrderProduct implements IOrderItem {
    amount: number;
    orderId: number;
    productId: number;

    constructor(amount: number, orderId: number, productId: number) {
        this.amount = amount;
        this.orderId = orderId;
        this.productId = productId;
    }
}