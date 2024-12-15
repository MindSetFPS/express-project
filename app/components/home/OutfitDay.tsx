import { router } from "expo-router";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";
import { Icon } from "../ui/icon";
import { VStack } from "../ui/vstack";
import { Plus } from "lucide-react-native";

export default function OutfitDay({
    weekDay,
    weatherIcon,
    isToday
}: {
    weekDay: string,
    weatherIcon: any,
    isToday: boolean
}) {
    return (
        <VStack
            className={`justify-center items-center ${isToday ? "bg-white" : ""} rounded-lg p-2`}>
            {weatherIcon ? <Icon as={weatherIcon} size="xl" /> : ""}
            <Heading size="xl">{weekDay}</Heading>
            <Button variant="link" onPress={() => router.push("/outfitsPage")}>
                <Icon as={Plus} />
            </Button>
        </VStack>
    )
}