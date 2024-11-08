import React from 'react'
import Image from 'next/image'

export const InfoCard = ({ imageSrc, text }) => {
  return (
    <div className="flex flex-col gap-3 w-1/5">
        <Image src={ imageSrc } alt="" 
        width={200} height={200} />
        <p>
            { text }
        </p>
    </div>
  )
}