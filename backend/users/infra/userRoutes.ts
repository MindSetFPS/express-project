import { Router, Request, Response } from "express";
import getUsers from "../app/getAllUsers";
import createUser from "../app/createUser";
import getUserByID from "../app/getUserById";
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

userRouter.get('/:id', (req: Request, res: Response) => {
    /* #swagger.responses[200] = {
            description: 'Some description...',
            schema: { $ref: '#/components/schemas/User' }
    } */
    
    const userId = req.params.id
    getUserByID(parseInt(userId))
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.error(err)
    })
})

export default userRouter;