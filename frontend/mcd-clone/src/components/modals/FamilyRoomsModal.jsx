import React from 'react'
import Link from 'next/link'
import { FamilyRoomsRouter } from '@/store'

export const FamilyRoomsModal = ({ closeModal }) => {
  return (
    <div className="absolute bg-black/60 z-50 text-white font-semibold 
    flex flex-col w-[200px] top-[100px] left-[630px]"
    onMouseLeave={() => closeModal()}>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href={ FamilyRoomsRouter.OCHMATDYT }>
            У НДЛС "Охматдит"
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href={ FamilyRoomsRouter.RIVNE }>
            У Ріненській обласній дитячій лікарні
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href={ FamilyRoomsRouter.SUMY }>
            У Сумській обласній дитячій лікарні
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href={ FamilyRoomsRouter.LVIV }>
            У Львівській обласній дитячій лікарні
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href={ FamilyRoomsRouter.VINNYTSIA }>
            У Вінницькій обласній дитячій лікарні
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href={ FamilyRoomsRouter.KHARKIV }>
            У Харківській обласній дитячій лікарні
      </Link>
    </div>
  )
}

