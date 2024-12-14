import { useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Search, ShoppingBag } from "lucide-react-native";
import AppLogo from "@/components/AppLogo";
import { Box } from "@/components/ui/box";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import ShopTab from "../shopTab";
import StylistsScreen from "../stylistsTab";

const Tab = createMaterialTopTabNavigator();

export default function Shop() {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerShadowVisible: false,
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
        <Tab.Navigator
            screenOptions={{
                tabBarContentContainerStyle: {
                    justifyContent: "space-around"
                },
            }}
        >
            <Tab.Screen name="Tienda" component={ShopTab} />
            <Tab.Screen name="Estilistas" component={StylistsScreen} />
        </Tab.Navigator>
    )


}