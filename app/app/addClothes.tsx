import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import { AlertCircleIcon } from "lucide-react-native";
import { useState } from "react";

export default function AddClothe() {

    const [inputValue, setInputValue] = useState("12345")

    return (
        <Box className="mx-auto mt-10 container flex items-center">
            <Box className="flex-1 p-6 flex-row h-min justify-center items-center bg-white rounded-lg">
                <Image
                    size="2xl"
                    source={{
                        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    }}
                />
                <Box className="flex-col h-min ml-8">
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                Tipo de prenda
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField type="text" placeholder="Tipo de prenda" />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                Marca
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField type="text" placeholder="Tipo de prenda" />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                Talla
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField type="text" placeholder="Tipo de prenda" />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                Color
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField type="text" placeholder="Tipo de prenda" />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                Precio
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField type="text" placeholder="Tipo de prenda" />
                        </Input>
                    </FormControl>

                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabel className="font-bold text-xl">
                                En que temporada la usarás?
                            </FormControlLabel>
                        </FormControlLabel>
                        <Input variant="underlined" size="sm">
                            <InputField type="text" placeholder="Tipo de prenda" />
                        </Input>
                    </FormControl>

                    <Button 
                        className="mt-4"
                        onPress={ () => router.push('/wardrobe')}
                    >
                        <ButtonText>
                            Finalizar
                        </ButtonText>
                    </Button>

                </Box>

            </Box>
        </Box>
    )
}