import { Router, Request, Response } from "express";
import getUsers from "../app/get-all-users";
import createUser from "../app/create-user";
import mySqlUserRepository from "./MySQLUserRepository";
export const userRouter = Router();

userRouter.get('/all', (req: Request, res: Response) => {
    getUsers().then(data => res.json(data))
})

userRouter.post('/create', (req: Request, res: Response) => {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;

    createUser(name, email, password)
    .then(data => res.json(data))
})

userRouter.get('/get-user-by-id', (req: Request, res: Response) => {
    res.json(mySqlUserRepository.getUserByID(1))
})

export default userRouter;