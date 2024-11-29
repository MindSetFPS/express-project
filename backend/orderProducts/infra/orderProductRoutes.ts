
import { Router, Request, Response } from "express";
import createOrderProduct from "../app/createOrderProduct";

const orderProductRouter = Router();

orderProductRouter.get("/create", (req:Request, res:Response) => {
    createOrderProduct(100, 5, 2).then((data) => {
        res.json(data)
    })
});

export default orderProductRouter;