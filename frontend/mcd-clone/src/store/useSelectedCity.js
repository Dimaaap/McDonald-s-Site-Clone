import { create } from "zustand";


export const useSelectedCity = create((set) => ({
    selectedCity: {
        "title": "Луцьк",
        "region": null,
        "has_glovo_delivery": true,
        "has_bolt_delivery": true,
        "glovo_area_image": "https://ukraine.mcdonalds.ua/media/image/glovo/map_Lutsk_preview.jpg",
        "bolt_area_image": "https://ukraine.mcdonalds.ua/media/image/glovo/Lutsk_Glovo_25092024.jpg"
    },

    setSelectedCity: (newCity) => set({
        selectedCity: newCity
    })
}))