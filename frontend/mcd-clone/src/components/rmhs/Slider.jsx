"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderImages } from '@/store';

export const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const showPrevSlide = () => {
        if (currentSlide === 0){
        setCurrentSlide(5)
        } else {
        setCurrentSlide(currentSlide - 1)
        }
    }
    
    const showNextSlide = () => {
        if (currentSlide === 5){
        setCurrentSlide(0)
        } else {
        setCurrentSlide(currentSlide + 1)
        }
    }

  return (
    <>
      <Link className="w-full h-screen relative mb-5" href={ sliderImages[currentSlide].imageHref }>
        <Image src={ sliderImages[currentSlide].imageSrc } 
        className="w-full transition-all duration-300 mb-5" 
        width={1000} height={1000} alt="" />
      </Link>
      <button className="absolute top-[75%] left-[1%] z-50 rounded-full p-2 
      border border-gray-400 text-white hover:bg-white hover:text-gray-400" 
      onClick={ () => showPrevSlide() }>
          <ChevronLeft size={30} />
        </button>
      <button className="absolute top-[75%] right-[1%] z-50 rounded-full p-2 
      border border-gray-400 text-white hover:bg-white hover:text-gray-400" 
      onClick={ () => showNextSlide() }>
        <ChevronRight size={30} />
      </button>
    </>
  )
}