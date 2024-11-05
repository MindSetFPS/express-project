import 'dotenv/config' // Must go first
console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_PASSWORD)
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { apiRoutes } from './apiRoutes';
import cors from "cors";
import swaggerOutput from "./swagger_output.json";
import path from 'path';

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

app.listen(3482, '0.0.0.0');