import { ScrollView } from "react-native";
import ClothesList from "./ClothesList";
import { Box } from "./ui/box";
import { Heading } from "./ui/heading";
import { VStack } from "./ui/vstack";

export default function ShopContent() {
    return (
        <ScrollView>
            <VStack space="4xl" className="mx-auto">
                <Heading size="4xl"> Tienda</Heading>
                <ClothesList />

                <Heading size="4xl"> Novedades </Heading>
                <ClothesList />

                <Heading size="4xl"> Combina con tu estilo </Heading>
                <ClothesList />

                <Heading size="4xl"> Cerca de ti </Heading>
                <ClothesList />
            </VStack>
        </ScrollView>
    )
}