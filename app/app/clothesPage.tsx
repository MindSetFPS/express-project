import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { BadgeIcon, CirclePlus, Search } from 'lucide-react-native';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Fab, FabLabel, FabIcon } from '@/components/ui/fab';
import { HStack } from "@/components/ui/hstack";
import { router } from 'expo-router';

export default function ClothesPage() {
    return (
        <Box className="container mx-auto px-12 py-4 bg-white h-screen">
            <HStack 
                space="md" 
                className="flex-1 flex-row justify-between"
            >
                <HStack className="h-min">
                    <Badge size="sm" action="info" className="rounded-full">
                        <BadgeText>Hello</BadgeText>
                    </Badge>
                    <Badge size="sm" action="info" className="rounded-full">
                        <BadgeText>Hello</BadgeText>
                    </Badge>
                    <Badge size="sm" action="info" className="rounded-full">
                        <BadgeText>Hello</BadgeText>
                    </Badge>
                    <Badge size="sm" action="info" className="rounded-full">
                        <BadgeText>Hello</BadgeText>
                    </Badge>
                    <Badge action="info" className="rounded-full">
                        <BadgeText>Hello</BadgeText>
                    </Badge>
                    <Badge action="info" className="rounded-full">
                        <BadgeText>Hello</BadgeText>
                    </Badge>

                    <Badge action="info" className="rounded-full">
                        <BadgeText>Hello</BadgeText>
                    </Badge>
                </HStack>
                <Input size="sm" variant="rounded">
                    <InputField placeholder="Buscar" />
                    <InputSlot className="mr-4">
                        <InputIcon as={Search} />
                    </InputSlot>
                </Input>
            </HStack>
            <Fab
                onPress={ () => router.push('/addClothes')}
            >
                <FabLabel> Agregar </FabLabel>
                <FabIcon as={CirclePlus} />
            </Fab>
        </Box>
    )
}
