import mySqlOutfitRepository from "../infra/MySQLOutfitRepository";
import Outfit from "../domain/Outfit";

export default function createOutfit(
    outfitId: number,
    userId: number,
){
    let OutfitRepository = mySqlOutfitRepository;
    let outfit = new Outfit(outfitId,userId);
    
    return OutfitRepository.createOutfit(outfit)
    .then()
    .catch(err => {
        console.log("Error: " + err);
    })
}