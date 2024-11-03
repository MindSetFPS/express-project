import { ScrollView } from "react-native";
import ClothesList from "./ClothesList";
import { Box } from "./ui/box";
import { Heading } from "./ui/heading";
import { VStack } from "./ui/vstack";

export default function ShopContent() {

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
        <ScrollView>
            <VStack space="4xl" className="mx-auto">
                <Heading size="4xl"> Tienda</Heading>
                <ClothesList clothesList={vars}/>

                <Heading size="4xl"> Novedades </Heading>
                <ClothesList clothesList={vars}/>

                <Heading size="4xl"> Combina con tu estilo </Heading>
                <ClothesList clothesList={vars}/>

                <Heading size="4xl"> Cerca de ti </Heading>
                <ClothesList clothesList={vars} />
            </VStack>
        </ScrollView>
    )
}