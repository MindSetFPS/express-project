import { Router, Request, Response } from "express";
import createPieceOfClothing from "../app/createPieceOfClothing";
import { NewPieceOfClothing } from "../domain/PieceOfClothing";
import createImage from "../app/createImage";
import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
})

export const pieceOfClothingRouter = Router();

pieceOfClothingRouter.post("/create", (req: Request, res: Response) => {
    let { name, typeOfClothing, brand, size, color, purchasePrice, season, imageURL, userId } = req.body
    
    let newPieceOfClothing = new NewPieceOfClothing(
        name, typeOfClothing, brand, size, color, purchasePrice, season, imageURL, 2
    )
    
    createPieceOfClothing(newPieceOfClothing)
        .then(data => {
            res.json(data)
        })
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