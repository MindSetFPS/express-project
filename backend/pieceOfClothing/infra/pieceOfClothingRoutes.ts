import { Router, Request, Response } from "express";
import IPieceOfClothing from "../domain/IPieceOfClothing";
import createPieceOfClothing from "../app/createPieceOfClothing";
import PieceOfClothing from "../domain/PieceOfClothing";
import createImage from "../app/createImage";
import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
})

export const pieceOfClothingRouter = Router();

pieceOfClothingRouter.post("/create", (req: Request, res: Response) => {
    let id = req.body.id;
    let name = req.body.name;
    let typeOfClothing = req.body.typeOfClothing;
    let brand = req.body.brand;
    let size = req.body.size;
    let color = req.body.color;
    let purchasePrice = req.body.purchasePrice;
    let season = req.body.season;
    let imageURL = req.body.imageURL;
    let userId = req.body.userId;

    let newPieceOfClothing = new PieceOfClothing(
        brand, color, id, imageURL, name, purchasePrice, season, size, typeOfClothing, userId
    )

    createPieceOfClothing(newPieceOfClothing)
        .then(data => (res.json(data)))
})

pieceOfClothingRouter.post("/createImage", upload.single('file'), (req: Request, res: Response) => {

    /*
        #swagger.consumes = ['multipart/form-data']  
        #swagger.parameters['multFiles'] = {
            in: 'formData',
            type: 'file',
            required: true,
            description: 'Some description...',
            collectionFormat: 'multi',
            items: { type: 'file' }
        } */

    if (req.file?.originalname && req.file.buffer) {
        var fileURL = createImage(req.file.originalname, req.file.buffer)
        res.json({
            fileURL: fileURL
        })
    } else {
        res.json({
            error: "No file was uploaded"
        })
    }
})