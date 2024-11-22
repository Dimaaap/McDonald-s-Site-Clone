import { create } from "zustand";


export const useFamilyRoomsModal = create((set) => ({
    familyRoomsModal: false,
    
    setFamilyRoomsModal: (state) => set({ familyRoomsModal: state })
}))