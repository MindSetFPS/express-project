import { Box } from "@/components/ui/box";
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { ProductPost } from "@/interfaces";
import * as DocumentPicker from 'expo-document-picker';
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "./ui/text";
import ClothingImage from "./ClothingImage";
import { ScrollView } from "react-native";

interface updateProp {
    liftProps: (object: any) => void;
}

export default function FormCreateOutfit({ liftProps }: updateProp) {
    const [typeOfGarment, setTypeOfGarment] = useState("");
    const [url, setUrl] = useState<string | null>(null);
    const [doc, setDoc] = useState<any>();
    const [piecesOfClothings, setPiecesOfClothings] = useState([])
    const [selectedPiecesOfClothing, setSelectedPiecesOfClothing] = useState<Number[]>([])

    // https://dev.to/gboladetrue/react-custom-hooks-crafting-reusable-and-clean-code-like-a-pro-3kol
    const useGetPieceOfClothings = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/piece-of-clothing/all")
            .then(res => res.json())
            .then(jsonResponse => {
                setPiecesOfClothings(jsonResponse)
            })
    }
    
    function handleItemClick(itemId: number){
        setSelectedPiecesOfClothing(() => {
            if(selectedPiecesOfClothing.includes(itemId)){
                return selectedPiecesOfClothing.filter((id) => id != itemId)
            } else {
                return [...selectedPiecesOfClothing, itemId]
            }
        })
    }
    
    useEffect(() => {
        liftProps(selectedPiecesOfClothing)
    }, [selectedPiecesOfClothing])

    useEffect(() => {
        useGetPieceOfClothings()
    }, [])

    return (
        <Box className="mx-auto container flex items-center">
            <Box className="flex-1 md:flex-row flex-col h-min justify-evenly  items-center bg-white rounded-lg">
                <ScrollView className="h-96">
                    <Box className="grid grid-cols-2 grid-rows-1 gap-2 justify-items-center w-fit mx-auto">
                        {
                            piecesOfClothings && piecesOfClothings.length > 0 ? (
                                piecesOfClothings.map(product => (
                                    <ClothingImage
                                        name={product[1]}
                                        url={product[8]}
                                        key={product[0]}
                                        text={false}
                                        border={true}
                                        onClick={() => handleItemClick(product[0])}
                                        size="xl"
                                    />
                                )
                                )
                            )
                                :
                                <Text>
                                    No hay productos
                                </Text>
                        }
                    </Box>
                </ScrollView>

                <Box className="flex-col h-min ml-4 ">
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                <FormControlLabelText>
                                    Tipo de prenda
                                </FormControlLabelText>
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField
                                type="text"
                                onChangeText={setTypeOfGarment}
                                value={typeOfGarment}
                                placeholder="Tipo de prenda"
                            />
                        </Input>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}