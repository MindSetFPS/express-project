import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image } from "@/components/ui/image";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge';
import { ThumbsUp } from "lucide-react-native";
import { VStack } from "@/components/ui/vstack";
import { ScrollView } from "react-native";

function Condition({ condition }: { condition: number }) {
    return (
        <Badge size="lg" variant="solid" action={`${condition == 1 ? "success" : "info"}`} >
            <BadgeText>
                {
                    condition == 1 ? "Como nueovo" : <></>
                }

                {
                    condition == 2 ? "Muy buena" : <></>
                }
                {
                    condition == 3 ? "Buena" : <></>
                }
                {
                    condition == 3 ? "Joya Escondida" : <></>
                }
            </BadgeText>
            <BadgeIcon as={ThumbsUp} className="ml-2" />
        </Badge>
    )
}

export default function Product() {
    const [product, setProduct] = useState<any>()
    const { id } = useLocalSearchParams<{ id: string }>()

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

    useEffect(() => {
        console.log(product)
    }, [product])

    if (!product) return <Text> loading </Text>

    return (
        <ScrollView>

        <VStack space="sm" className="px-2">
            <Heading size="2xl">{product.name}</Heading>
            <Box>{product.brand}</Box>
            <Image size="2xl" className="mx-auto" source={product.imageURL} />
            <Text>Vendido por pepito34</Text>
            <HStack>
                <Heading> ${product.sellingPrice}</Heading>
                <Condition condition={2} />
            </HStack>
            <Button size="xl" >
                <ButtonText>
                    Agregar al carrito
                </ButtonText>
            </Button>
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