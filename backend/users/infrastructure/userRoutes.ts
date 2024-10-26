import { Router, Request, Response } from "express";
import createUser from "../application/create-user";
import getUsers from "../application/get-all-users";
import mySqlUserRepository from "./MySQLUserRepository";
export const userRouter = Router();

userRouter.get('/all', (req: Request, res: Response) => {
    getUsers().then(data => res.json(data))
})

userRouter.get('/create', (req: Request, res: Response) => {
    createUser('daniel', 'daniel1@gmail.com', '123431', 2342).then(data => res.json(data))
})

userRouter.get('/get-user-by-id', (req: Request, res: Response) => {
    res.json(mySqlUserRepository.getUserByID(1))
})

export default userRouter;