import Link from 'next/link'
import React from 'react'

export const MenuItem = ({ itemHref, itemTitle, isActive=false }) => {
  return (
    <Link href={ itemHref } 
    className={`${isActive ? "font-bold border-b-2 border-red-500" : "" }`}>
        { itemTitle }
    </Link>
  )
}

