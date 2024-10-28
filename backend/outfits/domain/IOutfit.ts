import IProduct from "../../products/domain/IProduct";

export default interface IOutfit {
    id: number;
    name?: string;
    head?: IProduct[];
    chest?: IProduct[];
    legs?: IProduct[];
    shoes?: IProduct[];
    accessory?: IProduct[];
}