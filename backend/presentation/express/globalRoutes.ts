import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import userRouter from "../../users/infra/userRoutes";
import { productRouter } from "../../products/infra/productRoutes";
import { orderRouter } from "../../orders/infra/orderRoutes";
import orderProductRouter from "../../orderProducts/infra/orderProductRoutes";
import outfitRouter from "../../outfits/infra/outfitRoutes";
import { pieceOfClothingRouter } from "../../pieceOfClothing/infra/pieceOfClothingRoutes";
import swaggerOutput from "./swagger_output.json";

const globalRouter = Router()

globalRouter.use(
    '/users', 
    userRouter
    // #swagger.tags = ['Users']
)
globalRouter.use('/products', productRouter)
globalRouter.use('/orders', orderRouter)
globalRouter.use('/orderproduct', orderProductRouter)
globalRouter.use('/outfits', outfitRouter)
globalRouter.use('/piece-of-clothing', pieceOfClothingRouter)
globalRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput))

export default globalRouter;