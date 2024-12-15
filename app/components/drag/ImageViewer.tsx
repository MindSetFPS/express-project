import { StyleSheet, View } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource;
    selectedImage?: string;
};

export default function OutfitCanvas({ imgSource, selectedImage }: Props) {
    // const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

    // return <Image source={imageSource} style={styles.image} />;

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