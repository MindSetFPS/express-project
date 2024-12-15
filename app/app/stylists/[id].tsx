import ChipList from "@/components/ChipList";
import StylistReview from "@/components/stylists/StylistReview";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { ScrollView } from "react-native";

export default function Stylist({ }) {
    const { id, name, pictureURL, highlights, description } = useLocalSearchParams<{ id: string, name: string, pictureURL: string, highlights: string, description: string }>()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: "Style bundle",
            headerShown: true,
        })
    }, [])

    return (
        <>
            <Box className=" bg-white p-4 z-10 w-full absolute bottom-0 left-0">
                <Box className="flex-row justify-between mb-2">
                    <Text className="text-lg font-bold">Total</Text>
                    <Text className="text-lg font-bold">${400}</Text>
                </Box>
                <Button size="lg" className="rounded-xl">
                    <ButtonText >Comprar Style Bundle</ButtonText>
                </Button>
            </Box>
            <ScrollView>
                <VStack space="md" className="bg-white px-4 pt-4">
                    <HStack className="items-center">
                        <Image className="rounded-full mr-4" source={{ uri: String(pictureURL) }} />
                        <VStack space="xs">
                            <Heading size="3xl">{name}</Heading>
                            <ChipList />
                        </VStack>
                    </HStack>
                    <Divider />
                    <Heading size="sm">Lo que otros usuarios opinan de {name}</Heading>
                    <ScrollView horizontal={true}>
                        <HStack space="md">
                            <StylistReview />
                            <StylistReview />
                            <StylistReview />
                        </HStack>
                    </ScrollView>
                    <Divider />
                    <Heading size="lg">Tu style bundle incluye: </Heading>
                    <VStack>
                        {highlights.split(",").map((t) => <Heading size="sm">• {t}</Heading>)}
                    </VStack>
                    <Text className="pb-32">{description}</Text>
                </VStack>
            </ScrollView>
        </>
    )
}