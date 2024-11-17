export default interface IProduct {
    name: string;
    price: number;
    stock?: number;
    description?: string;
    url?: string;
    id?: number;
}


const productExample: IProduct = {
    name: 'Laptop',
    price: 999.99,
    stock: 10,
    description: 'High-performance laptop with the latest specs.',
    url: 'https://www.example.com/laptops/notebook'
};

export { productExample };