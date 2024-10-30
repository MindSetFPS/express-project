import { Router, Request, Response } from "express";
import createProduct from "../app/createProduct";

export const productRouter = Router();

productRouter.post("/create", (req:Request, res:Response) => {
    let name = req.body.name;
    let price = req.body.price;
    let stock = req.body.stock;
    let description = req.body.description;
    
    createProduct(name, price, stock, description)
    .then(data=>(res.json(data)))
})