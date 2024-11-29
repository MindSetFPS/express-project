import IPieceOfClothing from "../../pieceOfClothing/domain/IPieceOfClothing";

export default interface IProduct extends IPieceOfClothing {
    stock: number;
    sellingPrice: number;
    description?: string;
}


const productExample: IProduct = {
    name: 'Laptop',
    sellingPrice: 999.99,
    stock: 10,
    description: 'High-performance laptop with the latest specs.',
    brand: 'sarah',
    color: 'blue',
    id: 42,
    imageURL: "https://i.imgur.com/v7q0o8p.jpg",
    originalPrice: 122,
    season: 'Summer',
    size: 'big',
    typeOfClothing: "t-shrt"
};

export { productExample };