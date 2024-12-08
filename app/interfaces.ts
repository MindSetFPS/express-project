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

export { IPieceOfClothing, PostPieceOfClothing, GETPieceOfClothingById };