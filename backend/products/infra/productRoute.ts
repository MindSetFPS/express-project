import { Router, Request, Response } from "express";
import createProduct from "../app/createProduct";

export const productRouter = Router();

productRouter.get("/create", (req:Request, res:Response) => {
    createProduct("sueter", 20, 1, "my comodo")
    .then(data=>(res.json(data)))
})