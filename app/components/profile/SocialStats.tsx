import { Box } from "../ui/box";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

export default function SocialStats({ count, text }: { count: number, text: string }) {
    return (
        <VStack className="items-center mx-1">
            <Text >{count}</Text>
            <Text size="xs" >{text}</Text>
        </VStack>
    )
}