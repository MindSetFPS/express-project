import { Sun } from "lucide-react-native";
import { Box } from "./ui/box";
import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Icon } from "./ui/icon";

export default function Weather() {
    return (
        <HStack className='bg-yellow-100 rounded-xl items-center p-2 w-fit'>
            <Icon as={Sun} size='xl' className='mr-2 text-amber-400' />
            <Heading size='lg'>32° en Mérida, Yucatán.</Heading>
        </HStack>
    )
}