import { ScrollView } from "react-native";
import ClothesList from "./ClothesList";
import { Heading } from "./ui/heading";
import { VStack } from "./ui/vstack";
import { useEffect, useState } from "react";
import { Text } from "./ui/text";

export default function ShopContent() {
  const [products, setProducts] = useState([])
  /**
 * Makes a GET request to the /all endpoint to retrieve all products.
 *
 * @returns {Promise<void>} A promise that resolves when the request is complete.
 */
  function getAllProducts() {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL + '/api/products/all'; // assuming your API is running on port 3000
    const headers: HeadersInit = { method: 'GET' };

    return fetch(apiUrl, headers)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        throw error;
      });
  }

  useEffect(() => {
    getAllProducts().then(r => setProducts(r.data))
  }, [])

  if (products.length == 0) return <Text> Loading </Text>

  return (
    <ScrollView className="w-full md:ml-8">
      <VStack space="4xl" className="mx-auto w-full mt-8">
        <Heading size="5xl"> Tienda</Heading>
        {
          products && products.length > 0 ?
            <ClothesList even={true} clothesList={products} />
            :
            <Text>{products.length}</Text>
        }

        <Heading size="3xl"> Novedades </Heading>
        <Heading size="3xl"> Combina con tu estilo </Heading>
        <Heading size="3xl"> Cerca de ti </Heading>
      </VStack>
    </ScrollView>
  )
}