"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IoClose } from 'react-icons/io5'
import { firstSliderImages, secondSliderImages, 
  thirdSliderImages, useFullImageOpenModal } from '@/store'

export const FullSliderImageModal = ({ slidersList, index }) => {
    const { setIsModalOpen, } = useFullImageOpenModal();
    const [ sliderImagesList, setSliderImagesList ] = useState({})
    const [ currentImageIndex, setCurrentImageIndex ] = useState(index)
 
    const handleSlidersList = () => {

      switch(slidersList){
        case "first":
          setSliderImagesList(firstSliderImages)
          break;
        case "second":
          setSliderImagesList(secondSliderImages)
          break;
        case "third":
          setSliderImagesList(thirdSliderImages)
          break;
      }
    } 

    const setModalPrevImage = () => {

      if(slidersList === "third"){
          if(currentImageIndex === 0){
              setCurrentImageIndex(7);
          } else {
              setCurrentImageIndex(currentImageIndex - 1)
          }
      } else if (slidersList === "second"){
          if(currentImageIndex === 0){
              setCurrentImageIndex(13);
          } else {
              setCurrentImageIndex(currentImageIndex - 1)
          }
      } else {
          if(currentImageIndex === 0){
              setCurrentImageIndex(13);
          } else {
              setCurrentImageIndex(currentImageIndex - 1);
          }
      }
    }

    const setModalNextImage = () => {
      if(slidersList === "third"){
        if(currentImageIndex === 7){
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    } else if (slidersList === "second"){
        if(currentImageIndex === 13){
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    } else {
        if(currentImageIndex === 13){
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }
    }

    useEffect(() => {
      handleSlidersList()
    }, [])
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black 
    bg-opacity-80">
      <div className="bg-white max-w-[50%] max-h-[50%] m-auto 
      p-3 relative group">

        { sliderImagesList.length > 0 & index != -1 && (
          <Image src={ sliderImagesList[currentImageIndex].src } alt="" width={400} 
          height={400} className="w-full" />  
        ) }
        
        <ChevronLeft size={ 50 } className="p-[3%] rounded-full text-white 
        border border-white hover:bg-white hover:text-gray-500 
        absolute top-[40%] cursor-pointer left-3 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300" onClick={() => setModalPrevImage() }/>
        
        <ChevronRight size={ 50 } className="p-[3%] rounded-full text-white 
        border border-white hover:bg-white hover:text-gray-500 
        absolute top-[40%] cursor-pointer right-3 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300" onClick={ () => setModalNextImage() } />
      </div>
      <div className="flex flex-row justify-between items-center absolute 
      top-[75%] left-[33%] font-bold">
            <div className="flex flex-row items-center gap-5">
                <ChevronLeft size={20} className="text-gray-400 
                hover:text-gray-500 cursor-pointer" 
                onClick={() => setModalPrevImage() }/>
                <p className="text-gray-400">
                    { currentImageIndex + 1 }/{sliderImagesList.length}
                </p>
                <ChevronRight size={20} className="text-gray-400 
                hover:text-gray-500 cursor-pointer" 
                onClick={ () => setModalNextImage() }/>
            </div>
            <div className="ml-[220%]">
                <IoClose size={20} className="text-gray-400 hover:text-gray-500 
                cursor-pointer" onClick={ () => setIsModalOpen(false) } />
            </div>
        </div>
    </div>
  )
}

