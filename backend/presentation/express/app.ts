import 'dotenv/config' // Must go first
console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_PASSWORD)
import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { apiRoutes } from './apiRoutes';
import cors from "cors";
import swaggerOutput from "./swagger_output.json";
import path from 'path';
import multer from 'multer';
import * as Minio from "minio"

const upload = multer({
    storage: multer.memoryStorage(),
})

const minioClient = new Minio.Client({
    endPoint: 'localhost',
     port: 9000,
     useSSL: false,
     accessKey: "193G0yx48FCB1mvuZPaY",
     secretKey: "YR8I1Lx4QKOZeBoRDyUs3nIlsCo9Vjko5r96TIYj"
});

const app = express();

if(process.env.ENV === 'dev'){
    console.log("using dev env")
    app.use(cors())
}

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "site")));

apiRoutes(app)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput))

app.post("/upload", upload.single('file'), (req: Request, res: Response) => {
    if(req.file){
        minioClient.putObject("app", req.file.originalname, req.file.buffer)
    }
    
    res.send("good")
})

export default app;