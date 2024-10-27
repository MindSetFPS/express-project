import { ScrollView } from "react-native"
import ClothesPiece from "./ClothesPiece"
import { HStack } from "./ui/hstack"

export default function ClothesList() {
    const vars = [
        {
            name: "pantalon",
            price: 909,
            imageURL: "https://picsum.photos/seed/picsum/400",
            id: 1
        },
        {
            name: "shirt",
            price: 124,
            imageURL: "https://picsum.photos/seed/picsum/400/300",
            id: 2
        },
    ]
    return (
        <ScrollView horizontal={true} >
            <HStack space="3xl">
                {
                    vars.map(
                        (element) => (
                            <ClothesPiece
                                key={element.id}
                                name={element.name}
                                imageURL={element.imageURL}
                            />
                        ))
                }
            </HStack>
        </ScrollView>
    )
}