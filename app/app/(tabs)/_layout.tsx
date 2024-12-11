import { Tabs, router } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Icon } from '@/components/ui/icon';
import { Search, ShoppingBag } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { House, Store, Shirt, CircleUserRound } from 'lucide-react-native';
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
          marginTop: 5,
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
            <Icon as={House} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Icon as={Store} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="wardrobe"
        options={{
          title: 'Wardrobe',
          tabBarIcon: ({ color, focused }) => (
            <Icon as={Shirt} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Icon as={CircleUserRound} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
