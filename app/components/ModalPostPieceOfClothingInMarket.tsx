import { useState } from "react";
import { router } from "expo-router";
import { Button, ButtonText } from "./ui/button";
import { Modal, ModalBackdrop, ModalBody, ModalContent, ModalHeader } from "./ui/modal";
import { Box } from "./ui/box";
import { Icon, RepeatIcon } from "./ui/icon";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Alert, AlertIcon, AlertText } from "./ui/alert";
import { HStack } from "./ui/hstack";
import { VStack } from "./ui/vstack";
import { Store } from "lucide-react-native"
import FormPostPieceOfClothingInMarket from "./FormPostPieceOfClothingInMarket";
import FormConfirmProductPost from "./FormConfirmProductPost";

export default function ModalPostPieceOfClothingInMarket() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

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
            <Box className="w-[56px] h-[56px] rounded-full bg-background-info items-center justify-center">
              <Icon as={Store} className="stroke-info-600" size="xl" />
            </Box>
          </ModalHeader>

          <ModalBody className="mt-0 mb-4">
            <Heading size="md" className="text-typography-950 mb-2 text-center">
              Poner prenda a la venta.
            </Heading>
            <Text size="sm" className="text-typography-500 text-center">
              Al poner esta prenda en venta dejará de estar en tu armario. Cuando alguien la compre, tendras que prepararla para su envío.
            </Text>
          </ModalBody>
          {
            step === 1 &&
            <FormConfirmProductPost
              onClose={() => setShowModal(false)}
              onConfirm={() => setStep(2)}
            />
          }

          {
            step === 2 &&
            <FormPostPieceOfClothingInMarket
              onPost={() => setStep(3)}
            />
          }

          {
            step === 3 &&
            <>
              <Alert
                action="success"
                className="gap-4 max-w-[516px] w-full flex-row flex py-4 items-start self-center"
              >
                <AlertIcon as={RepeatIcon} className="mt-1" />
                <HStack className="justify-between flex-1 items-center gap-1 sm:gap-8">
                  <VStack className="flex-1">
                    <Text className="font-semibold text-typography-900">
                      Tu prenda se publicó
                    </Text>
                    <AlertText className="text-typography-900" size="sm">
                      Te avisaremos cuando se venda para continuar el proceso.
                    </AlertText>
                  </VStack>
                </HStack>
              </Alert>
              <Button action="positive" className="mt-2" 
                onPress={() => {
                  setShowModal(false)
                  router.navigate("/(tabs)")
                }}
              >
                <ButtonText>Aceptar</ButtonText>
              </Button>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
