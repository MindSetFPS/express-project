import { create } from "zustand";

interface ShoppingCartStore {
    productIdList: number[]
    addProductIdToList: (id: number) => void;
    removeProductIdFromList: (id: any) => void;
}

const useShoppingCartStore = create<ShoppingCartStore>((set, get) => ({
    productIdList: [],
    addProductIdToList: (id) => {
        const ids = get().productIdList
        if(ids.includes(id)) return
        set((state) => ({
            productIdList: [...state.productIdList, id]
        }))
        console.log(ids)
    },
    removeProductIdFromList: (id) => {
        let ids = get().productIdList
        set((state) => ({
            productIdList: ids.filter(currentId => currentId != id)
        }))
        console.log(ids)
    }
}))
    
export default useShoppingCartStore;