import AppLogo from "../AppLogo";
import { Card } from "../ui/card";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import MissionTracker from "./MissionTracker";

// TODO: Make real tracking of stats
export default function MissionCard() {
    return (
        <Card variant='outline' className='w-full bg-white rounded-2xl' >
            <HStack className='items-center'>
                <Heading size='2xl'>Bienvenida a</Heading>
                <AppLogo />
            </HStack>
            <Text>Sigue estos pasos para sacarle todo el provecho a mefit y a tu guardarropa.</Text>
            <MissionTracker text="Sube 5 prendas a tu armario" current={1} objective={5} />
            <MissionTracker text="Crea 2 outfits" current={0} objective={2} />
        </Card>
    )

}