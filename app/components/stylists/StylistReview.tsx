import { ScrollView } from "react-native";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Icon, StarIcon } from "../ui/icon";
import { Text } from "../ui/text";

function StarsReview() {
    return (
        <HStack>
            <Icon as={StarIcon} size="sm" />
            <Icon as={StarIcon} size="sm" />
            <Icon as={StarIcon} size="sm" />
            <Icon as={StarIcon} size="sm" />
            <Icon as={StarIcon} size="sm" />
        </HStack>

    )
}

export default function StylistReview() {
    return (
        <Box className="w-80 bg-white rounded-xl border p-2">
            <HStack className="items-center">
                <Heading size="sm">Ami</Heading>
                <StarsReview />
            </HStack>
            <Text size="xs">Es un verdadero placer trabajar con Veronica. Siempre supera mis expectativas y realmente va más allá. Esta es la segunda vez que trabajo con ella, y una vez más, entregó atuendos excepcionales para otoño/invierno. </Text>
        </Box>
    )
}