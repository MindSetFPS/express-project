import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { Image } from "./ui/image";
import { Text } from "./ui/text";

interface Props {
    name: string;
    price?: number;
    imageURL?: string;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | "full" | "none" | undefined;

}

const ClothesPiece: React.FC<Props> = ({ name, price, imageURL, size }) => {
    return (
        <Card className="shadow-soft-3">
                {imageURL ? <Image source={imageURL} size={size} alt="dummy alt" /> : ""}
                <Heading>{name ? name : "nada"}</Heading>
                {price ?  <Text> "$" + price </Text> : ""}
        </Card>
    )
}

export default ClothesPiece;