"use client";

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useOpenShopModal, familyRooms, useRoomScroll } from '@/store';
import { ShopImageModal } from '../modals';


export const FamilyRoomsInUkr = () => {

    const carouselRef = useRef(null);
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const { isModalOpen, setIsModalOpen } = useOpenShopModal()

    const handleNext = () => {
        if (carouselRef.current && currentIndex < 4){
            setCurrentIndex((prev) => prev + 1)
            scrollToIndex(currentIndex + 1)
        }
    };

    const handlePrev = () => {
        if(carouselRef.current && currentIndex > 0){
            setCurrentIndex((prev) => prev - 1);
            scrollToIndex(currentIndex - 1);
        }
    }

    const scrollToIndex = (index) => {
        if(carouselRef.current){
            const itemWidth = carouselRef.current.children[0].offsetWidth;
            const gap = parseInt(
                window.getComputedStyle(carouselRef.current).gap.replace("px", "")
            )
            const scrollAmount = index * (itemWidth + gap);
            
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            })
        }
    }

  return (
    <div className="w-full bg-blue-600/80 px-1 pt-[4%] flex flex-col gap-10">
        { isModalOpen && (
            <ShopImageModal />
        ) }
      <div className="w-full text-center text-4xl font-extrabold text-white">
        <h1>Сімейні Кімнати в Україні</h1>
      </div>
      <div className='relative w-[100%] justify-center px-10'>
        <ChevronLeft size={50} className={`text-white hover:text-yellow-400 
        absolute -left-1 top-[35%] cursor-pointer 
        ${currentIndex === 0 && "opacity-50 cursor-not-allowed"}`} 
        onClick={ handlePrev }/>

        <div className="flex gap-12 overflow-hidden" ref={carouselRef}>
            { familyRooms.map((item, index) => (
                <div key={index} 
                className="flex flex-col gap-7 w-[48%] shrink-0 
                cursor-pointer text-center"
                onClick={() => setIsModalOpen(true)}>
                    <Image src={ item.src } alt={ item.title } 
                    width={500} height={500} className="w-full" />
                    <h1 className="font-extrabold text-yellow-500 text-xl">
                        { item.title }
                    </h1>
                </div>
            )) }
        </div>
        <ChevronRight size={50} className={`text-white hover:text-yellow-400 
        absolute -right-1 top-[35%] cursor-pointer 
        ${currentIndex === 3 && "opacity-50 cursor-not-allowed"}`} 
        onClick={ handleNext }/>
      </div>
    </div>
  )
}
