import { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClothesPage from '../clothes/index';
import OutfitsPage from "../outfitsPage";
import CalendarPage from "../calendarPage";

const Tab = createMaterialTopTabNavigator();

export default function Wardrobe() {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: "Mi armario", // this must come from db instead of hardcoding
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 32
            },
            headerShadowVisible: false,
            headerShown: true,
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
            <Tab.Screen name="Prendas" component={ClothesPage} />
            <Tab.Screen name="Outfits" component={OutfitsPage} />
            <Tab.Screen name="Calendario" component={CalendarPage} />
        </Tab.Navigator>
    )
}