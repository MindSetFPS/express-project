import { useEffect, useState } from "react"
import { Text } from "../ui/text"
import { HStack } from "../ui/hstack"
import { Box } from "../ui/box"
import ClothesPiece from "../ClothesPiece"
import { VStack } from "../ui/vstack"

export default function RecomendedProducts() {
    const [products, setProducts] = useState([])

    function fetchHotProducts() {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/products/random?limit=6")
            .then(res => res.json())
            .then(r => setProducts(r))
    }

    useEffect(() => {
        fetchHotProducts()
    }, [])

    return (
        <VStack className="grid grid-cols-2" space="sm">
            {
                products && products.length > 0 ?
                    products.map((product: any) => (
                        <Box className="mx-2 ">
                            <ClothesPiece
                                id={product.id}
                                name={product.name}
                                imageURL={product.imageURL}
                                key={product.id}
                                price={product.sellingPrice}
                                // sellingPrice={product.sellingPrice}
                                size="sm"
                            />
                        </Box>
                    ))
                    :
                    <></>
            }
        </VStack>


    )
}

