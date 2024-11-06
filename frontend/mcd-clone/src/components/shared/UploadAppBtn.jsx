import Link from 'next/link'
import React from 'react'

export const UploadAppBtn = ({ serviceTitle, serviceIcon, serviceLink }) => {
  return (
    <Link className="text-white font-semibold 
    flex flex-row gap-1 items-center bg-black rounded-md 
    max-w-[25%] px-3 py-1" 
    href={serviceLink}>
      { serviceIcon }

      <div className="flex flex-col gap-1">
        Завантажити з { serviceTitle }
      </div>
    </Link>
  )
}

