import IProduct from "../../products/domain/IProduct";
import IOutfit from "./IOutfit";

class Outfit implements IOutfit {
  userId: number;
  imageURL: string;
  id?: number;
  name?: string;
  head?: IProduct[];
  chest?: IProduct[];
  legs?: IProduct[];
  shoes?: IProduct[];
  accessory?: IProduct[];

  constructor(
    userId: number,
    imageURL: string,
    id?: number,
    name?: string,
    head?: IProduct[],
    chest?: IProduct[],
    legs?: IProduct[],
    shoes?: IProduct[],
    accessory?: IProduct[]
  ) {
    this.id = id;
    this.imageURL = imageURL;
    this.userId = userId;
    this.name = name;
    this.head = head;
    this.chest = chest;
    this.legs = legs;
    this.shoes = shoes;
    this.accessory = accessory;
  }
}

export default Outfit;
