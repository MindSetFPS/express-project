import { Router, Request, Response } from "express";
import createProduct from "../app/createProduct";
import getAllProducts from "../app/getAllProducts";
import getProductByID from "../app/getProductById";

export const productRouter = Router();

productRouter.post("/create", (req:Request, res:Response) => {
    let name = req.body.name;
    let price = req.body.price;
    let stock = req.body.stock;
    let sellingPrice = req.body.sellingPrice;
    let description = req.body.description;
    let url = req.body.url;
    
    createProduct(name, price, stock, sellingPrice, description, url )
    .then(data=>(res.json(data)))
})

productRouter.get("/all", (req:Request, res:Response)=>{
    getAllProducts()
    .then(data => {
        res.json({data});
    })
    .catch((err) => {
        console.error(err);
         res.status(500).send();
     })
})

productRouter.get("/:id", (req:Request, res:Response)=>{
    const userId = req.params.id;
    getProductByID(parseInt(userId))
    .then(data => {
        res.json({data});
    })
    .catch(err => {
        console.error(err);
          res.status(500).send();
    })
})