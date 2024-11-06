import React from 'react'
import Link from "next/link";
import { SliderHandler } from '.'

export const BannerNotice = ({ title, text, btnHref }) => {
  return (
    <div className="bg-white px-9 py-5 absolute flex flex-col gap-4 
        top-[20%] left-[3%] rounded-md text-left max-w-[35%]">
            <h1 className="text-3xl font-extrabold">
                { title }
            </h1>
            <p className="h-[25vh]">
               { text }
            </p>
            <Link href={ btnHref }
            className='text-black bg-yellow-400 p-3 
            rounded-md max-w-[30%] bottom-10'>
                Детальніше
            </Link>
            <SliderHandler />
        </div>
  )
}

