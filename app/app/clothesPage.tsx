import { Box } from "@/components/ui/box";
import { CirclePlus, Search } from 'lucide-react-native';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Fab, FabLabel, FabIcon } from '@/components/ui/fab';
import { HStack } from "@/components/ui/hstack";
import * as DocumentPicker from 'expo-document-picker';
import { useState } from "react";
import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@/components/ui/modal";
import { Heading } from "@/components/ui/heading";
import { CloseIcon, Icon } from "@/components/ui/icon";
import AddClothe from "./addClothes";
import ChipList from "@/components/ChipList";

export default function ClothesPage() {
    const [doc, setDoc] = useState<any>();

    // Post to backend
    const useGetProducts = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/products/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: '<NAME>',
                price: 10000,
                stock: 1,
                description: 'some description',
                url: "www.image.com"
                // image_url: doc?.uri,

            })
        })
        .then(res => res?.json())
        .then(data => {
            console.log('data', data);
            // apend to clothes list
            setShowModal(false)
        })
    };


    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
            copyToCacheDirectory: true
        })
            .then(response => {
                if (response.output) {
                    console.log(
                        response.output[0].name
                    )
                    setDoc(response.output[0])
                }
            })
    }

    const [showModal, setShowModal] = useState(false);

    return (
        <Box className="container mx-auto px-12 py-4 bg-white h-screen">
            <HStack
                space="md"
                className="flex-1 flex-row justify-between"
            >
                <ChipList />
                <Input size="sm" variant="rounded">
                    <InputField placeholder="Buscar" />
                    <InputSlot className="mr-4">
                        <InputIcon as={Search} />
                    </InputSlot>
                </Input>
            </HStack>
            <Fab
                onPress={() => setShowModal(true)}
            >
                <FabLabel> Agregar </FabLabel>
                <FabIcon as={CirclePlus} />
            </Fab>

            <Center className="h-[300px]">
                <Modal
                    isOpen={showModal}
                    onClose={() => {
                        setShowModal(false)
                    }}
                    size="lg"
                >
                    <ModalBackdrop />
                    <ModalContent>
                        <ModalHeader>
                            <Heading size="md" className="text-typography-950">
                                Crea una nueva prenda
                            </Heading>
                            <ModalCloseButton>
                                <Icon
                                    as={CloseIcon}
                                    size="md"
                                    className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
                                />
                            </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                            <AddClothe />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                variant="outline"
                                action="secondary"
                                onPress={() => {
                                    setShowModal(false)
                                }}
                            >
                                <ButtonText>Cancel</ButtonText>
                            </Button>
                            <Button
                                onPress={() => {
                                    useGetProducts()
                                    // setShowModal(false)
                                }}
                            >
                                <ButtonText>Agregar</ButtonText>
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </Box>
    )
}