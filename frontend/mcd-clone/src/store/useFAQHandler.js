import { create } from "zustand";


export const useFAQHandler = create((set) => ({
    activeHeader: 1,
    isQuestionOpen: false,
    openQuestion: 0,

    setActiveHeader: (activeHeaderNumber) => set({
        activeHeader: activeHeaderNumber
    }), 
    setIsQuestionOpen: () => set((state) => {
        isQuestionOpen: !state.isQuestionOpen
    }),
    setOpenQuestion: (number) => set({
        openQuestion: number
    })
}))