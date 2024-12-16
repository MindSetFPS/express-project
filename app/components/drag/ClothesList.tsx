import { useEffect, useState } from "react";
import { StyleSheet, Pressable, ScrollView } from "react-native";
import { Image, type ImageSource } from "expo-image";
import { VStack } from "../ui/vstack";

type Props = {
    onSelect: (image: ImageSource) => void;
    onPickedEmojiList: (image: ImageSource) => void
    onCloseModal: () => void;
};

export default function ClothesList({ onSelect, onCloseModal, onPickedEmojiList }: Props) {
    const [emoji, setEmoji] = useState<ImageSource[]>([]);

    const useGetProducts = () => {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/piece-of-clothing/all")
            .then(res => res.json())
            .then(jsonResponse => {
                setEmoji(jsonResponse)
            })
    }

    useEffect(() => {
        useGetProducts()
    }, [])

    useEffect(() => {
        console.log("images: ", emoji)
    }, [emoji])


    return (
        <>
            <ScrollView>
                <VStack className="grid grid-cols-4 p-1 gap-2">
                    {
                        emoji && emoji.length > 0 ? emoji.map((el, index) => (
                            <Pressable
                                key={index}
                                onPress={() => {
                                    onPickedEmojiList(el[8])
                                    onCloseModal()
                                }}
                            >
                                <Image style={styles.image} source={el[8]} />
                            </Pressable>
                        )) : <></>
                    }
                </VStack>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 12
    },
});