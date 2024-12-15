import { useLocalSearchParams } from "expo-router";
import { Button, ButtonText } from "./ui/button";
import { FormControl, FormControlLabel, FormControlLabelText } from "./ui/form-control";
import { ChevronDownIcon } from "./ui/icon";
import { Input, InputField } from "./ui/input";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "./ui/select";
import { useEffect, useState } from "react";

interface Props {
    onPost: () => void;
    pieceOfClothingId: string;
}

export default function FormPostPieceOfClothingInMarket({ onPost, pieceOfClothingId } : Props) {
    // const { id } = useLocalSearchParams<{ id: string }>()
    const [condition, setCondition] = useState<string>("");
    const [sellingPrice, setSellingPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [posted, setPosted] = useState<boolean>(false);
    
    useEffect(() => {
        console.log(pieceOfClothingId)
    }, [pieceOfClothingId])

    async function postProduct(id: string, stock: number, sellingPrice: number, description: string, condition: string): Promise<any> {
        try {
            const response = await fetch(process.env.EXPO_PUBLIC_API_URL + '/api/products/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    stock,
                    sellingPrice,
                    condition,
                    description
                })
            });

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

    function handlePostProduct() {
        
        if(!(pieceOfClothingId && sellingPrice && description && condition)){
            console.log("faltan datos: ", {
                "id": pieceOfClothingId,
                "sellingPrice": sellingPrice,
                "description": description,
                "condition": condition
            })
        }
        
        postProduct(
            pieceOfClothingId,
            1,
            parseInt(sellingPrice.toString()),
            description,
            condition
        )
        onPost()
    }

    function handleChangeSellingPrice(e: string) {
        let p = parseInt(e.replace("$", ""))
        if (p){
            setSellingPrice(p)
        } else {
            setSellingPrice(0)
        }
    }

    return (
        <>
            <FormControl>
                <FormControlLabel>
                    <FormControlLabelText>Precio</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField
                        onChangeText={handleChangeSellingPrice}
                        variant="underlined"
                        keyboardType="numeric"
                        placeholder="Precio de venta"
                        value={`$${sellingPrice.toString()}`} />
                </Input>
                <FormControlLabel>
                    <FormControlLabelText>Descripción</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField 
                        placeholder="Describe esta prenda" 
                        value={description} 
                        onChangeText={(e) => setDescription(e)}
                    />
                </Input>
                <Select onValueChange={(e) => setCondition(e)}>
                    <SelectTrigger variant="underlined" size="md" >
                        <SelectInput placeholder="Estado de tu prenda" />
                        <SelectIcon className="mr-3" as={ChevronDownIcon} />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem
                                label="Como nuevo"
                                value="1"
                            />
                            <SelectItem
                                label="Muy buena"
                                value="2"
                            />
                            <SelectItem
                                label="Buena"
                                value="3"
                            />
                            <SelectItem
                                label="Gema escondida"
                                value="4"
                            />
                        </SelectContent>
                    </SelectPortal>
                </Select>
                <Button
                    className="mt-2"
                    onPress={handlePostProduct}
                >
                    <ButtonText>
                        Publicar
                    </ButtonText>
                </Button>
            </FormControl>
        </>
    )
}