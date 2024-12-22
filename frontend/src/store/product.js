import {create} from "zustand"

// globallesti
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products}),
}))
