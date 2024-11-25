import React from 'react'
import Image from 'next/image'

export const WhatFamilySayCart = ({ imageSrc, cartTitle, cartText }) => {
  return (
    <div className='flex flex-col gap-3 max-w-1/3 text-center'>
        <Image src={`/rmhc/${ imageSrc }`} alt="" width={300} height={300} />
        <h1 className="text-xl font-bold">
            { cartTitle }
        </h1>
        <p>
            { cartText }
        </p>
    </div>
  )
}
