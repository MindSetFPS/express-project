import mySqlOutfitRepository from "../infra/MySQLOutfitRepository"

export default function getAllOutfits(){
    let OutfitRepository = mySqlOutfitRepository;

    return mySqlOutfitRepository.getAllOutfits()
    .then((data) => {
        return data;
    })
    .catch( err => {
        console.error(err)
    })

}