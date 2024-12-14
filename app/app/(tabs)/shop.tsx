import { useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { Filter, Search, ShoppingBag } from "lucide-react-native";
import AppLogo from "@/components/AppLogo";
import FilterBar from "@/components/FilterBar";
import ShopContent from "@/components/ShopContent";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Fab, FabIcon } from '@/components/ui/fab';

export default function Shop() {
    const [showFilterBar, setShowFilterBar] = useState<boolean>(false);
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerLeft: () => (<AppLogo />),
            headerTitle: () => (
                <Input variant='rounded' size='sm' className=' w-full md:w-auto' >
                    <InputField />
                    <InputSlot className='pr-3'>
                        <InputIcon as={Search} />
                    </InputSlot>
                </Input>
            ),
            headerRight: () => (
                <Box className="flex flex-row justify-between items-center mx-auto">
                    <Button
                        variant="link"
                        className="mr-2"
                        size="xl"
                        onPress={() => router.navigate('/shoppingCart')}
                    >
                        <ButtonIcon size="xl" as={ShoppingBag} />
                    </Button>
                </Box>
            )
        })
    }, [])

    return (
        <HStack className="md:container md:mx-auto flex flow-col w-screen ">
            <FilterBar
                showFilterBar={showFilterBar}
                onCloseFilterBar={() => setShowFilterBar(false)}
            />
            <ShopContent />
            <Fab
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800"
                onPress={() => setShowFilterBar(true)}
            >
                <FabIcon as={Filter} color="white" />
            </Fab>
        </HStack>
    )
}