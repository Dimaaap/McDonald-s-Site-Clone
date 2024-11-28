import { create } from "zustand";

export const useHelpModal = create((set, get) => ({

    firstSlider: 0,
    secondSlider: 0,
    thirdSlider: 0,

    setFirstSlider: (slider) => set({
        firstSlider: slider
    }),

    setSecondSlider: (slider) => set({
        secondSlider: slider
    }),

    setThirdSlider: (slider) => set({
        thirdSlider: slider
    }),

    setPrevSlider: (slider) => {
        const { firstSlider, secondSlider, thirdSlider, setFirstSlider, setSecondSlider, setThirdSlider } = get();

        if(slider === "third"){
            if(thirdSlider === 0){
                setThirdSlider(7);
            } else {
                setThirdSlider(thirdSlider - 1)
            }
        } else if (slider === "second"){
            if(secondSlider === 0){
                setSecondSlider(13);
            } else {
                setSecondSlider(secondSlider - 1)
            }
        } else {
            if(firstSlider === 0){
                setFirstSlider(13);
            } else {
                setFirstSlider(firstSlider - 1);
            }
        }
    }, 

    setNextSlider: (slider) => {
        const { firstSlider, secondSlider, thirdSlider, setFirstSlider, setSecondSlider, setThirdSlider } = get();

        if(slider === "third"){
            if(thirdSlider === 7){
                setThirdSlider(0)
            } else {
                setThirdSlider(thirdSlider + 1)    
            }
           
        } else if(slider === "second"){
            if(secondSlider === 13){
                setSecondSlider(0)
            } else {
              setSecondSlider(secondSlider + 1)  
            }
        } else {
            if(firstSlider === 13){
                setFirstSlider(0)
            } else {
                setFirstSlider(firstSlider + 1) 
            }
        }
    }
}))