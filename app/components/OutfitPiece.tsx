import { FontAwesome5 } from "@expo/vector-icons";
import { HStack } from "./ui/hstack";
import { VStack } from "./ui/vstack";
import ClothesList from "./ClothesList";
import { Heading } from "./ui/heading";

interface Props {
    bodyPartName: string;
};

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
    {
        name: "shirt",
        price: 124,
        imageURL: "https://picsum.photos/seed/picsum/400/300",
        id: 2
    },
    {
        name: "shirt",
        price: 124,
        imageURL: "https://picsum.photos/seed/picsum/400/300",
        id: 2
    },
]


const OutfitPiece: React.FC<Props> = ({ bodyPartName }) => {
    return (
        <HStack className="items-center">
            <FontAwesome5 name="square-full" size={72} color="black" className="mr-3" />
            <VStack>
                <Heading>{bodyPartName}</Heading>
                <ClothesList clothesList={vars} />
            </VStack>
        </HStack>
    )
}

export default OutfitPiece;