import 'dotenv/config' // Must go first
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { apiRoutes } from './apiRoutes';
import swaggerOutput from "./swagger_output.json";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("site"));

apiRoutes(app)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput))

app.listen(3482, '0.0.0.0');