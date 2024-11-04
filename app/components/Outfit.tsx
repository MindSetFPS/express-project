import { Box } from "./ui/box";
import { Image } from '@/components/ui/image';
import { FavouriteIcon, Icon } from "./ui/icon";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";

export default function Outfit() {
    return (
        <Box className="border-2 border-gray-300 rounded-2xl pt-4 bg-white mr-4">
            <Image
                source={{
                    uri: "https://i.pinimg.com/564x/cb/82/f8/cb82f818fb4116a84436022b871682d6.jpg"
                }}
                size="2xl"
                resizeMode="contain"
            />
            <HStack className="items-center px-4 py-2 ">
                <Icon as={FavouriteIcon} />
                <Text> 32</Text>
            </HStack>
        </Box>
    )
}