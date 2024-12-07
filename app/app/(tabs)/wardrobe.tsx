import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClothesPage from '../clothes/index';
import OutfitsPage from "../outfitsPage";
import CalendarPage from "../calendarPage";

const Tab = createMaterialTopTabNavigator();

export default function Wardrobe() {
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