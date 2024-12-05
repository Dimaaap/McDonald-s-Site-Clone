import { create } from "zustand"

export const useOpenShopModal = create((set) => ({

    isModalOpen: false,

    setIsModalOpen: () => set((state) => ({
        isModalOpen: !state.isModalOpen
    }))
}))