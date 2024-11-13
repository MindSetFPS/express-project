import { Box } from "@/components/ui/box";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { ProductPost } from "@/interfaces";

interface updateProp {
    liftProps: (object: ProductPost) => void;
}

export default function AddClothe({ liftProps }: updateProp) {

    const [inputValue, setInputValue] = useState("12345")
    
    const [typeOfGarment, setTypeOfGarment] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [season, setSeason] = useState("");
    const [url, setUrl] = useState("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");

    useEffect( () => {
        var productPost: ProductPost = {
            brand: brand,
            size: size,
            clotheType: typeOfGarment,
            color: color,
            price: price,
            season: season,
            url: url
        }
        
        liftProps(productPost)

    }, [typeOfGarment, brand, size, color, price, season])

    return (
        <Box className="mx-auto container flex items-center">
            <Box className="flex-1 flex-row h-min justify-evenly w-full items-center bg-white rounded-lg">
                <Image
                    size="2xl"
                    source={{uri: url}}
                />
                <Box className="flex-col h-min ml-4 ">
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                <FormControlLabelText>
                                    Tipo de prenda
                                </FormControlLabelText>
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField 
                                type="text" 
                                onChangeText={setTypeOfGarment} 
                                value={typeOfGarment}
                                placeholder="Tipo de prenda" 
                            />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                <FormControlLabelText>
                                    Marca
                                </FormControlLabelText>
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField 
                                type="text" 
                                onChangeText={setBrand}
                                value={brand}
                                placeholder="Tipo de prenda" 
                            />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                <FormControlLabelText>
                                    Talla
                                </FormControlLabelText>
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField 
                                type="text" 
                                onChangeText={setSize}
                                value={size}
                                placeholder="Tipo de prenda" 
                            />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                <FormControlLabelText>
                                    Color
                                </FormControlLabelText>
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField 
                                type="text" 
                                onChangeText={setColor}
                                value={color}
                                placeholder="Tipo de prenda" 
                            />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                <FormControlLabelText>
                                    Precio
                                </FormControlLabelText>
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField 
                                type="text" 
                                onChangeText={(e) => setPrice( parseFloat(e) )}
                                value={ price.toString()}
                                placeholder="Precio de compra" 
                            />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                <FormControlLabelText>
                                    En que temporada la usarás?
                                </FormControlLabelText>
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField 
                                type="text" 
                                onChangeText={setSeason}
                                value={season}   
                                placeholder="Tipo de prenda" 
                            />
                        </Input>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}