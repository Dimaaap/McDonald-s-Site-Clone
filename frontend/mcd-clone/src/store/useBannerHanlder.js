import { create } from 'zustand';


export const useBannerHandler = create((set) => ({
    currentBanner: 1,
    totalBanners: 6,
    showNextBanner: () => set((state) => ({
        currentBanner: state.currentBanner < state.totalBanners ? state.currentBanner + 1 : 1,
    })),
    showPrevBanner: () => set((state) => ({
        currentBanner: state.currentBanner > 1 ? state.currentBanner - 1 : state.totalBanners,
    })),
    setBanner: (bannerNumber) => set({
        currentBanner: Math.min(6, Math.max(1, bannerNumber))
    })
}))

export const useFoundationBannerHandler = create((set) => ({
    currentBanner: 1,
    totalBanners: 5,

    showNextBanner: () => set((state) => ({
        currentBanner: state.currentBanner < state.totalBanners ? state.currentBanner + 1 : 1
    })),

    showPrevBanner: () => set((state) => ({
        currentBanner: state.currentBanner > 1 ? state.currentBanner - 1 : state.totalBanners
    })),
    setBanner: (bannerNumber) => set({
        currentBanner: Math.min(5, Math.max(1, bannerNumber))
    })
}))