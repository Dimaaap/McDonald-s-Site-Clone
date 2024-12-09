import React from 'react'
import Link from "next/link";
import { SliderHandler } from '.'

export const BannerNotice = ({ title, text, btnHref="" }) => {
  return (
    <div className="bg-white px-9 py-5 absolute flex flex-col gap-4 
        top-[20%] left-[3%] rounded-md text-left max-w-[35%] h-[70vh]">
            <h1 className="text-3xl font-extrabold">
                { title }
            </h1>
            <p className="h-[30vh]">
               { text }
            </p>
            { btnHref.length > 0 && (
                 <Link href={ btnHref }
                 className='text-black bg-yellow-400 p-3 
                 rounded-md max-w-[35%] bottom-10 text-center'>
                     Детальніше
                 </Link>
            ) }
            <SliderHandler />
        </div>
  )
}

