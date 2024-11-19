"use client"

import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MenuItem } from '.'
import { menuItems } from '@/store'
import { MenuCategoriesModal } from '../modals'

export const BottomHeader = () => {

  const [ modalOpen, setModalOpen ] = useState(false)

  const handleModalShow = () => {
    if(modalOpen){
      setModalOpen(false)
    } else {
      setModalOpen(true)
    }
  }

  return (
    <div className="flex flex-row gap-16 items-center">
      <Link href="/">
        <Image alt="McDonald`s Logo" width={100} height={100} 
        src="/McDLogo.jpg"
        />
      </Link>
      <div className="flex flex-row gap-7 text-[1.1rem] mt-7">
        <div className="flex flex-row gap-1 items-center cursor-pointer relative"
        onClick={ handleModalShow }>
            <span>Меню</span>
            { modalOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} /> }
            { modalOpen && <MenuCategoriesModal /> }
        </div>
        {
          menuItems.map((item) => (
            <MenuItem key={item.key} itemHref={item.href} 
            itemTitle={item.title} />
          ))
        }
      </div>
    </div>
  )
}

