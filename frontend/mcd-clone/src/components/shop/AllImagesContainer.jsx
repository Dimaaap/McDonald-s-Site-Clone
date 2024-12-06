"use client"

import { useAllImages, familyRooms, useModalChangeImage } from '@/store'
import Image from 'next/image'
import React from 'react'

export const AllImagesContainer = () => {

    const { isAllImagesShow } = useAllImages();
    const { currentImageIndex, setCurrentImageIndex } = useModalChangeImage()
 
  return (
    <div className={`h-full absolute right-0 top-0 bg-gray-200 z-5 p-1
        ${ isAllImagesShow ? "w-[20%]": "w-0 hidden" }`}>
          <div className="w-[90%] h-[35%] grid grid-cols-2 gap-y-2">
            { familyRooms.map((room, index) => (
              <div className={`w-[100px] -mr-[20%]
                items-center justify-center
                ${ index === currentImageIndex ? "border-4 border-red-400": "" }`}
              key={ index }>
                <Image src={ room.src } alt={ room.title } width={100} height={100}
                className={`cursor-pointer h-full`} 
                onClick={ () => setCurrentImageIndex(index) }/>
              </div>
            )) }
          </div>
        </div>
  )
}

