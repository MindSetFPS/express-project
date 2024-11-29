import { Box } from "@/components/ui/box";
import { CirclePlus, Search } from 'lucide-react-native';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Fab, FabLabel, FabIcon } from '@/components/ui/fab';
import { HStack } from "@/components/ui/hstack";
import { useEffect, useState } from "react";
import ChipList from "@/components/ChipList";
import ModalCreatePieceOfClothing from "@/components/ModalCreatePieceOfClothing";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { ScrollView } from "react-native";

interface clothingImageProps {
    name: string,
    url: string
}

const ClothingImage: React.FC<clothingImageProps> = ({ name, url }) => {
    return (
        <Box>
            <Image
                size="xl"
                source={{
                    uri: url
                }}
                alt="image"
            />
            <Text>
                {name}
            </Text>
        </Box>
    )
}

export default function ClothesPage() {
    const [products, setProducts] = useState([])
    const useGetProducts = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/products/all")
            .then(res => res.json())
            .then(jsonResponse => setProducts(jsonResponse.data))
    }

    useGetProducts()
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
                <Box className="grid grid-cols-2 md:grid-cols-4 h-full mt-4">
                    {
                        products && products.length > 0 ? (
                            products.map(product => (
                                <ClothingImage
                                    name={product[1]}
                                    url={product[4]}
                                    key={product[0]}
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
                <ModalCreatePieceOfClothing showModal={showModal} setShowModal={setShowModal} />
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