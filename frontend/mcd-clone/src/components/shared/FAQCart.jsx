import React from 'react'
import Image from "next/image";

import { MoreDetailsBtn } from '.'


export const FAQCart = ({ imageSrc, header, text, btnHref, 
    isNeedMargin=true }) => {
  return (
    <div className="flex flex-col gap-3 w-1/3 rounded-md border 
        border-gray-400/50">
            <Image src={ imageSrc } alt="" 
            className="w-full" width={200} height={200}/>
            <div className="flex flex-col gap-3 px-5 py-2">
                <h1 className="text-3xl font-extrabold">
                    { header }
                </h1>
                <p className="h-[100px]">
                    { text }
                </p>
                <MoreDetailsBtn href={btnHref} size="xl" 
                extraClasses={`${isNeedMargin ? "-mt-9" : ""}`} />
            </div>
    </div>
  )
}
