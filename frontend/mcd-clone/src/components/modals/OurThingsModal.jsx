"use client";

import { FoundationThingsRouter, RMHCAboutRouter, useFamilyRoomsModal } from '@/store';
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { RMHCHeaderLink } from '../shared';

export const OurThingsModal = ({ closeModal }) => {

    const { setFamilyRoomsModal } = useFamilyRoomsModal()

  return (
    <div className="absolute top-[100px] z-50 bg-blue-400 text-white 
    font-semibold flex flex-col left-[430px] w-[200px]"
    onMouseLeave={() => closeModal()}>
        <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300 flex flex-row justify-between
        hover:text-yellow-300" href={ FoundationThingsRouter.FAMILY_ROOMS }
        onMouseEnter={() => setFamilyRoomsModal(true)}>
            Сімейні Кімнати
            <ChevronRight size={ 20 } />
        </Link>
        <RMHCHeaderLink text="Дім Рональда МакДональда" href={ FoundationThingsRouter.MCDONALD_HOUSE } 
        onMouseEnter={ () => setFamilyRoomsModal(false) }/>
        <RMHCHeaderLink text="Розвиток сімейно-орієнтованої медицини" 
        href={ FoundationThingsRouter.SOM  } />
        <RMHCHeaderLink text="Навчальний курс для медиків" 
        href={ FoundationThingsRouter.CURRICULUM  } />
        <RMHCHeaderLink text="Гуманітарна допомога" 
        href={ FoundationThingsRouter.HELP  } />
    </div>
  )
}
