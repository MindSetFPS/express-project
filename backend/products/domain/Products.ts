import IProduct from "./IProduct";

export default class Product implements IProduct {
    stock: number;
    description: string;
    sellingPrice: number;
    condition: 1 | 2 | 3 | 4;
    id?: number;
    price?: number;
    name?: string;
    brand?: string;
    color?: string;
    imageURL?: string;
    originalPrice?: number;
    season?: string;
    size?: string;
    typeOfClothing?: string;
    isForSale?: boolean;

    constructor(
        stock:number, 
        description: string, 
        sellingPrice: number,
        condition: 1 | 2 | 3 | 4,
        id?:number, 
        price?:number,
        name?:string,
        imageURL?: string,
    ){
        this.name = name ;
        this.price = price;
        this.stock = stock;
        this.description = description ;
        this.sellingPrice = sellingPrice;
        this.imageURL = imageURL;
        this.id = id;
        this.condition = condition;
    }
}

export class ProductRequestDTO implements IProduct {
    description?: string | undefined;
    id?: number;
    name: string;
    sellingPrice: number;
    stock: number;
    url?: string | undefined;
    condition: 1 | 2 | 3 | 4;

    constructor(
        name: string, 
        sellingPrice: number, 
        stock: number, 
        condition: 1 | 2 | 3 | 4,
        url?: string, 
        description?: string, 
        id?: number
    ){
        this.name = name;
        this.sellingPrice = sellingPrice;
        this.stock = stock;
        this.description = description;
        this.condition = condition;
        this.url = url;
        this.id = id;
    }
}