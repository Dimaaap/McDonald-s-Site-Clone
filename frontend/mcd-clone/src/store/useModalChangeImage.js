import { create } from "zustand";

export const useModalChangeImage = create((set) => ({
    currentImageIndex: 0,
    
    setCurrentImageIndex: (index) => set({ currentImageIndex: index })
}))