import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ServiceCard = ({ imageSrc, title, price, link }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col h-[70vh] relative">
        <div className="w-full">
            <Image src={ imageSrc }
            alt="" width={300} height={300} />
        </div>
        <div className="w-full py-[3%] px-3">
            <h1 className="text-xl font-extrabold text-center">
                { title }
            </h1>
            <div className="flex flex-row gap-0 absolute bottom-3 
            items-center w-full">
                <p className="text-xl text-red-500 font-extrabold w-1/2">
                    {price} грн.
                </p>
                <Link className="rounded-lg p-3 text-center
                bg-yellow-400 hover:bg-yellow-500 text-white font-bold" 
                href={link}>
                    Детальніше
                </Link>
            </div>
        </div>
    </div>
  )
}
