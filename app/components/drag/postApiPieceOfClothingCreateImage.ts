function postApiPieceOfClothingCreateImage(image: File): Promise<string> {
    const formData = new FormData()
    formData.append('file', image)
    return fetch(process.env.EXPO_PUBLIC_API_URL + '/api/piece-of-clothing/createImage', {
        method: 'POST',
        body: formData,
    })
        .then((res) => res.json())
        .then(data => data.fileURL)
        .catch(err => console.log(err))
}

function createFileFromBlob(blob: Blob, fileName: string): File {
    // Create a new File object using the blob and filename.
    return new File([blob], fileName);
}

export { postApiPieceOfClothingCreateImage, createFileFromBlob };