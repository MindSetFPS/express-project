import IProduct from "./IProduct";

export default class Product implements IProduct {
    name: string;
    price: number;
    stock: number;
    description: string;
    sellingPrice: number;
    url?: string;
    id?: number;
    brand?: string;
    color?: string;
    imageURL?: string;
    originalPrice?: number;
    season?: string;
    size?: string;
    typeOfClothing?: string;

    constructor(
        name:string,
        price:number,
        stock:number, 
        description: string, 
        sellingPrice: number,
        id?:number, 
        url?: string
    ){
        this.name = name ;
        this.price = price;
        this.stock = stock;
        this.description = description ;
        this.sellingPrice = sellingPrice;
        this.url = url ;
        this.id = id ;
    }
}

export class ProductRequestDTO implements IProduct {
    description?: string | undefined;
    id: number;
    name: string;
    sellingPrice: number;
    stock: number;
    url: string | undefined;

    constructor(name: string, sellingPrice: number, stock: number, url: string, description: string, id: number){
        this.name = name;
        this.sellingPrice = sellingPrice;
        this.stock = stock;
        this.description = description;
        this.url = url;
        this.id = id;
    }
}