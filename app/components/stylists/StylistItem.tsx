import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Image } from "../ui/image";
import ChipList from "../ChipList";
import { VStack } from "../ui/vstack";
import { Divider } from "../ui/divider";
import { Link } from "expo-router";

interface Stylist {
    id: number,
    name: string,
    pictureURL: string,
    highlights: string[],
    description: string
}

export default function StylistItem({ id, name, pictureURL, highlights, description }: Stylist) {
    return (
        <Link href={{
            pathname: '/stylists/[id]',
            params: {
                id: id,
                pictureURL: pictureURL,
                name: name,
                highlights: highlights,
                description: description
            }
        }} >
            <Divider />
            <HStack>
                <Image className="rounded-full mr-2" size="md" source={{ uri: pictureURL }} />
                <VStack space="sm" className="justify-center ">
                    <Heading size="xl" className="ml-1">{name}</Heading>
                    <ChipList />
                </VStack>
            </HStack>
        </Link>
    )
}