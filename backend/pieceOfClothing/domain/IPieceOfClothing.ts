export default interface IPieceOfClothing {
    id?: number;
    userId?: number;
    name?: string;
    typeOfClothing?: string;
    brand?: string;
    size?: string;
    color?: string;
    purchasePrice?: number;
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
    purchasePrice: 20.99,
    season: 'Summer',
    imageURL: "http://myimage.com/image.png"
};

interface IPieceOfClothingImage {
    file: File;
}

// https://stackoverflow.com/questions/68248551/base64-to-image-file-convertion-in-js
const type = "image/jpg"
const buffer = new ArrayBuffer(5)
const view = new Uint8Array(buffer)
const blob = new Blob([buffer], { type })

const pieceOfClothingImageExample: IPieceOfClothingImage = {
    file: new File([blob], "filename.jpg")
}


export { pieceOfClothingExample, pieceOfClothingImageExample };