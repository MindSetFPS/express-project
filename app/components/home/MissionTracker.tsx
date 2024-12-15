import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Progress, ProgressFilledTrack } from "../ui/progress";

export default function MissionTracker(
    { text, objective, current} : 
    { text: string, objective: number, current: number}) 
{
    return (
        <Box className="mt-2">
            <HStack className="justify-between">
            <Heading size="sm"> {text} </Heading>
                <Heading size="sm">{current}/{objective}</Heading>
            </HStack>
            <Progress>
                <ProgressFilledTrack />
            </Progress>
        </Box>

    )
}