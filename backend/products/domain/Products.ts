import IProduct from "./IProduct";

export default class Product implements IProduct {
    name: string;
    price: number;
    stock: number;
    description: string;
    id?: number;

    constructor(name:string,price:number,stock:number, description: string, id?:number){
        this.id = id ;
        this.name = name ;
        this.price = price;
        this.stock = stock;
        this.description = description ;
    }
}