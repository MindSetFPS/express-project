import React from 'react';
import { Tabs } from 'expo-router';
import { House, Store, Shirt, CircleUserRound } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Icon } from '@/components/ui/icon';
import AppLogo from '@/components/AppLogo';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarItemStyle: {
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          marginTop: 0,
        }
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: true,
          headerTitle: () => (
            <AppLogo />
          ),
          tabBarIcon: ({ color, focused }) => (
            <Icon as={House} size='xl' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Icon as={Store} size='xl' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wardrobe"
        options={{
          title: 'Wardrobe',
          tabBarIcon: ({ color, focused }) => (
            <Icon as={Shirt} size='xl' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Icon as={CircleUserRound} size='xl' color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
