import IOrder from "./IOrder";

export default class Order implements IOrder {
    id?: number;
    subtotal: number;
    total?: number;
    userId: number;
    
    constructor(subtotal: number, total: number, userId: number, id?: number) {
        this.subtotal = subtotal;
        this.total = total;
        this.userId = userId;
        this.id = id;
    }
}