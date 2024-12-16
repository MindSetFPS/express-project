import { StyleSheet, View } from "react-native";

type Props = {
    selectedImage?: string;
};

export default function OutfitCanvas({ selectedImage }: Props) {
    return <View className="w-scren" style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        // width: "100%",
        borderRadius: 1,
        backgroundColor: "white",
        aspectRatio: 1
    },
});