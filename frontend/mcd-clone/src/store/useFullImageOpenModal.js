import { create } from "zustand";

export const useFullImageOpenModal = create((set) => ({

    isModalOpen: false,

    setIsModalOpen: () => set((state) => ({
        isModalOpen: !state.isModalOpen
    }))
}))