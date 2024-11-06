import Link from 'next/link'
import React from 'react'

export const MenuItem = ({ itemHref, itemTitle }) => {
  return (
    <Link href={ itemHref }>
        { itemTitle }
    </Link>
  )
}

