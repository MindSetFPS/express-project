import Product from "./Products";
import Clothe from "../../clothes/domain/Clothe";

interface ClothingProduct extends Product, Clothe {
}

export default ClothingProduct;