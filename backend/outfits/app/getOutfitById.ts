import mySqlOutfitRepository from "../infra/MySQLOutfitRepository"
import Outfit from "../domain/Outfit"

export default function getOutfitByID(id: number){
    let OutfitRepository = mySqlOutfitRepository
    
    return OutfitRepository.getOutfitByID(id)
    .then((outfit)=>{
            return outfit;
    })
    .catch(error => {
        console.log("Error in getOutfitByID", error);
    })
}