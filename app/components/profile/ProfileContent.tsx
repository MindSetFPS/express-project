import { ScrollView } from "react-native";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Image } from "../ui/image";
import RecomendedProducts from "../product/RecomendedProducts";
import { useEffect, useState } from "react";
import { Text } from "../ui/text";


interface outfitImageProps {
    name: string,
    url: string
}

const OutfitImage: React.FC<outfitImageProps> = ({ url }) => {
    return (
        <Image
            className="rounded-lg w-[128px] h-full"
            source={{
                uri: url
            }}
            alt="image"
        />
    )
}

export default function ProfileContent() {
    const [outfits, setOutfits] = useState([])
    const useGetOutfits = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + '/api/outfits/all')
            .then((res) => res.json())
            .then(out => setOutfits(out))
    }

    useEffect(() => {
        useGetOutfits()
    }, [])

    return (
        <Box className=''>
            <Heading>Outfits</Heading>
            <ScrollView horizontal={true}>
                <HStack space="sm">
                    {/* {Array(6).fill('').map((_, index) => (
                        <Box key={index} className="w-36 h-36 bg-gray-200 rounded-lg mr-2">
                            <Image source={{ uri: 'https://via.placeholder.com/140' }} className="w-full h-full rounded-lg" />
                        </Box>
                    ))} */}


                    {
                        outfits && outfits.length > 0 ? (
                            outfits.map(product => (
                                <Box className="aspect-square w-full">
                                    <OutfitImage
                                        name={product[0]}
                                        url={product[2]}
                                        key={product[0]}
                                    />
                                </Box>
                            )
                            )
                        )
                            :
                            <Text>
                                No hay productos
                            </Text>
                    }

                </HStack>
            </ScrollView>
        </Box>
    )
}