import IPieceOfClothing from "../../pieceOfClothing/domain/IPieceOfClothing";

export default interface IProduct extends IPieceOfClothing {
    sellingPrice: number;
    stock: number;
    description?: string;
}

const productExample: IProduct = {
    id: 42,
    userId: 53,
    name: 'Laptop',
    sellingPrice: 999.99,
    stock: 10,
    imageURL: "https://i.imgur.com/v7q0o8p.jpg",
    description: 'High-performance laptop with the latest specs.',
    brand: 'sarah',
    color: 'blue',
    purchasePrice: 122,
    season: 'Summer',
    size: 'big',
    typeOfClothing: "t-shrt"
};

export { productExample }; 