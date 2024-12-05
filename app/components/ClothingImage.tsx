import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "./ui/text";

interface clothingImageProps {
    name: string,
    url: string
}

const ClothingImage: React.FC<clothingImageProps> = ({ name, url }) => {
    return (
        <Box>
            <Image
                size="xl"
                source={{
                    uri: url
                }}
                alt="image"
            />
            <Text>
                {name}
            </Text>
        </Box>
    )
}

export default ClothingImage;