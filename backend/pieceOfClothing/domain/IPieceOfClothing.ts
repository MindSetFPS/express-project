export default interface IPieceOfClothing {
    id?: number;
    userId?: number;
    name?: string;
    typeOfClothing?: string;
    brand?: string;
    size?: string;
    color?: string;
    originalPrice?: number;
    season?: string;
    imageURL?: string;
}

const pieceOfClothingExample: IPieceOfClothing = {
    id: 1,
    name: '<NAME>',
    typeOfClothing: 'T-Shirt',
    brand: 'Nike',
    size: 'L',
    color: 'White',
    originalPrice: 20.99,
    season: 'Summer',
    imageURL: "http://myimage.com/image.png"
};

export { pieceOfClothingExample };