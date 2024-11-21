import { create } from "zustand";


export const useSelectedCity = create((set) => ({
    selectedCity: "Луцьк",

    setSelectedCity: (newCity) => set({
        selectedCity: newCity
    })
}))