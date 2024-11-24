import Link from 'next/link'
import React from 'react'

export const RMHCHeaderLink = ({ href, text, onMouseEnter=null }) => {
  return (
    <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
      hover:text-yellow-300" href={ href } 
      onMouseEnter={ onMouseEnter }>
            { text }
      </Link>
  )
}
