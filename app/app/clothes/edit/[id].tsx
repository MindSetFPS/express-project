import { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text/index.web";
import { useLocalSearchParams } from "expo-router";
import FormCreatePieceOfClothing from "../../../components/FormCreatePieceOfClothing"
import { PostPieceOfClothing } from "@/interfaces";

export default function EditClothes() {

    const [productPost, setProductPost] = useState<any>();
    const { id } = useLocalSearchParams()
    
    let p: PostPieceOfClothing = {
        // this should also have an id
        name: "clothing cool",
        typeOfClothing: "t-shirt",
        brand: "zara",
        size: "small",
        color: "blue",
        purchasePrice: 503,
        season: "windter",
        imageURL: "http://localhost:9000/app/cs-l-sueter.jpg",
    }
    
    return (

        <Box className="container mx-auto px-4 md:px-12 bg-white h-screen">
            <FormCreatePieceOfClothing 
                liftProps={(d) => {
                    console.log(d)
                }} 
                product={p}
            />
        </Box>
    )
}