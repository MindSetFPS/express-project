import { useState } from "react";
import { Center } from "./ui/center";
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "./ui/modal";
import { Heading } from "./ui/heading";
import { CloseIcon, Icon } from "./ui/icon";
import { Button, ButtonText } from "./ui/button";
import FormCreateOutfit from "./FormCreateOutfit";

interface Props {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    onNewOutfitCreated: () => void;
}

const ModalCreateOutfit: React.FC<Props> = ({ showModal, setShowModal, onNewOutfitCreated }) => {
    const [pieceOfClothingList, setPieceOfClothingList] = useState();

    // Post to backend
    const usePostOutfit = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/outfits/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 2,
                pieceOfClothingIdList: pieceOfClothingList
            })
        })
            .then(res => res?.json())
            .then(data => {
                console.log('data', data);
                onNewOutfitCreated()
                setShowModal(false)
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
                            Crea una nuevo outfit
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
                        <FormCreateOutfit liftProps={setPieceOfClothingList} />
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
                                usePostOutfit()
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

export default ModalCreateOutfit;