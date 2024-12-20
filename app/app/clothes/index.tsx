import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { CirclePlus, Search } from 'lucide-react-native';
import { router } from 'expo-router';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Box } from "@/components/ui/box";
import { Fab, FabLabel, FabIcon } from '@/components/ui/fab';
import { HStack } from "@/components/ui/hstack";
import ModalCreatePieceOfClothing from "@/components/ModalCreatePieceOfClothing";
import { Text } from "@/components/ui/text";
import ClothingImage from "@/components/ClothingImage";
import ChipList from "@/components/ChipList";

export default function ClothesPage() {
    const [products, setProducts] = useState([])

    // https://dev.to/gboladetrue/react-custom-hooks-crafting-reusable-and-clean-code-like-a-pro-3kol
    const useGetProducts = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/piece-of-clothing/all")
            .then(res => res.json())
            .then(jsonResponse => {
                setProducts(jsonResponse)
            })
    }

    useEffect(() => {
        useGetProducts()
    }, [])

    const [showModal, setShowModal] = useState(false);
    return (
        <Box className="container mx-auto px-4 md:px-12 bg-white h-screen">
            <Box>
                <HStack
                    className="
                        flex-1 items-center flex-row justify-between bg-white p-6
                        hidden md:flex // hide if looks bad
                    "
                >
                    <ChipList />
                    <Input size="sm" variant="rounded">
                        <InputField placeholder="Buscar" />
                        <InputSlot className="mr-4">
                            <InputIcon as={Search} />
                        </InputSlot>
                    </Input>
                </HStack>
            </Box>
            <ScrollView >
                <Box className="grid grid-cols-3 gap-4 md:grid-cols-4 h-full mt-4 mx-auto">
                    {
                        products && products.length > 0 ? (
                            products.map(product => (
                                <ClothingImage
                                    text={false}
                                    size="xl"
                                    name={product[1]}
                                    url={product[8]}
                                    key={product[0]}
                                    onClick={() => router.navigate(`/clothes/edit/${product[0]}`)}
                                />
                            )
                            )
                        )
                            :
                            <Text>
                                No hay productos
                            </Text>
                    }
                </Box>
                <ModalCreatePieceOfClothing
                    showModal={showModal}
                    setShowModal={setShowModal}
                    onNewPieceOfClothingCreated={useGetProducts}
                />
            </ScrollView>
            <Fab
                onPress={() => setShowModal(true)}
            >
                <FabLabel> Agregar </FabLabel>
                <FabIcon as={CirclePlus} />
            </Fab>
        </Box>
    )
}