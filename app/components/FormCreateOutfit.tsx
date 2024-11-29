import { Box } from "@/components/ui/box";
import { FormControl, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { ProductPost } from "@/interfaces";
import * as DocumentPicker from 'expo-document-picker';
import { Button, ButtonText } from "@/components/ui/button";

interface updateProp {
    liftProps: (object: any) => void;
}

export default function FormCreateOutfit({ liftProps }: updateProp) {
    const [typeOfGarment, setTypeOfGarment] = useState("");
    const [url, setUrl] = useState<string | null>(null);
    const [doc, setDoc] = useState<any>();

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
                </Box>
            </Box>
        </Box>
    )
}