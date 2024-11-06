import Link from 'next/link'
import React from 'react'

import { MapPin, Search } from 'lucide-react'

export const TopHeader = () => {
  return (
    <div className="flex flex-row gap-5 justify-end">
      <Link className="flex flex-row gap-1 items-center text-black"
      href="/search">
        <Search size={20} />
        <span className="text-black">Пошук</span>
      </Link>
      <Link className="flex flex-row gap-1 items-center"
      href="/restaurants">
        <MapPin className="text-red-500" size={20} />
        <span className="text-blue-500 underline">Знайти нас</span>
      </Link>
    </div>
  )
}
