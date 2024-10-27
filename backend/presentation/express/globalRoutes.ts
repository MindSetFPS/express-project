import { Router } from "express";
import userRouter from "../../users/infrastructure/userRoutes";
import { productRouter } from "../../products/infra/productRoute";
import { orderRouter } from "../../orders/infra/orderRoutes";
import orderProductRouter from "../../orderItems/infra/orderProductRoutes";

const globalRouter = Router()

globalRouter.use('/users', userRouter)
globalRouter.use('/products', productRouter)
globalRouter.use('/orders', orderRouter)
globalRouter.use('/orderproduct', orderProductRouter)

export default globalRouter;