import Chip from "./Chip";
import { HStack } from "./ui/hstack";

export default function ChipList() {
    return (

        <HStack className="h-min">
            <Chip />
            <Chip />
            <Chip />
            <Chip />
            <Chip />
            <Chip />
        </HStack>
    )
}