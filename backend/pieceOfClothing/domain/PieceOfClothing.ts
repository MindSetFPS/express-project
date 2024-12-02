import IPieceOfClothing from "./IPieceOfClothing";

export default class PieceOfClothing implements IPieceOfClothing {
    brand?: string | undefined;
    color?: string | undefined;
    id?: number | undefined;
    imageURL?: string | undefined;
    name?: string | undefined;
    purchasePrice?: number | undefined;
    season?: string | undefined;
    size?: string | undefined;
    typeOfClothing?: string | undefined;
    userId?: number | undefined;

    constructor(
        brand: string,
        color: string,
        id: number,
        imageURL: string,
        name: string,
        originalPrice: number,
        season: string,
        size: string,
        typeOfClothing: string,
        userId: number
    ){
        this.brand = brand;
        this.color  = color;
        this.id   = id;
        this.imageURL = imageURL;
        this.name = name;
        this.purchasePrice = originalPrice;
        this.season = season;
        this.size   = size;
        this.typeOfClothing = typeOfClothing;
        this.userId = userId;
    }
} 