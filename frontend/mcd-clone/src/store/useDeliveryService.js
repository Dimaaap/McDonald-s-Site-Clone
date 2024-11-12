import { create } from "zustand";

export const useDeliveryService = create((set) => ({
    chosenCourier: "glovo",

    setChosenCourier: (newCourier) => set({
        chosenCourier: newCourier
    })
}))