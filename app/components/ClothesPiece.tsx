import { Box } from "./ui/box";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { Text } from "./ui/text";

interface Props {
    name: string;
    price?: number;
    imageURL?: string;
}

const ClothesPiece: React.FC<Props> = ({ name, price, imageURL }) => {
    return (
        <Card className="shadow-soft-3">
                {imageURL ? <Image source={imageURL} size="2xl" /> : ""}
                <Heading>{name ? name : "nada"}</Heading>
                {price ?  <Text> "$" + price </Text> : ""}
        </Card>
    )
}

export default ClothesPiece;