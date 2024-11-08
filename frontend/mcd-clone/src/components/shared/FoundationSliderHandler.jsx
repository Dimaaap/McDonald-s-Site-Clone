import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BannerDot } from '.';
import { useFoundationBannerHandler } from '@/store';

export const FoundationSliderHandler = () => {

  const { currentBanner, setBanner, 
    showNextBanner, showPrevBanner } = useFoundationBannerHandler();

  return (
    <div className='flex flex-row gap-5 items-center'>
        <ChevronLeft size={25} className="cursor-pointer" 
        onClick={() => showPrevBanner() }  />
        <BannerDot isActive={ currentBanner === 1 ? true : false } 
        onClick={() => setBanner(1)}/>
        <BannerDot isActive={ currentBanner === 2 ? true : false } 
        onClick={() => setBanner(2)} />
        <BannerDot isActive={ currentBanner === 3 ? true : false } 
        onClick={() => setBanner(3)} />
        <BannerDot isActive={ currentBanner === 4 ? true : false } 
        onClick={() => setBanner(4)} />
        <BannerDot isActive={ currentBanner === 5 ? true : false } 
        onClick={() => setBanner(5)} />
        <ChevronRight size={25} className="cursor-pointer"
        onClick={() => showNextBanner()} />
        <div className="w-[1px] h-[15px] bg-gray-400" />
        <div className="flex flex-row gap-0 items-center cursor-pointer">
            <span className="text-[1.5rem]">▸</span>
            <span className="font-semibold">Play</span>
        </div>
    </div>
  )
}

