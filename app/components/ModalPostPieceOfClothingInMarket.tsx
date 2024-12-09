import { useState } from "react";
import { Button, ButtonText } from "./ui/button";
import { Modal, ModalBackdrop, ModalBody, ModalContent, ModalFooter, ModalHeader } from "./ui/modal";
import { Box } from "./ui/box";
import { Icon, TrashIcon } from "./ui/icon";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Store } from "lucide-react-native"

export default function ModalPostPieceOfClothingInMarket() {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <Button onPress={() => setShowModal(true)} action="positive" >
          <ButtonText>Vender</ButtonText>
        </Button>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <ModalBackdrop />
          <ModalContent className="max-w-[305px] items-center">
            <ModalHeader>
              <Box className="w-[56px] h-[56px] rounded-full bg-background-error items-center justify-center">
                <Icon as={TrashIcon} className="stroke-error-600" size="xl" />
              </Box>
            </ModalHeader>
            <ModalBody className="mt-0 mb-4">
              <Heading size="md" className="text-typography-950 mb-2 text-center">
                Borrar prenda de mi armario.
              </Heading>
              <Text size="sm" className="text-typography-500 text-center">
                ¿Realmente quieres borrar esta prenda? Recuerda que puedes vendarla en la tienda.
              </Text>
            </ModalBody>
            <ModalFooter className="w-full">
              <Button
                variant="outline"
                action="secondary"
                size="sm"
                onPress={() => {
                  setShowModal(false);
                }}
                className="flex-grow"
              >
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
                size="sm"
                className="flex-grow"
              >
                <ButtonText>Sí, borrar</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  