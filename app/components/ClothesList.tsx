import { ScrollView } from "react-native"
import ClothesPiece from "./ClothesPiece"
import React from "react"
import { VStack } from "./ui/vstack"
import { Box } from "./ui/box"

interface ClothePiece {
    id: number,
    name: string,
    imageURL: string
    price?: number;
    sellingPrice?: number;
}

interface Props {
    clothesList: ClothePiece[];
    even: boolean;
}

const ClothesList: React.FC<Props> = ({ clothesList, even }) => {
    return (
        <ScrollView >
            <VStack space="sm"
                className="
                    grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    w-full mx-auto px-2">
                {
                    clothesList.map(
                        (clothePiece) => (
                            <ClothesPiece
                                key={clothePiece.id}
                                name={clothePiece.name}
                                imageURL={clothePiece.imageURL}
                                sellingPrice={clothePiece.sellingPrice}
                                size="xl"
                            />
                        ))
                }
            </VStack>
        </ScrollView>
    )
}

export default ClothesList; 