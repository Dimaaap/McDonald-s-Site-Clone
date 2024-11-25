import React from 'react'
import Image from 'next/image';

export const OurAchievements = ({ imageSrc, titleText, mainText }) => {
  return (
    <div className="flex flex-col gap-3 text-left cursor-pointer">
        <Image src={`/rmhc/${ imageSrc }`} alt="" 
        width={300} height={300} 
        className="w-full transition-transform duration-300 
        ease-in-out hover:scale-110" />
        <h1 className="text-2xl font-semibold hover:text-blue-300 
        transition-all duration-300">
            { titleText }
        </h1>
        <p>
            { mainText }
        </p>
    </div>
  )
}
