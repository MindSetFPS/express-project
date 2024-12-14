import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Image } from "../ui/image";
import ChipList from "../ChipList";
import { VStack } from "../ui/vstack";
import { Divider } from "../ui/divider";

interface Stylist {
    id: number,
    name: string,
    pictureURL: string
}

export default function StylistItem({ id, name, pictureURL }: Stylist) {
    return (
        <>
            <Divider />
            <HStack>
                <Image className="rounded-full mr-2" size="md" source={{ uri: pictureURL }} />
                <VStack space="sm" className="justify-center ">
                    <Heading size="xl" className="ml-1">{name}</Heading>
                    <ChipList />
                </VStack>
            </HStack>
        </>
    )
}