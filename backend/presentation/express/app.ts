import dotenv from 'dotenv';
dotenv.config({
    path: `.env.${process.env.ENV}`
})
import express from 'express';
import { apiRoutes } from './apiRoutes';
import cors from "cors";
import path from 'path';

const app = express();

if(process.env.ENV === 'dev'){
    app.use(cors())
} 

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "site")));

apiRoutes(app)


export default app;