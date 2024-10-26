import { View } from 'react-native';

import { Heading } from '@/components/ui/heading';

export default function HomeScreen() {
  return (
    <View className='container'>
      <Heading size='5xl' className='text-blue-300'> Hola </Heading>
    </View>
  );
}