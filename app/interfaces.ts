interface ProductPost {
    name: string;
    typeOfClothing: string;
    brand: string;
    size: string;
    color: string;
    purchasePrice: number;
    season: string;
    imageURL: string | null;
    userId?: number | undefined;
}

export { ProductPost };