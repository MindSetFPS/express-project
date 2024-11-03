// /home/daniel/Documents/projects/express-project/backend/outfits/infra/outfitRoutes.ts

import { Router, Request, Response } from "express";
import createOutfit from "../app/createOutfit";
import getOutfitByID from "../app/getOutfitById";
import getAllOutfits from "../app/getAllOutfits";

export const outfitRouter = Router();

outfitRouter.get('/all', (req: Request, res: Response) => {
    getAllOutfits().then(data => res.json(data))
})

outfitRouter.post('/create', (req: Request, res: Response) => {
    let name = req.body.name;
    let userId = req.body.userId;

    createOutfit(name, userId)
    .then(data => res.json(data))
})

outfitRouter.get('/:id', (req: Request, res: Response) => {
    const outfitId = req.params.id
    getOutfitByID(parseInt(outfitId))
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.error(err)
    })
})

export default outfitRouter;
