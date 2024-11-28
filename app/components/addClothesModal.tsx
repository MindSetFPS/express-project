import AddClothes from "@/app/addClothesForm"
import { CloseIcon, Icon } from "@/components/ui/icon";
import { Center } from "./ui/center"
import { Heading } from "./ui/heading"
import { Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "./ui/modal"
import { Button, ButtonText } from "./ui/button"
import { useState } from "react";
import { ProductPost } from "@/interfaces";

interface Props {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

const AddClothesModal: React.FC<Props> = ({ showModal, setShowModal }) => {
    const [productPost, setProductPost] = useState<ProductPost>();

    // Post to backend
    const useGetProducts = () => {
        console.log(productPost)
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/products/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: productPost?.clotheType + " " + productPost?.brand + productPost?.size,
                price: productPost?.price,
                stock: 1,
                description: productPost?.season + " " + productPost?.color,
                url: productPost?.url
                // image_url: doc?.uri,
            })
        })
            .then(res => res?.json())
            .then(data => {
                console.log('data', data);
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
                        <AddClothes liftProps={setProductPost} />
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
    )
}

export default AddClothesModal;