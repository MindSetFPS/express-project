import IProduct from "../../products/domain/IProduct";
import IOutfit from "./IOutfit";

class Outfit implements IOutfit {
  id: number;
  userId: number;
  name?: string;
  head?: IProduct[];
  chest?: IProduct[];
  legs?: IProduct[];
  shoes?: IProduct[];
  accessory?: IProduct[];

  constructor(
    id: number, 
    userId: number, 
    name?: string, 
    head?: IProduct[], 
    chest?: IProduct[], 
    legs?: IProduct[], 
    shoes?: IProduct[], 
    accessory?: IProduct[]
  ) {
    this.id = id;
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
