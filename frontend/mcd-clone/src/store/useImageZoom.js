import { create } from "zustand"

export const useImageZoom = create((set, get) => ({
    isZoomed: false,
    offset: { x: 0, y: 0 },
    dragStart: null,
    mouseDown: false,

    setIsZoomed: (isZoomed) => set({ isZoomed }),
    setOffset: (offset) => set({ offset }),
    setDragStart: (dragStart) => set({ dragStart }),
    setMouseDown: (mouseDown) => set({ mouseDown }),

    handleSearchClick: () => {
        const { isZoomed, setIsZoomed, setOffset } = get()
        setIsZoomed(!isZoomed)
        setOffset({ x: 0, y: 0 })
    },

    handleImageClick: () => {
        const { isZoomed, setIsZoomed, setOffset } = get()
        if(!isZoomed){
            setIsZoomed(!isZoomed)
            setOffset({ x: 0, y:0 })
        }
    },

    handleMouseDown: (e) => {
        e.preventDefault()
        const { isZoomed, setMouseDown, setDragStart, offset } = get()

        if(isZoomed){
            setMouseDown(true)
            setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y })
        }
    },

    handleMouseMove: (e) => {
        const { mouseDown, isZoomed, setOffset, dragStart } = get()

        if(mouseDown && isZoomed) {
            setOffset({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            })
        }
    },

    handleMouseUp: () => {
        const { setMouseDown } = get()
        setMouseDown(false);
    }
}))