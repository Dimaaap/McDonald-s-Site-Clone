import { create } from "zustand"


export const useAllImages = create((set) => ({
    
    isAllImagesShow: false,

    setIsAllImagesShow: (value) => set({ isAllImagesShow: value })
}))