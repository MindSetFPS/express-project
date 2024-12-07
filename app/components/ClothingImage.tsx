import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "./ui/text";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";

interface clothingImageProps {
    name: string,
    url: string,
    text?: boolean,
    onClick?: () => void,
    border?: boolean,
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none'
}

const ClothingImage: React.FC<clothingImageProps> = ({
    name,
    url,
    onClick,
    text = true,
    border = false,
    size = "xl"
}) => {

    const [selected, setSelected] = useState<boolean>(false);

    function handleClick() {
        onClick ? onClick() : false
        setSelected(!selected)
    }


    return (
        <TouchableWithoutFeedback onPress={ handleClick }>
            <Box className=" rounded-lg" >
                <Image
                    size={size}
                    source={{
                        uri: url
                    }}
                    alt="image"
                    className={`rounded-lg ${selected && border ? "border-solid border-4 border-sky-500" : ""}`}
                />
                <Text>
                    {text ? name : ''}
                </Text>
            </Box>
        </TouchableWithoutFeedback>
    )
}

export default ClothingImage;