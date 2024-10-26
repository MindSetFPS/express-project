import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { View } from "react-native";
import { router } from "expo-router";

export default function Index(){
    return(
        <View className="container mx-auto px-1">
            <Heading> Inicia sesión </Heading>
            <Button onPress={() => {
                router.push("/(tabs)/")
            }}>
                <ButtonText >
                    Botón
                </ButtonText>
            </Button>
        </View>
    )
}