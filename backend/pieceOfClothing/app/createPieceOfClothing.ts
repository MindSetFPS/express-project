import PieceOfClothing from "../domain/PieceOfClothing";
import mysqlPieceOfClothingRepository from "../infra/MySQLPieceOfClothingRepository";

export default function createPieceOfClothing(pieceOfClothing: PieceOfClothing){
    let PieceOfClothingRepository = mysqlPieceOfClothingRepository
    
    return PieceOfClothingRepository.createPieceOfClothing(pieceOfClothing)
    .then()
    .catch( error => console.error(error))
}