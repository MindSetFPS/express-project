import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Image } from "../ui/image";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";
import SocialStats from "./SocialStats";

export default function ProfileDescription() {
    return (
        <HStack className="w-full items-center ">
            <Image source={{ uri: 'https://media.istockphoto.com/id/894670560/photo/beautiful-cheerful-teenage-girl-taking-a-selfie-in-bedroom.jpg?s=612x612&w=0&k=20&c=RQxnIpgwOP6CTl--xTbIFWuGm0vNY_33E55_w8KcXhE=' }} className="w-28 h-28 rounded-full " />
            <VStack className=' px-2'>
                <Box className="flex-row w-full justify-start ">
                    <SocialStats count={256} text='seguidores' />
                    <SocialStats count={128} text='seguidos' />
                    <SocialStats count={48} text='outfits' />
                </Box>
                <Box className="w-full  mt-2">
                    <Text size='xs' >
                        "Amante de la música . Inspirando a otros a través de mis aventuras y estilo personal."
                    </Text>
                </Box>
            </VStack>
        </HStack>

    )
}