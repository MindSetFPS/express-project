import ChipList from "@/components/ChipList";
import { Box } from "@/components/ui/box";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { CirclePlus, Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ModalCreateOutfit from "@/components/ModalCreateOutfit";

interface outfitImageProps {
    name: string,
    url: string
}

const OutfitImage: React.FC<outfitImageProps> = ({ name, url }) => {
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

const OutfitsPage = () => {
    const [ outfits, setOutfits ] = useState([])
    const useGetOutfits = () => {
        fetch( process.env.EXPO_PUBLIC_API_URL + '/api/outfits/all')
       .then((res)=> res.json())
       .then(out => setOutfits(out))
    }
    
    
    useEffect( () => {
        useGetOutfits()
    }, [])

    
    const [showModal, setShowModal] = useState(false);
    return (
        <Box className="container mx-auto px-4 md:px-12 bg-white h-screen">
            <Box>
                <HStack
                    className="
                        flex-1 items-center flex-row justify-between bg-white p-6
                        hidden md:flex
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
                        outfits && outfits.length > 0 ? (
                            outfits.map(product => (
                                <OutfitImage
                                    name={product[0]}
                                    url={product[1]}
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
                <ModalCreateOutfit 
                    showModal={showModal} 
                    setShowModal={setShowModal} 
                    onNewOutfitCreated={useGetOutfits}
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

export default OutfitsPage;