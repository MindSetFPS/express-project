import { Tabs, router } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Spinner } from '@/components/ui/spinner';
import { Icon } from '@/components/ui/icon';
import { Search, ShoppingBag } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function TabLayout() {
  const colorScheme = useColorScheme();


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
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
                  <InputIcon as={Search}/>
                </InputSlot> 
              </Input>
              <Button onPress={() => {
                router.push('shoppingcar');
              }}>Carrito</Button>
              <Button onPress={() => {
                router.push('paymentMethod');
              }}>paymentMethod</Button>
              <Icon as={ShoppingBag} size='xl' />
            </Box>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wardrobe"
        options={{
          title: 'Wardrobe',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
