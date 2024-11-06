import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuItem } from '.'
import { menuItems } from '@/store'

export const BottomHeader = () => {
  return (
    <div className="flex flex-row gap-16 items-center">
      <Link href="/">
        <Image alt="McDonald`s Logo" width={100} height={100} 
        src="/McDLogo.jpg"
        />
      </Link>
      <div className="flex flex-row gap-7 text-[1.1rem] mt-7">
        <div className="flex flex-row gap-1 items-center cursor-pointer">
            <span>Меню</span>
            <ChevronDown size={20} />
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

