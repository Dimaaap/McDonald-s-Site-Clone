import { create } from "zustand";


export const useCitiesList = create((set) => ({
    cities: [],

    setCities: (newCities) => set({
        cities: newCities
    })
}))