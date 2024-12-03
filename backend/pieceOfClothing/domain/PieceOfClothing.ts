import IPieceOfClothing from "./IPieceOfClothing";

export default class PieceOfClothing implements IPieceOfClothing {
    id?: number | undefined;
    name?: string | undefined;
    typeOfClothing?: string | undefined;
    brand?: string | undefined;
    size?: string | undefined;
    color?: string | undefined;
    purchasePrice?: number | undefined;
    season?: string | undefined;
    imageURL?: string | undefined;
    userId?: number | undefined;

    constructor(
        id: number,
        name: string,
        typeOfClothing: string,
        brand: string,
        size: string,
        color: string,
        purchasePrice: number,
        season: string,
        imageURL: string,
        userId: number
    ){
        this.id = id;
        this.name = name;
        this.typeOfClothing = typeOfClothing;
        this.brand = brand;
        this.size   = size;
        this.color  = color;
        this.purchasePrice = purchasePrice;
        this.season = season;
        this.imageURL = imageURL;
        this.userId = userId;
    }
} 