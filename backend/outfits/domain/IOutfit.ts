import IProduct, { productExample } from "../../products/domain/IProduct";

export default interface IOutfit {
    id?: number;
    userId: number,
    imageURL: string,
    name?: string;
    head?: IProduct[];
    chest?: IProduct[];
    legs?: IProduct[];
    shoes?: IProduct[];
    accessory?: IProduct[];
}

const outfitExample: IOutfit = {
    id: 1,
    userId: 4,
    imageURL: "http://imageUrl.com",
    name: 'Summer Outfit',
    head: [productExample],
    chest: [productExample],
    legs: [],
    shoes: [productExample],
    accessory: []
};

export { outfitExample };
