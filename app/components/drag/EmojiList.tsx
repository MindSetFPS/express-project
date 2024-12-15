import { useState } from "react";
import { StyleSheet, Pressable, ScrollView } from "react-native";
import { Image, type ImageSource } from "expo-image";
import { VStack } from "../ui/vstack";

type Props = {
    onSelect: (image: ImageSource) => void;
    onPickedEmojiList: (image: ImageSource) => void
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal, onPickedEmojiList }: Props) {
    const [emoji] = useState<ImageSource[]>([
        require("../../assets/images/emoji1.png"),
        require("../../assets/images/emoji2.png"),
        require("../../assets/images/emoji3.png"),
        "http://192.168.1.140:9000/app/00004.png",
        "https://store.ffr.fr/media/catalog/product/cache/a22419bf135ccdcfa0fd848b00935495/t/-/t-shirt-n-2-xv-de-france-fanwear-blanc-pour-homme-_2_56.png"
    ]);

    return (
        <>
            <ScrollView>
                <VStack className="grid grid-cols-3">
                    {
                        emoji.map((el, index) => (
                            <Pressable
                                key={index}
                                onPress={() => {
                                    onPickedEmojiList(el)
                                    onCloseModal()
                                }}
                            >
                                <Image style={styles.image} source={el} />
                            </Pressable>
                        ))}
                </VStack>
            </ScrollView>

            {/* <FlatList
                horizontal
                showsHorizontalScrollIndicator={Platform.OS === "web"}
                data={emoji}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item, index }) => (
                    <Pressable
                        onPress={() => {
                            onSelect(item);
                            onCloseModal();
                        }}
                    >
                        <Image source={item} key={index} style={styles.image} />
                    </Pressable>
                )}
            /> */}
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
    },
});