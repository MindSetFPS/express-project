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

pieceOfClothingRouter.post("/create", (req:Request, res:Response) => {
    let userId = req.body.userId;
    let name = req.body.name;
    let price = req.body.price;
    let stock = req.body.stock;
    let sellingPrice = req.body.sellingPrice;
    let description = req.body.description;
    let url = req.body.url;
    let brand = req.body.brand;
    let color = req.body.color;
    let id = req.body.id;
    let imageURL = req.body.imageURL;
    let originalPrice = req.body.originalPrice;
    let season = req.body.season;
    let size = req.body.size;
    let typeOfClothing = req.body.typeOfClothing;
    
    let newPieceOfClothing = new PieceOfClothing(brand, color, id, imageURL, name, originalPrice, season, size, typeOfClothing, userId)
    
    createPieceOfClothing(newPieceOfClothing)
    .then(data=>(res.json(data)))
})

pieceOfClothingRouter.post("/createImage", upload.single('file'), (req: Request, res: Response) => {
    console.log(req.file?.originalname)
    if(req.file?.originalname && req.file.buffer){
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