import { Router, Request, Response } from "express";
import IPieceOfClothing from "../domain/IPieceOfClothing";
import createPieceOfClothing from "../app/createPieceOfClothing";

export const pieceOfClothingRouter = Router();

pieceOfClothingRouter.post("/create", (req:Request, res:Response) => {
    let userId = req.body.userId;
    let name = req.body.name;
    let price = req.body.price;
    let stock = req.body.stock;
    let sellingPrice = req.body.sellingPrice;
    let description = req.body.description;
    let url = req.body.url;
    
    createPieceOfClothing(userId, name, price, stock, sellingPrice, description, url )
    .then(data=>(res.json(data)))
})