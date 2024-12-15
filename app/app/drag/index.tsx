import { View, StyleSheet, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { type ImageSource } from "expo-image";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";

import Button from "@/components/drag/Button";
import OutfitCanvas from "@/components/drag/ImageViewer";
import IconButton from "@/components/drag/IconButton";
import CircleButton from "@/components/drag/CircleButton";
import PieceOfClothingPicker from "@/components/drag/PieceOfClothingPicker";
import EmojiList from "@/components/drag/EmojiList";
import EmojiSticker from "@/components/drag/EmojiSticker";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
    const [pickedEmojiList, setPickedEmojiList] = useState<ImageSource[]>([]);

    const handlePickedEmojiList = (emoji: ImageSource | undefined) => {
        setPickedEmojiList([...pickedEmojiList, emoji])
    }

    const [status, requestPermission] = MediaLibrary.usePermissions();
    const imageRef = useRef<View>(null);
    if (status === null) { requestPermission(); }
    const onReset = () => { };
    const onAddSticker = () => {
        setIsModalVisible(true);
    };
    const onModalClose = () => {
        setIsModalVisible(false);
    };

    const onSaveImageAsync = async () => {
        if (Platform.OS !== "web") {
            try {
                const localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1,
                });

                await MediaLibrary.saveToLibraryAsync(localUri);
                if (localUri) {
                    alert("Saved!");
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                const dataUrl = await domtoimage.toJpeg(imageRef.current, {
                    quality: 0.95,
                });

                let link = document.createElement("a");
                link.download = "sticker-smash.jpeg";
                link.href = dataUrl;
                link.click();
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.imageContainer}>
                <View className="w-full" ref={imageRef} collapsable={false}>
                    <OutfitCanvas
                        imgSource={PlaceholderImage}
                        selectedImage={selectedImage}
                    />
                    {
                        pickedEmojiList && pickedEmojiList.length > 0 ?
                            pickedEmojiList.map((emoji) => <EmojiSticker imageSize={40} stickerSource={emoji} />)
                            : <></>
                    }
                    {/* {pickedEmoji && (
                        <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
                    )} */}
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                    <IconButton icon="refresh" label="Reset" onPress={onReset} />
                    <CircleButton onPress={onAddSticker} />
                    <IconButton
                        icon="save-alt"
                        label="Save"
                        onPress={onSaveImageAsync}
                    />
                </View>
            </View>
            <PieceOfClothingPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList onPickedEmojiList={handlePickedEmojiList} onSelect={setPickedEmoji} onCloseModal={onModalClose} />
            </PieceOfClothingPicker>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
    },
    imageContainer: {
        flex: 1,
        width: "100%"
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
    optionsContainer: {
        position: "absolute",
        bottom: 80,
    },
    optionsRow: {
        alignItems: "center",
        flexDirection: "row",
    },
});