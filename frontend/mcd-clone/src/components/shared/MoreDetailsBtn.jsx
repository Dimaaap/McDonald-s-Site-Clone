import React from 'react'
import Link from "next/link"

export const MoreDetailsBtn = ({ href, size="lg" }) => {
  return (
    <Link href={href} 
        className={`bg-yellow-400 text-black text-center
        px-2 py-3 ${size === "lg" ? "w-[20%]" : "w-[30%]"} 
        rounded-md hover:bg-yellow-500`}>
            Детальніше
    </Link>
  )
}
