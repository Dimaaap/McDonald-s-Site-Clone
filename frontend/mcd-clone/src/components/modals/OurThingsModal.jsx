"use client";

import { useFamilyRoomsModal } from '@/store';
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export const OurThingsModal = ({ closeModal }) => {

    const { setFamilyRoomsModal } = useFamilyRoomsModal()

  return (
    <div className="absolute top-[100px] z-50 bg-blue-400 text-white 
    font-semibold flex flex-col left-[430px] w-[200px]"
    onMouseLeave={() => closeModal()}>
        <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300 flex flex-row justify-between
        hover:text-yellow-300" href="rmhc/family-rooms"
        onMouseEnter={() => setFamilyRoomsModal(true)}>
            Сімейні Кімнати
            <ChevronRight size={ 20 } />
        </Link>
        <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/dim-ronalda-macdonalda"
        onMouseEnter={() => setFamilyRoomsModal(false)}>
            Дім Рональда МакДональда
        </Link>
        <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/som">
            Розвиток сімейно-орієнтованої медицини
        </Link>
        <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/fcc-curriculum">
            Навчальнй курс для медиків
        </Link>
        <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
        hover:text-yellow-300" href="rmhc/help">
            Гуманітарна домомога
        </Link>
    </div>
  )
}
