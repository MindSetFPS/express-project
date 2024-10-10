import 'dotenv/config' // Must go first
import express from 'express';
import { apiRoutes } from './apiRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("site"));

apiRoutes(app)

app.listen(3000, '0.0.0.0');