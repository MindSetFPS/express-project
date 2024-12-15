import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import PurchaseSummary from '@/components/PurchseSummary';
import Product from "../../backend/products/domain/Products"
import useShoppingCartStore from '@/state';
import { useNavigation } from 'expo-router';

// TODO: Shopping cart depends changes UI if no products
// TODO: Shopping cart shows buying flow when confirm purchase
export default function ShoppingCart() {
  const [cart, setCart] = useState<Product[]>([]);
  const productIdList = useShoppingCartStore((state) => state.productIdList)
  const removeProductIdFromList = useShoppingCartStore((state) => state.removeProductIdFromList)
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      title: "Carrito",
      headerShown: true,
    })
  }, [])

  async function getProductById(id: number | string): Promise<any> {
    try {
      let url = process.env.EXPO_PUBLIC_API_URL + `/api/products/${id}`
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error posting product:', error);
      throw error;
    }
  }

  useEffect(() => {
    const fetchData = async (idList: number[]) => {
      setCart([]) // inneficient: we always fetch every object
      for (const id of idList) {
        let data = await getProductById(id)
        setCart((prevdata) => [...prevdata, data.data])
      }
    }
    fetchData(productIdList)
  }, [productIdList])

  if (cart[0] === null) return <Text>Carrito vacío</Text>

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-gray-100">
      <PurchaseSummary cart={cart} setCart={setCart} />
      <ScrollView className="p-4 pb-64">
        <Box className="">
          <Box className="space-y-4 ">
            {cart.length > 0 ? cart.map((product) => (
              <Box key={product.id} className="flex-row items-center bg-white p-4 rounded-lg justify-between">
                <Image source={{ uri: product.imageURL }} className="w-16 h-16 rounded" />
                <Box className="flex-1 ml-4">
                  <TouchableOpacity>
                    <Text >{product.name}</Text>
                    <Text >{product.description}</Text>
                  </TouchableOpacity>
                  <Button
                    onPress={() => removeProductIdFromList(product.id)}
                    variant='link'
                    className='ml-0 pl-0 justify-start'
                    size='xs'
                  >
                    <Text size='xs'>
                      Eliminar
                    </Text>
                  </Button>
                </Box>
                <Text>${product.sellingPrice}</Text>
              </Box>
            )) : ""}
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}