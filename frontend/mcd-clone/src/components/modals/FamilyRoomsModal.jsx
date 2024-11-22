import React from 'react'
import Link from 'next/link'

export const FamilyRoomsModal = ({ closeModal }) => {
  return (
    <div className="absolute bg-black/60 z-50 text-white font-semibold 
    flex flex-col w-[200px] top-[100px] left-[630px]"
    onMouseLeave={() => closeModal()}>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/about/ndls-ohmatdyt">
            У НДЛС "Охматдит"
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/about/rivne-hospital">
            У Ріненській обласній дитячій лікарні
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/about/sumy-hospital">
            У Сумській обласній дитячій лікарні
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/about/lviv-hospital">
            У Львівській обласній дитячій лікарні
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/about/vinnytsia-hospital">
            У Вінницькій обласній дитячій лікарні
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/about/kharkiv-hospital">
            У Харківській обласній дитячій лікарні
      </Link>
    </div>
  )
}

