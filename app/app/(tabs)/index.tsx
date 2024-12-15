import { ScrollView, SafeAreaView } from "react-native"
import { VStack } from '@/components/ui/vstack';
import OutfitWeek from "@/components/home/OutfitWeek";
import MissionCard from "@/components/home/MissionsCard";
import { Heading } from "@/components/ui/heading";
import { useEffect, useState } from "react";
import ClothesPiece from "@/components/ClothesPiece";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";

export default function HomeScreen() {
  const [products, setProducts] = useState<any>([])
  function fetchHotProducts() {
    fetch(process.env.EXPO_PUBLIC_API_URL + "/api/products/random?limit=5")
      .then(res => res.json())
      .then(r => setProducts(r))
  }

  useEffect(() => {
    fetchHotProducts()
  }, [])

  return (
    <ScrollView >
      <SafeAreaView>
        <VStack className='container mx-auto px-4 py-4 flex-1 flex-col' space='md'>
          <MissionCard />
          <OutfitWeek />
          <Heading size="xl">Lo mas deseado</Heading>
          <HStack space="md">
            <ScrollView horizontal={true} className="py-2">
              {
                products && products.length > 0 ?
                  products.map((product: any) => (
                    <Box className="mx-2 w-[256px]">
                      <ClothesPiece
                        id={product.id}
                        name={product.name}
                        imageURL={product.imageURL}
                        key={product.id}
                        price={product.sellingPrice}
                        sellingPrice={product.sellingPrice}
                        size="sm"
                      />
                    </Box>
                  ))
                  :
                  <></>
              }
            </ScrollView>
          </HStack>
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
}