import { SafeAreaView, View } from 'react-native';

import { Heading } from '@/components/ui/heading';
import { ScrollView } from "react-native"
import { VStack } from '@/components/ui/vstack';
import ClothesList from '@/components/ClothesList';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { ArrowRight } from 'lucide-react-native';
import { HStack } from '@/components/ui/hstack';
import { Sun } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>

        <VStack className='container mx-auto px-4 pt-4' space='md'>
          <Card variant='outline' className='bg-white rounded-3xl' >
            <HStack className='py-12 items-center'>
              <Heading size='3xl'> Empieza a digitalizar tu armario</Heading>
              <Icon as={ArrowRight} size='xl' />
            </HStack>
          </Card>
          <Box className='flex sm:flex-row'>
            <Card variant='outline'
              className='bg-white rounded-3xl w-full flex flex-row items-center py-12 '>
              <Heading size='xl'> Explora la tienda</Heading>
              <Icon as={ArrowRight} size='lg' />
            </Card>
            <Card variant='outline'
              className='bg-white rounded-3xl w-full flex flex-row items-center md:mx-4 my-2 md:my-0'>
              <Heading size='xl'> Conoce a los estilistas </Heading>
              <Icon as={ArrowRight} size='lg' />
            </Card>
            <Card variant='outline' className='bg-white rounded-3xl w-full flex flex-row items-center' >
              <Button size="md" variant="link" action="primary" onPress={() => router.push('createOutfit')}>
                <ButtonText>  ¿Qué te vas a poner hoy? </ButtonText>
                <Icon as={ArrowRight} size='lg' />
              </Button>
            </Card>
          </Box>
          <Heading size='2xl'> Prendas de tu armario que van bien con este clima:</Heading>

          <HStack className='items-center'>
            <Icon as={Sun} size='xl' className='mr-2 text-amber-400' />
            <Heading size='lg'>32 grados en Mérida, Yucatán.</Heading>
          </HStack>
          <ClothesList />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}