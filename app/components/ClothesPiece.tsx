import { TouchableWithoutFeedback } from "react-native";
import { Box } from "./ui/box";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { Image } from "./ui/image";
import { Text } from "./ui/text";
import { router } from "expo-router";
// import { Image } from "react-native";

interface Props {
    id: number;
    name: string;
    price?: number;
    imageURL?: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | "full" | "none" | undefined;
    sellingPrice?: number;
}

const ClothesPiece: React.FC<Props> = ({ id, name, imageURL, size, sellingPrice }) => {
    return (
        <TouchableWithoutFeedback onPress={() => router.navigate(`/products/${id}`)} >
            <Card className="p-0 rounded-lg h-min">
                {
                    imageURL ?
                        <Image
                            className="h-[256px] w-auto rounded-lg"
                            resizeMethod="scale"
                            resizeMode="cover"
                            source={imageURL}
                            alt="dummy alt" /> : ""
                }

                <Box className="p-2">
                    <Heading size="sm" >{name ? name : "nada"}</Heading>
                    {sellingPrice ? <Text> ${sellingPrice} </Text> : ""}
                </Box>
            </Card>
        </TouchableWithoutFeedback>
    )
}

export default ClothesPiece;