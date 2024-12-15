import { ScrollView } from "react-native";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Image } from "../ui/image";

export default function ProfileContent() {
    return (
        <Box className=''>
            <Heading>Outfits</Heading>
            <ScrollView horizontal={true}>
                <HStack>
                    {Array(6).fill('').map((_, index) => (
                        <Box key={index} className="w-36 h-36 bg-gray-200 rounded-lg mr-2">
                            <Image source={{ uri: 'https://via.placeholder.com/140' }} className="w-full h-full rounded-lg" />
                        </Box>
                    ))}
                </HStack>
            </ScrollView>
        </Box>

    )
}