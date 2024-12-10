import { useState } from "react";
import { Button, ButtonText } from "./ui/button";
import { Modal, ModalBackdrop, ModalBody, ModalContent, ModalFooter, ModalHeader } from "./ui/modal";
import { Box } from "./ui/box";
import { ChevronDownIcon, Icon, TrashIcon } from "./ui/icon";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Store } from "lucide-react-native"
import { Input, InputField } from "./ui/input";
import { FormControl, FormControlLabel, FormControlLabelText } from "./ui/form-control";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "./ui/select";

export default function ModalPostPieceOfClothingInMarket() {
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
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
            showForm ?
              <>
                <FormControl>
                  <FormControlLabel>
                    <FormControlLabelText>Precio</FormControlLabelText>
                  </FormControlLabel>
                  <Input>
                    <InputField variant="underlined" placeholder="Enter your email" />
                  </Input>
                  <FormControlLabel>
                    <FormControlLabelText>Descripción</FormControlLabelText>
                  </FormControlLabel>
                  <Input>
                    <InputField placeholder="Describe esta prenda" />
                  </Input>
                  <Select>
                    <SelectTrigger variant="underlined" size="md" >
                      <SelectInput placeholder="Estado de tu prenda" />
                      <SelectIcon className="mr-3" as={ChevronDownIcon} />
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent>
                        <SelectDragIndicatorWrapper>
                          <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <SelectItem 
                          label="Como nuevo" 
                          value="1" 
                        />
                        <SelectItem 
                          label="Muy buena" 
                          value="2" 
                        />
                        <SelectItem
                          label="Buena"
                          value="3"
                        />
                        <SelectItem
                          label="Gema escondida"
                          value="4"
                        />
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                  <Button className="mt-2">
                    <ButtonText>
                      Publicar
                    </ButtonText>
                  </Button>
                </FormControl>
              </>
              :
              <>
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
                      setShowForm(true);
                    }}
                    size="sm"
                    className="flex-grow"
                    action="positive"
                  >
                    <ButtonText>Sí, poner a la venta</ButtonText>
                  </Button>
                </ModalFooter>
              </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
