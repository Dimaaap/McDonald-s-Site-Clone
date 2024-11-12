import Image from 'next/image'
import React from 'react'

export const WorkFooter = () => {
  return (
    <div className="w-full bg-yellow-400 
    text-right justify-end px-7 py-3">
      <div className="flex flex-row gap-1 items-center text-white 
      justify-end">
        <Image src="/footer_logo.png" alt="logo" width={40}
        height={40} />
        <h1 className="text-light text-[1.1rem]">
            2024 McDONALD`S Ukraine
        </h1>
      </div>
    </div>
  )
}

