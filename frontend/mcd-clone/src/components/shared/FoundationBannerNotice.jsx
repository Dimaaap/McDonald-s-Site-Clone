import React from 'react'
import { FoundationSliderHandler } from '.'

export const FoundationBannerNotice = ({ title, text }) => {
  return (
    <div className="bg-white px-9 py-5 absolute flex flex-col gap-4 
        top-[30%] left-[3%] rounded-md text-left max-w-[35%] h-[45vh]">
            <h1 className="text-3xl font-extrabold">
                { title }
            </h1>
            <p className="h-[30vh]">
               { text }
            </p>
            <FoundationSliderHandler />
        </div>
  )
}

