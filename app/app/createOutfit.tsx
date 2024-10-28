import ClothesList from "@/components/ClothesList";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import OutfitPiece from "@/components/OutfitPiece";

export default function CreateOutfit() {
    return (
        <VStack className="container w-full mx-auto px-4 flex flow-col">
            <Heading size="2xl">
                Create Outfit
            </Heading>
            <VStack>
                <OutfitPiece bodyPartName="Head" />
                <OutfitPiece bodyPartName="Top" />
                <OutfitPiece bodyPartName="Bottom" />
                <OutfitPiece bodyPartName="Accessory" />
                <OutfitPiece bodyPartName="Shoes" />
            </VStack>
        </VStack>
    )
}