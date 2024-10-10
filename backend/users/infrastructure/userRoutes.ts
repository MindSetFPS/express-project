import { Router, Request, Response } from "express";

export const userRouter = Router();

userRouter.get('/get-user', (req: Request, res: Response) => {
    res.json({
        name: 'user-routes-get'
    })
})

export default userRouter;