import { CheckIcon, GlobeIcon, LucideSettings2 } from "lucide-react-native";
import { Box } from "./ui/box";
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from "./ui/checkbox";
import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Progress, ProgressFilledTrack } from "./ui/progress";
import { Text } from "./ui/text";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Badge, BadgeIcon, BadgeText } from "./ui/badge";
import { VStack } from "./ui/vstack";

export default function FilterBar() {
    return (
        <VStack space="xl">
            <Box>
                <Heading> Precio </Heading>
                <Progress value={40}>
                    <ProgressFilledTrack />
                </Progress>
            </Box>

            <Heading>Color</Heading>
            <HStack space="xs">
                <FontAwesome name="circle" size={24} color="black" />
                <FontAwesome name="circle" size={24} color="blue" />
                <FontAwesome name="circle" size={24} color="green" />
                <FontAwesome name="circle" size={24} color="yellow" />
                <FontAwesome name="circle" size={24} color="orange" />
            </HStack>

            <Box>
                <Heading>Tipo</Heading>
                <Checkbox size="sm" isInvalid={false} isDisabled={false} value="true"  >
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Playeras</CheckboxLabel>
                </Checkbox>

                <Checkbox size="sm" isInvalid={false} isDisabled={false} value="true"  >
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Tops</CheckboxLabel>
                </Checkbox>

                <Checkbox size="sm" isInvalid={false} isDisabled={false} value="true"  >
                    <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Jeans</CheckboxLabel>
                </Checkbox>

                <Text> Ver más </Text>
            </Box>

            <Box>
                <Heading>Talla</Heading>
                <Badge size="sm" variant="solid" action="info" className="w-fit" >
                    <BadgeText>Mis tallas</BadgeText>
                    <BadgeIcon as={LucideSettings2} className="ml-1" />
                </Badge>
            </Box>
        </VStack>
    )
}