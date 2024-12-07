import { Text } from "@/components/ui/text/index.web";
import { useLocalSearchParams } from "expo-router";

export default function EditClothes(){
    const { id } = useLocalSearchParams()
    return(
        <Text>
            Edit clothes page { id }
        </Text>
    )
}