import { Box } from "./ui/box";
import { EyeOff, CheckIcon, DiffIcon } from 'lucide-react-native';
import { Heading } from "./ui/heading";

import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { Input, InputIcon, InputSlot } from "./ui/input";
import { Mail } from 'lucide-react-native';
import { InputField } from "./ui/input";
import { Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from "./ui/checkbox";
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { Divider } from '@/components/ui/divider';

import GoogleLogo from '../assets/svg/google.svg';
import { VStack } from "./ui/vstack";
import { Link, LinkText } from '@/components/ui/link';
import { router } from "expo-router";



export default function Login() {
    return (
        <Box className="
            h-screen
            md:w-3/12 lg:w-4/12  
            flex flex-col justify-center 
            mx-auto
            md:px-16 lg:px-8
        ">
            <Card variant='filled' className='shadow-soft-2' >
                <VStack space="lg">
                    <Heading size="5xl"> Inicia sesión </Heading> 

                     <Input
                        variant="outline"
                        size="lg"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="correo" />
                        <InputSlot className="pr-3">
                            <InputIcon as={Mail} />
                        </InputSlot>
                    </Input>


                    <Input
                        variant="outline"
                        size="lg"
                        isDisabled={false}
                        isInvalid={false}
                        isReadOnly={false}
                    >
                        <InputField placeholder="contraseña" type="password" />
                        <InputSlot className="pr-3">
                            <InputIcon as={EyeOff} />
                        </InputSlot>
                    </Input>

                    <HStack className="justify-between" space="4xl">
                        <Checkbox size="md" isInvalid={false} isDisabled={false}   >
                            <CheckboxIndicator>
                                <CheckboxIcon as={CheckIcon} />
                            </CheckboxIndicator>
                            <CheckboxLabel>Recuerdame</CheckboxLabel>
                        </Checkbox>

                        <Text>Olvidaste tu contraseña?</Text>
                    </HStack>

                    <Button onPress={() => {
                        console.log("loging in")
                        router.push('(tabs)')
                    }}>
                        <ButtonText >
                            iniciar sesión
                        </ButtonText>
                    </Button>

                    <Box className="flex flex-row justify-center items-center">
                        <Divider className="w-[15%]"/>
                        <Text className="ml-12 mr-12">o</Text>
                        <Divider className="w-[15%] "/>
                    </Box>

                    <Button variant="outline" size="xl">
                        <ButtonIcon as={GoogleLogo} size="sm" />
                        <ButtonText size="lg">
                            inicia sesión con google
                        </ButtonText>
                    </Button>
                    
                    <Text>¿No tienes cuenta? <LinkText className="text-black font-bold" onPress={() => {}}>Registrate</LinkText></Text>

                </VStack>
            </Card>
        </Box>
    )
}