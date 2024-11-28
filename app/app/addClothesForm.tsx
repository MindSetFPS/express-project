import { Box } from "@/components/ui/box";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { ProductPost } from "@/interfaces";
import * as DocumentPicker from 'expo-document-picker';
import { Button, ButtonText } from "@/components/ui/button";
import { postApiPieceOfClothingCreateImage } from "@/api";

interface updateProp {
    liftProps: (object: ProductPost) => void;
}

export default function AddClothes({ liftProps }: updateProp) {
    const [typeOfGarment, setTypeOfGarment] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [season, setSeason] = useState("");
    const [url, setUrl] = useState<string | null>(null);
    const [doc, setDoc] = useState<any>();
    
    postApiPieceOfClothingCreateImage()
    
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
            copyToCacheDirectory: true
        })
            .then(response => {
                if (response.output) {
                    console.log(response.assets[0])
                    setDoc(response.output[0])
                    setUrl(response.assets[0].uri)
                }
            })
    }

    useEffect(() => {
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
                {url && url.length > 0 ?
                    <Image
                        size="2xl"
                        source={{
                            uri: url
                        }}
                        alt="user image"
                    />
                    :
                    <Button onPress={() => pickDocument()}>
                        <ButtonText>
                            Subir una foto
                        </ButtonText>
                    </Button>
                }
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
                                onChangeText={(e) => setPrice(parseFloat(e))}
                                value={price.toString()}
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