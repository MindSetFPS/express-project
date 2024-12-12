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
import { useMediaQuery } from "./ui/utils/use-media-query";
import React, { Children, ReactNode, useEffect } from "react";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from "./ui/select/select-actionsheet";
import { router, useNavigation } from "expo-router";
import { Button } from "./ui/button";

const MobileBar: React.FC<{ children: ReactNode, isOpen: boolean, onClose: () => void, }> =
    ({ children, isOpen, onClose }) => {
        return (
            <Box className="flex flex-col">
                {/* {children} */}
                <Actionsheet isOpen={isOpen} onClose={() => onClose()}>
                    <ActionsheetBackdrop />
                    <ActionsheetContent>
                        <ActionsheetDragIndicatorWrapper>
                            <ActionsheetDragIndicator />
                        </ActionsheetDragIndicatorWrapper>
                        <ActionsheetItem >
                            <ActionsheetItemText>Edit Message</ActionsheetItemText>
                        </ActionsheetItem>
                        <ActionsheetItem >
                            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
                        </ActionsheetItem>
                        <ActionsheetItem >
                            <ActionsheetItemText>Remind Me</ActionsheetItemText>
                        </ActionsheetItem>
                        <ActionsheetItem >
                            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
                        </ActionsheetItem>
                        <ActionsheetItem isDisabled >
                            <ActionsheetItemText>Delete</ActionsheetItemText>
                        </ActionsheetItem>
                    </ActionsheetContent>
                </Actionsheet>
            </Box>
        )
    }

function DesktopBar() {
    return (
        <VStack space="xl" className="w-1/5">
            <Text> Return when its desktop</Text>
        </VStack>
    )
}

function Filters() {
    return (
        <>
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
        </>
    )
}

interface FilterBarProps {
    showFilterBar: boolean;
    onCloseFilterBar: () => void;
}

export default function FilterBar({ showFilterBar, onCloseFilterBar }: FilterBarProps) {

    const [isMobile, isTablet, isSmallScreen, isLargeScreen] = useMediaQuery([
        {
            maxWidth: 480,
        },
        {
            minWidth: 481,
            maxWidth: 768,
        },
        {
            minWidth: 769,
            maxWidth: 1440,
        },
        {
            minWidth: 1441,
        },
    ])

    // let Bar: React.FC<{ children: ReactNode }>;
    let Bar: React.FC<any>;

    Bar = MobileBar

    if (isSmallScreen || isTablet) {
        Bar = DesktopBar
    }

    return (
        <Bar isOpen={showFilterBar} onClose={onCloseFilterBar} >
            <Filters />
        </Bar>
    )
}