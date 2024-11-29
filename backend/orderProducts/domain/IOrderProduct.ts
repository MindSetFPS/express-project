export default interface IOrderItem{
    orderId: number;
    productId: number;
    amount: number;
}

const OrderProductExample: IOrderItem = {
    amount: 24,
    orderId: 543,
    productId: 123
}

export { OrderProductExample };