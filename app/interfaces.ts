interface PostPieceOfClothing {
    name: string;
    typeOfClothing?: string;
    brand: string;
    size: string;
    color: string;
    purchasePrice: number;
    season: string;
    imageURL: string | null;
    userId?: number | undefined;
}

interface IPieceOfClothing {
    id?: number;
    userId?: number;
    name?: string;
    typeOfClothing?: string;
    brand?: string;
    size?: string;
    color?: string;
    purchasePrice?: number;
    season?: string;
    imageURL?: string;
}

async function GETPieceOfClothingById(id: number | string): Promise<IPieceOfClothing | null> {
    if (!id || typeof id !== 'string' && typeof id !== 'number') {
        console.error("Invalid id");
        return null;
    }
    const parseIntedId = Number(id);
    let poc: IPieceOfClothing;
    try {
        const response = await fetch(process.env.EXPO_PUBLIC_API_URL + `/api/piece-of-clothing/get-by-id/${parseIntedId}`);
        if (response.status === 200) {
            const data = await response.json();
            poc = {
                id: data[0],
                name: data[1],
                typeOfClothing: data[2],
                brand: data[3],
                size: data[4],
                color: data[5],
                purchasePrice: data[6],
                season: data[7],
                imageURL: data[8],
                userId: data[9]
            };
            return poc;
        } else {
            console.error("Error fetching piece of clothing by id", response);
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function UPDATEPieceOfClothing(pieceId: number, pieceOfClothing: IPieceOfClothing) {
    try {
        const response = await fetch(process.env.EXPO_PUBLIC_API_URL + `/api/piece-of-clothing/update/${pieceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pieceOfClothing)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data); // Should print an object with ok: true
            return {
                ok: true
            }
        } else {
            throw new Error(`Error updating piece of clothing: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
    }
}

export { IPieceOfClothing, PostPieceOfClothing, GETPieceOfClothingById, UPDATEPieceOfClothing };