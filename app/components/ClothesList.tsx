import { ScrollView } from "react-native"
import ClothesPiece from "./ClothesPiece"
import { HStack } from "./ui/hstack"
import React from "react"

interface ClothePiece {
    id: number,
    name: string,
    imageURL: string
    price?: number;
}

interface Props {
    clothesList: ClothePiece[];
}

const ClothesList: React.FC<Props> = ({ clothesList }) => {
    return (
        <ScrollView horizontal={true} >
            <HStack space="3xl">
                {
                    clothesList.map(
                        (clothePiece) => (
                            <ClothesPiece
                                key={clothePiece.id}
                                name={clothePiece.name}
                                imageURL={clothePiece.imageURL}
                            />
                        ))
                }
            </HStack>
        </ScrollView>
    )
}

export default ClothesList; 