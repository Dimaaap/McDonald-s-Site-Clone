import { create } from "zustand"

export const useRoomScroll = create((set, get) => ({
    currentIndex: 0,
    maxIndex: 4,


    handleNext: (carouselRef) => {
        const { currentIndex, maxIndex, setCurrentIndex, scrollToIndex } = get();
        if(carouselRef.current && currentIndex < maxIndex){
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex)
        }
    },

    handlePrev: (carouselRef) => {
        const { currentIndex, setCurrentIndex, scrollToIndex } = get()

        if(carouselRef.current && currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        }
    },  

    scrollToIndex: (index, carouselRef) => {
        if(carouselRef.current) {
            const itemWidth = carouselRef.current.children[0].offsetWidth;
            const gap = parseInt(
                widow.getComputedStyle(carouselRef.current).gap.replace("px", "")
            );
            const scrollAmount = index * (itemWidth + gap)

            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            })
        }
    },


    setCurrentIndex: (index) => set({ currentIndex: index })
}))
