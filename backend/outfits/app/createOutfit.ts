import mySqlOutfitRepository from "../infra/MySQLOutfitRepository";
import Outfit from "../domain/Outfit";
import { createConnection } from "mysql2/promise"
import connection from "../../shared/MySQLConnectionOptions";

export default async function createOutfit(
    userId: number,
    imageURL: string,
    pieceOfClothingIdList: number[]
) {

    let OutfitRepository = mySqlOutfitRepository;
    let outfit: Outfit = new Outfit(userId, imageURL)
    let obj = await OutfitRepository.createOutfit(outfit)

    try {
        const conne = await createConnection(connection);
        console.log('Connected to the database!');

        pieceOfClothingIdList.forEach(pieceOfClothingId => {
            conne.execute('INSERT INTO outfit_piece_of_clothing (outfit_id, piece_of_clothing_id) VALUES (?, ?)', [obj?.outfitId, pieceOfClothingId]);
        });

    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}