import { Router, Request, Response } from "express";
import createOutfit from "../app/createOutfit";
import getOutfitByID from "../app/getOutfitById";
import getAllOutfits from "../app/getAllOutfits";

export const outfitRouter = Router();

outfitRouter.get('/all', (req: Request, res: Response) => {
    getAllOutfits().then(data => {
        console.log(data)
        res.json(data)
    })
})

// https://javascript.plainenglish.io/typed-express-request-and-response-with-typescript-7277aea028c
outfitRouter.post('/create', async (req: Request, res: Response) => {
    let { userId, pieceOfClothingIdList, imageURL } = req.body;

    let outfit = await createOutfit(userId, imageURL, pieceOfClothingIdList)
    console.log(outfit)
    res.json({
        ok: true
    })
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
