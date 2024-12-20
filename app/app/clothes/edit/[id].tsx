import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Box } from "@/components/ui/box";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import FormCreatePieceOfClothing from "../../../components/FormCreatePieceOfClothing"
import { GETPieceOfClothingById, UPDATEPieceOfClothing } from "@/interfaces";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import ModalDeletePieceOfClothing from "@/components/ModalDeletePieceOfClothing";
import ModalPostPieceOfClothingInMarket from "@/components/ModalPostPieceOfClothingInMarket";
import { Filter, ShoppingBag } from "lucide-react-native";

export default function EditClothes() {
    const [pieceOfClothing, setPieceOfClothing] = useState<any>();
    const { id } = useLocalSearchParams<{ id: string }>()
    const navigation = useNavigation()

    useEffect(() => {
        if (pieceOfClothing) {
            navigation.setOptions({
                title: pieceOfClothing.name,
                headerShown: true,
            })
        }
    }, [pieceOfClothing])

    useEffect(() => {
        GETPieceOfClothingById(id)
            .then((e) => setPieceOfClothing(e))
    }, []);

    if (pieceOfClothing == null) return ("loading")

    return (
        <ScrollView>
            <Box className="container mx-auto px-4 md:px-12 bg-white">
                <FormCreatePieceOfClothing
                    liftProps={(d) => { setPieceOfClothing(d) }}
                    product={pieceOfClothing}
                />
                <Button
                    onPress={() => {
                        UPDATEPieceOfClothing(parseInt(id), pieceOfClothing)
                        console.log(pieceOfClothing)
                    }}
                    className="mb-2 mt-4"
                >
                    <ButtonText>Actualizar</ButtonText>
                </Button>

                <Box className="mb-2">
                    <ModalPostPieceOfClothingInMarket clothingId={id} />
                </Box>
                <ModalDeletePieceOfClothing />
            </Box>
        </ScrollView>
    )
}