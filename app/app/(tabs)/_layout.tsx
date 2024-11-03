import { Tabs, router } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Icon } from '@/components/ui/icon';
import { Search, ShoppingBag } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { House, Store, Shirt, CircleFadingPlus, CircleUserRound } from 'lucide-react-native';
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
          headerTitle: (props) => (
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
          headerTitle: (props) => (
            <Box className='flex flex-row justify-end items-center w-screen p-8'>
              <Input variant='rounded' size='sm' className='w-2/4 md:w-auto' >
                <InputField />
                <InputSlot className='pr-3'>
                  <InputIcon as={Search} />
                </InputSlot>
              </Input>
              <Button onPress={() => {
                router.push('/shoppingCart');
              }}>Carrito</Button>
              <Button onPress={() => {
                router.push('/paymentMethod');
              }}>paymentMethod</Button>
              <Button onPress={() => {
                router.push('/addPaymentMethod');
              }}>paymentMethod</Button>
              <Icon as={ShoppingBag} size='xl' />
            </Box>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Icon as={Store} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="new"
        options={{
          title: 'Nuevo',
          tabBarIcon: ({ color, focused }) => (
            <Icon as={CircleFadingPlus} color={color} />
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
