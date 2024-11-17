export default interface IOrder{
    userId: number;
    subtotal: number;
    total?: number;
    id?: number;
}

var OrderExample: IOrder = {
    subtotal: 49,
    userId: 4,
    id: 12,
    total: 134
}

export { OrderExample };