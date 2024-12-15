import useShoppingCartStore from "@/state"
import { Button, ButtonText } from "./ui/button"

export default function AddToCartButton({ id, isOnCart } : { id: number, isOnCart: boolean }) {
    const addProductIdToList = useShoppingCartStore((state) => state.addProductIdToList)
    return (
        <Button
            size="xl"
            onPress={() => addProductIdToList(id)}
            isDisabled={isOnCart ? true : false}
        >
            <ButtonText>
                {
                    isOnCart ? "En el carrito" : "Agregar al carrito"
                }
            </ButtonText>
        </Button>
    )
}