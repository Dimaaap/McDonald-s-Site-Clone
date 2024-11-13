import Link from 'next/link'
import React from 'react'

export const UploadAppBtn = ({ serviceTitle, serviceIcon, serviceLink, 
  bigWidth=false }) => {
  return (
    <Link className={`text-white font-semibold 
    flex flex-row gap-1 items-center bg-black rounded-md 
    ${!bigWidth ? "max-w-[30%]" : "max-w-[40%]"} px-3 py-1`}
    href={serviceLink}>
      { serviceIcon }

      <div className="flex flex-col gap-1">
        Завантажити з { serviceTitle }
      </div>
    </Link>
  )
}

