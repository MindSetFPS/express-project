import { Router, Request, Response } from "express";
import createPieceOfClothing from "../app/createPieceOfClothing";
import PieceOfClothing, { NewPieceOfClothing } from "../domain/PieceOfClothing";
import IPieceOfClothing from "../domain/IPieceOfClothing";
import createImage from "../app/createImage";
import multer from 'multer';
import connection from "../../shared/MySQLConnectionOptions";
import { Connection, ConnectionOptions, createConnection, RowDataPacket } from "mysql2/promise";

const upload = multer({
    storage: multer.memoryStorage(),
})

export const pieceOfClothingRouter = Router();

pieceOfClothingRouter.post("/create", (req: Request, res: Response) => {
    let { name, typeOfClothing, brand, size, color, purchasePrice, season, imageURL, userId } = req.body
    
    let newPieceOfClothing = new NewPieceOfClothing(
        name, typeOfClothing, brand, size, color, purchasePrice, season, imageURL, 2, false
    )
    
    createPieceOfClothing(newPieceOfClothing)
        .then(data => {
            res.json(data)
        })
})

pieceOfClothingRouter.get('/all', async (req: Request, res: Response) => {
    let conn = await createConnection(connection);
    
    try {
        let [rows] = await conn.query("SELECT * FROM piece_of_clothings WHERE is_for_sale = FALSE;")
        res.json(rows)
    } catch(e) {
        console.error(e)
        res.json({
            text: "error"
        })
    }
    
})

pieceOfClothingRouter.get('/get-by-id/:id', async (req: Request, res: Response) => {
    let conn = await createConnection(connection);
    
    try {
        let [rows] = await conn.query<RowDataPacket[]>("SELECT * FROM piece_of_clothings WHERE id = ?", [req.params.id])
        if(rows.length > 0) {
            res.json(rows[0])
        } else {
            res.status(404).json({ message: "Piece of clothing not found" })
        }
    } catch(e) {
        console.error(e)
        res.status(404).json({ message: "Piece of clothing not found" })
    }
})

pieceOfClothingRouter.put(
    '/update/:id',
    async (req: Request, res: Response) => {
        let conn = await createConnection(connection);
        
        try {
            const updatedFields: Partial<IPieceOfClothing> = req.body;
            let { name, typeOfClothing, brand, size, color, purchasePrice, season, imageURL, userId } = req.body
            console.log(name, typeOfClothing, brand, size, color, purchasePrice, season, imageURL, userId)
            const pieceIdToBeUpdated: number = parseInt(req.params.id);

            if ( !(name || typeOfClothing || brand || size|| color || purchasePrice || season || imageURL) ) {
                throw new Error('No fields provided to update');
            }
            if (!pieceIdToBeUpdated) {
                throw new Error('Missing Piece of clothing ID in the URL or request body.');
            }

            let query = `
                UPDATE piece_of_clothings
                SET 
                    name = ?,
                    type_of_clothing = ?,
                    brand = ?,
                    size = ?,
                    color = ?,
                    purchase_price = ?,
                    season = ?,
                    image_url = ? 
                WHERE id = ?;`;
            
            let data = [
                updatedFields.name,
                updatedFields.typeOfClothing,
                updatedFields.brand,                
                updatedFields.size,				
                updatedFields.color,
                updatedFields.purchasePrice,
                updatedFields.season,
                updatedFields.imageURL,
                pieceIdToBeUpdated
            ]

            let [results, fp] = await conn.execute(query, data);
            
            res.json({
                ok: true
            })

        } catch(e) {
            console.error(e);
            res.json({ status: "error", message: `Failed to Update PieceOfClothing` });
        }
    }
)

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