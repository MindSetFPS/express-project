import { Button, ButtonText } from "./ui/button";
import { ModalFooter } from "./ui/modal";

interface Props {
    onClose: () => void;
    onConfirm: () => void;
}

export default function FormConfirmProductPost({ onClose, onConfirm } : Props) {
  return (
    <>
      <ModalFooter className="w-full">
        <Button
          variant="outline"
          action="secondary"
          size="sm"
          onPress={() => {
            onClose();
          }}
          className="flex-grow"
        >
          <ButtonText>Cancelar</ButtonText>
        </Button>
        <Button
          onPress={() => {
            onConfirm();
          }}
          size="sm"
          className="flex-grow"
          action="positive"
        >
          <ButtonText>Sí, poner a la venta</ButtonText>
        </Button>
      </ModalFooter>
    </>

  )
}