
import { Router } from "express";
import userRouter from "../../users/infrastructure/userRoutes";

const globalRouter = Router()

globalRouter.use(userRouter)
globalRouter.get('/product', (req, res) => {
    res.json({
        name: "products"
    })
})

export default globalRouter;