import React from 'react'
import Image from 'next/image'

export const PersonalCard = ({ imageSrc, name, position=null, fullText=null }) => {
  return (
    <div className='flex flex-col gap-3 text-left'>
        <Image src={`/rmhc/team/${ imageSrc }`} alt="" width={300} 
        height={300} className="max-h-[50vh]" />
        <h1 className="text-blue-300 text-lg font-bold">
            { name }
        </h1>
        { position && (
          <p className="text-lg -mt-2">
            { position }
          </p> 
        ) }

        { fullText && fullText }
        
    </div>
  )
}

