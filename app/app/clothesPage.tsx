import { Box } from "@/components/ui/box";
import { CirclePlus, Search } from 'lucide-react-native';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Fab, FabLabel, FabIcon } from '@/components/ui/fab';
import { HStack } from "@/components/ui/hstack";
import * as DocumentPicker from 'expo-document-picker';
import { useState } from "react";
import ChipList from "@/components/ChipList";
import AddClothesModal from "@/components/addClothesModal";

export default function ClothesPage() {
    const [doc, setDoc] = useState<any>();

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
            <AddClothesModal showModal={showModal} setShowModal={setShowModal} />
        </Box>
    )
}