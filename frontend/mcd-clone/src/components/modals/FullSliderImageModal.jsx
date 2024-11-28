import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IoClose } from 'react-icons/io5'
import { useHelpModal } from '@/store'

export const FullSliderImageModal = ({ slidersList }) => {
  return (
    
    <div className="fixed inset-0 z-50 flex items-center bg-black 
    bg-opacity-80">{ console.log(slidersList) }
      <div className="bg-white max-w-[50%] max-h-[50%] m-auto 
      p-3 relative group">
        <Image src="" alt="" width={400} height={400} className="w-full" />

        <ChevronLeft size={ 50 } className="p-[3%] rounded-full text-white 
        border border-white hover:bg-white hover:text-gray-500 
        absolute top-[40%] cursor-pointer left-3 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300" />
        
        <ChevronRight size={ 50 } className="p-[3%] rounded-full text-white 
        border border-white hover:bg-white hover:text-gray-500 
        absolute top-[40%] cursor-pointer right-3 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300"/>
      </div>
      <div className="flex flex-row justify-between items-center absolute 
      top-[75%] left-[33%] font-bold">
            <div className="flex flex-row items-center gap-5">
                <ChevronLeft size={20} className="text-gray-400 
                hover:text-gray-500 cursor-pointer" />
                <p className="text-gray-400">
                    8/8
                </p>
                <ChevronRight size={20} className="text-gray-400 
                hover:text-gray-500 cursor-pointer" />
            </div>
            <div className="ml-[240%]">
                <IoClose size={20} className="text-gray-400 hover:text-gray-500 
                cursor-pointer" />
            </div>
        </div>
    </div>
  )
}

