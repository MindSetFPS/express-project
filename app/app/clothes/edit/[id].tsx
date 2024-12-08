import { useEffect, useState } from "react";
import { Box } from "@/components/ui/box";
import { useLocalSearchParams } from "expo-router";
import FormCreatePieceOfClothing from "../../../components/FormCreatePieceOfClothing"
import { GETPieceOfClothingById, IPieceOfClothing, UPDATEPieceOfClothing } from "@/interfaces";
import { Button, ButtonText } from "@/components/ui/button";

export default function EditClothes() {

    const [pieceOfClothing, setPieceOfClothing] = useState<any>();
    const { id } = useLocalSearchParams<{ id: string }>()

    useEffect(() => {
        GETPieceOfClothingById(id)
            .then((e) => setPieceOfClothing(e))
    }, []);

    if (pieceOfClothing == null) return ("loading")

    return (
        <Box className="container mx-auto px-4 md:px-12 bg-white h-screen">
            <FormCreatePieceOfClothing
                liftProps={(d) => {setPieceOfClothing(d)}}
                product={pieceOfClothing}
            />
            <Button
                onPress={() => {
                    UPDATEPieceOfClothing(parseInt(id), pieceOfClothing)
                    console.log(pieceOfClothing)
                }}
            >
                <ButtonText>Actualizar</ButtonText>
            </Button>

            <Button
                className="mt-2"
                onPress={() => {
                }}
                variant="outline"
            >
                <ButtonText>Poner a la venta</ButtonText>
            </Button>

        </Box>
    )
}