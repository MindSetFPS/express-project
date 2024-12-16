import { Box } from "@/components/ui/box";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { PostPieceOfClothing } from "@/interfaces";
import * as DocumentPicker from 'expo-document-picker';
import { Button, ButtonText } from "@/components/ui/button";

interface updateProp {
    liftProps: (object: PostPieceOfClothing) => void;
    product?: PostPieceOfClothing;
}

export default function FormCreatePieceOfClothing({ liftProps, product }: updateProp) {
    const [typeOfGarment, setTypeOfGarment] = useState(product?.typeOfClothing || "");
    const [brand, setBrand] = useState(product?.brand || "");
    const [size, setSize] = useState(product?.size || "");
    const [color, setColor] = useState(product?.color || "");
    const [purchasePrice, setPurchasePrice] = useState<number>(product?.purchasePrice || 0);
    const [season, setSeason] = useState(product?.season || "");
    const [imageURL, setImageURL] = useState<string | null>(product?.imageURL || null);
    const [userId, setUserId] = useState(product?.userId || 0)
    const [doc, setDoc] = useState<any>();

    function postApiPieceOfClothingCreateImage(image: File) {
        const formData = new FormData()
        formData.append('file', image)
        fetch(process.env.EXPO_PUBLIC_API_URL + '/api/piece-of-clothing/createImage', {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then(data => {
                setImageURL("http://" + data.fileURL)
            })
            .catch(err => console.log(err))
    }

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: 'image/*',
            copyToCacheDirectory: true
        })
            .then(response => {
                if (response.output && response.assets[0].file) {
                    setDoc(response.output[0])
                    if (response.assets && response.assets[0]) {
                        postApiPieceOfClothingCreateImage(response.assets[0].file)
                    }
                }
            })
    }

    useEffect(() => {
        var postPieceOfClothing: PostPieceOfClothing = {
            name: typeOfGarment + " " + brand + " " + size,
            brand: brand,
            size: size,
            typeOfClothing: typeOfGarment,
            color: color,
            purchasePrice: purchasePrice,
            season: season,
            imageURL: imageURL
        }
        liftProps(postPieceOfClothing)
    }, [typeOfGarment, brand, size, color, purchasePrice, season])

    return (
        <Box className="md:mx-auto">
            <Box className="flex-1 md:flex-row h-min justify-evenly w-full items-center bg-white rounded-lg">
                <Box>
                    {
                        imageURL && imageURL.length > 0 ?
                            <Image
                                size="2xl"
                                source={{
                                    uri: imageURL
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
                </Box>
                <Box className="flex-col pt-2 w-full md:w-auto h-min md:ml-4 ">
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
                                onChangeText={(e) => setPurchasePrice(parseFloat(e))}
                                value={purchasePrice.toString()}
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
                                placeholder="Temporada"
                            />
                        </Input>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}