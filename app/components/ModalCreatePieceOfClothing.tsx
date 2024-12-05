import FormCreatePieceOfClothing from "@/components/FormCreatePieceOfClothing"
import { CloseIcon, Icon } from "@/components/ui/icon";
import { Center } from "./ui/center"
import { Heading } from "./ui/heading"
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "./ui/modal"
import { Button, ButtonText } from "./ui/button"
import { useState } from "react";

interface Props {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    onNewPieceOfClothingCreated: () => void;
}

const ModalCreatePieceOfClothing: React.FC<Props> = ({ showModal, setShowModal, onNewPieceOfClothingCreated }) => {
    const [productPost, setProductPost] = useState<any>();
    
    const usePostProducts = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/piece-of-clothing/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productPost)
        })
            .then(res => res?.json())
            .then(data => {
                setShowModal(false)
                onNewPieceOfClothingCreated()
            })
    };

    return (
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
                        <FormCreatePieceOfClothing liftProps={setProductPost} />
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
                                usePostProducts()
                                // setShowModal(false)
                            }}
                        >
                            <ButtonText>Agregar</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Center>
    )
}

export default ModalCreatePieceOfClothing;