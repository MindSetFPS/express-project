import { Application } from "express";
import globalRouter from "./globalRoutes";

export function apiRoutes(app: Application){
    app.use('/api', globalRouter)
}