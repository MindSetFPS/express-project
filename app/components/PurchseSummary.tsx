import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import Product from "../../backend/products/domain/Products";

function shipmentCalculatorService(){
    return 299
}

export default function PurchaseSummary({ cart, setCart }: { cart: Product[], setCart: (arg:any) => void }) {
    const [totalAmount, setTotalAmmount] = useState<number>(0)
    const [shipment, setShipment] = useState<number>(shipmentCalculatorService())
    const [productTotal, setProductTotal] = useState<number>(0)

    const handlePurchase = () => {
        alert('Compra realizada con éxito');
        setCart([]); // Vaciar carrito después de la compra
    };
    
    useEffect(() => {
        setProductTotal(cart.reduce((acc, product) => Number(acc) + Number(product.sellingPrice), 0))
        setTotalAmmount(shipment + productTotal)        
    }, [cart, productTotal])

    return (
        <Box className=" bg-white p-4 z-10 w-full absolute bottom-0 left-0">
            <Text className="text-lg font-semibold mb-4">Purchase Summary</Text>
            <Box className="flex-row justify-between mb-2">
                <Text className="text-gray-500">Products ({cart.length})</Text>
                <Text className="font-semibold">${productTotal}</Text>
            </Box>
            <Box className="flex-row justify-between mb-2">
                <Text className="text-gray-500">Shipment</Text>
                <Text className="font-semibold text-green-500">${shipment}</Text> </Box>
            <Box className="flex-row justify-between mb-2">
                <Text className="text-lg font-bold">Total</Text>
                <Text className="text-lg font-bold">${totalAmount}</Text>
            </Box>
            <TouchableOpacity
                onPress={handlePurchase}
                className="bg-black py-3 mt-4 rounded-lg">
                <Text className="text-white text-center font-semibold">Confirm Purchase</Text>
            </TouchableOpacity>
        </Box>
    )

}