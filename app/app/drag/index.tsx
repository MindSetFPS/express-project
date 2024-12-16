import { View, StyleSheet, Platform, Dimensions } from "react-native";
import { useState, useRef, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { type ImageSource } from "expo-image";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";
import OutfitCanvas from "@/components/drag/ImageViewer";
import IconButton from "@/components/drag/IconButton";
import CircleButton from "@/components/drag/CircleButton";
import PieceOfClothingPicker from "@/components/drag/PieceOfClothingPicker";
import ClothesList from "@/components/drag/ClothesList";
import EmojiSticker from "@/components/drag/EmojiSticker";
import { router, useNavigation } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { createFileFromBlob, postApiPieceOfClothingCreateImage } from "@/components/drag/postApiPieceOfClothingCreateImage";
import generateUniqueFilename from "@/components/drag/fileNameGenerator";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function DragView() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);
    const [pickedEmojiList, setPickedEmojiList] = useState<ImageSource[]>([]);
    const [pieceOfClothingIdList, setPieceOfClothingList] = useState<number[]>([21, 22, 23])// TODO: Make it actually put real clothes
    const navigation = useNavigation()

    const usePostOutfit = (imageURL: string) => {
        fetch(process.env.EXPO_PUBLIC_API_URL + "/api/outfits/create", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: 2,
                pieceOfClothingIdList: pieceOfClothingIdList,
                imageURL: imageURL
            })
        })
            .then(res => res?.json())
            .then(data => {
                console.log('data', data);
            })
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerShadowVisible: true,
            headerTitle: "",
            headerRight: () => (
                <Button
                    variant="outline"
                    className="mr-2"
                    onPress={() => onSaveImageAsync()}
                >
                    <ButtonText>Finalizar</ButtonText>
                </Button>
            )
        })
    }, [])

    const handlePickedEmojiList = (emoji: ImageSource | undefined) => {
        setPickedEmojiList([...pickedEmojiList, emoji])
    }

    const [status, requestPermission] = MediaLibrary.usePermissions();
    const imageRef = useRef<View>(null);
    if (status === null) { requestPermission(); }
    const onReset = () => { };
    const onAddSticker = () => { setIsModalVisible(true); };
    const onModalClose = () => { setIsModalVisible(false); };

    const onSaveImageAsync = async () => {
        if (Platform.OS !== "web") {
            try {
                const localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1,
                });

                await MediaLibrary.saveToLibraryAsync(localUri);
                if (localUri) { alert("Saved!"); }
            } catch (e) {
                console.log(e);
            }
        } else {
            try {

                const windowWidth = Dimensions.get('window').width;
                console.log(windowWidth)
                const dataBlob = await domtoimage.toBlob(imageRef.current, {
                    quality: 0.95,
                    width: windowWidth,
                    height: windowWidth
                })
                const file = createFileFromBlob(dataBlob, generateUniqueFilename() + ".jpg")
                const fileURL = await postApiPieceOfClothingCreateImage(file)
                console.log(fileURL)
                if (fileURL) {
                    usePostOutfit(fileURL)
                }

                router.navigate("/(tabs)/wardrobe")

            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.imageContainer}>
                <View id="imageRef" className="w-full aspect-square overflow-hidden" ref={imageRef} collapsable={false}>
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
                <ClothesList onPickedEmojiList={handlePickedEmojiList} onSelect={setPickedEmoji} onCloseModal={onModalClose} />
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