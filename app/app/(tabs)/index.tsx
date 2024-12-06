import { SafeAreaView } from 'react-native';

import { Heading } from '@/components/ui/heading';
import { ScrollView } from "react-native"
import { VStack } from '@/components/ui/vstack';
import ClothesList from '@/components/ClothesList';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { ArrowRight } from 'lucide-react-native';
import { HStack } from '@/components/ui/hstack';
import { Button, ButtonText } from '@/components/ui/button';
import { router } from 'expo-router';
import { Text } from '@/components/ui/text';
import Outfit from '@/components/Outfit';

import Weather from '@/components/Weather';

export default function HomeScreen() {

  const vars = [
    {
      name: "pantalon",
      price: 909,
      imageURL: "https://picsum.photos/seed/picsum/400",
      id: 1
    },
    {
      name: "shirt",
      price: 124,
      imageURL: "https://picsum.photos/seed/picsum/400/300",
      id: 2
    },
    {
      name: "shirt",
      price: 124,
      imageURL: "https://picsum.photos/seed/picsum/400/300",
      id: 2
    },
    {
      name: "shirt",
      price: 124,
      imageURL: "https://picsum.photos/seed/picsum/400/300",
      id: 2
    },
  ]

  return (
    <ScrollView >
      <SafeAreaView>
        <VStack className='container mx-auto px-4 py-8 flex-1 flex-col' space='md'>
          <HStack space='md'>
            <Card variant='outline' className='w-full bg-white rounded-3xl' >
              <HStack className='py-12 items-center'>
                <Heading size='xl'>Digitaliza tu armario</Heading>
                <Icon as={ArrowRight} size='xl' />
              </HStack>
              <Text> 0 / 7</Text>
              <Progress>
                <ProgressFilledTrack />
              </Progress>
            </Card>
            <Card variant='outline'
              className='bg-white rounded-3xl w-full flex flex-row items-center py-12 '>
              <Heading size='xl'> Explora la tienda</Heading>
              <Icon as={ArrowRight} size='lg' />
            </Card>
            <Card variant='outline'
              className='bg-white rounded-3xl w-full flex flex-row items-center py-12'>
                <Button size="md" variant="link" action="primary" onPress={() => router.push('/StylistsScreen')}>
                  <ButtonText> Conoce a los estilistas </ButtonText>
                  <Icon as={ArrowRight} size='lg' />
                </Button>
            
            </Card>
            <Card variant='outline' className='bg-white rounded-3xl w-full flex flex-row items-center' >
              <Button size="md" variant="link" action="primary" onPress={() => router.push('/createOutfit')}>
                <ButtonText> Arma tu outfit of the day </ButtonText>
                <Icon as={ArrowRight} size='lg' />
              </Button>
            </Card>
          </HStack>

          <HStack>
            <Weather />
            <Heading size='2xl'> Prendas de tu armario que van bien con este clima:</Heading>
          </HStack>

          <ClothesList clothesList={vars} />

          <Heading size="xl">Outfits en tendencia</Heading>
          <HStack>
            <Outfit />
            <Outfit />
            <Outfit />
            <Outfit />
          </HStack>
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
}