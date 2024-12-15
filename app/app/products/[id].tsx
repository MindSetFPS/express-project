import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import AddToCartButton from "@/components/AddToCartButton";
import Condition from "@/components/Condition";
import useShoppingCartStore from "@/state";

export default function Product() {
    const [product, setProduct] = useState<any>()
    const { id } = useLocalSearchParams<{ id: string }>()
    const productIdList = useShoppingCartStore((state) => state.productIdList)
    const navigation = useNavigation()

    useEffect(() => {
        if (product) {
            navigation.setOptions({
                title: product.name,
                headerShown: true,
            })
        }
    }, [product])

    async function getProductById(id: number | string): Promise<any> {
        try {
            const response = await fetch(process.env.EXPO_PUBLIC_API_URL + `/api/products/${id}`);
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
        getProductById(id)
            .then((r) => setProduct(r.data))
    }, [])

    if (!product) return <Text> loading </Text>

    return (
        <ScrollView>
            <VStack space="sm" className="px-2">
                <Heading size="2xl">{product.name}</Heading>
                <Box>{product.brand}</Box>
                <Image size="2xl" className="mx-auto" source={product.imageURL} alt={product.name} />
                <Text>Vendido por pepito34</Text>
                <HStack>
                    <Heading> ${product.sellingPrice}</Heading>
                    <Condition condition={2} />
                </HStack>
                <AddToCartButton
                    id={parseInt(id)}
                    isOnCart={productIdList.includes(product.id)}
                />
                <Heading>Detalles</Heading>
                <Text>{product.description}</Text>
                <Heading>Materiales</Heading>
                <Heading>Talla</Heading>
                <Box>{product.size}</Box>
                <Heading>Envíos</Heading>
                <Heading>Más del vendedor</Heading>
                <Heading>De esta marca</Heading>
                <Heading>De esta talla</Heading>
            </VStack>
        </ScrollView>
    )
}