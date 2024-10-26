import { Router, Request, Response } from "express";

import createOrder from "../app/createOrder";

export const orderRouter = Router();

orderRouter.get("/create", (req:Request, res:Response) => {
    createOrder(100, 250, 3)
    .then((data) => {
        res.json(data)
    })
})
