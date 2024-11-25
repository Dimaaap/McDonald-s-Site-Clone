import React from 'react'
import Image from 'next/image';

export const OurImpactCart = ({ mainText, imageSrc, headerText="", 
  extraClasses="" }) => {
  return (
    <div className={`border-2 border-blue-400 rounded-md relative 
    px-[5%] py-[10%] h-[250px] ${extraClasses}`}>
        <div className="flex flex-col gap-7 mt-[20%]">
            <h1 className="text-2xl font-extrabold text-blue-400">
                { headerText }
            </h1>
            <p>
                { mainText }
            </p>
        </div>
        <Image src={`/rmhc/${ imageSrc }.jpg`} alt="" width={70} height={70} 
        className="absolute -top-9 left-[36%]"/>
    </div>
  )
}
