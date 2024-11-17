import swaggerAutogen from 'swagger-autogen';
import { OrderExample } from '../../orders/domain/IOrder';
import { OrderProductExample } from '../../orderProducts/domain/IOrderProduct';
import { outfitExample } from '../../outfits/domain/IOutfit';
import { productExample } from '../../products/domain/IProduct';
import { userExample } from '../../users/domain/IUser';
import { pieceOfClothingExample } from '../../pieceOfClothing/domain/IPieceOfClothing';

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Swagger Demo Project',
        description: 'Implementation of Swagger with TypeScript'
    },
    servers: [
        {
            url: 'http://localhost:3482',
            description: ''
        },
    ],
    definitions: {
        Order: OrderExample,
        OrderProduct: OrderProductExample,
        Outfit: outfitExample,
        Product: productExample,
        User: userExample,
        PieceOfClothing: pieceOfClothingExample,
/*      Make a variable required  
        AddUser: { 
          $name: 'John Doe',
          $age: 29,
          about: ''
        } */
      },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        },
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./apiRoutes.ts'];

swaggerAutogen({openapi: '3.1.0'})(outputFile, endpointsFiles, doc);