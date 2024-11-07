import React from 'react'
import Link from "next/link"

export const LiLink = ({ linkHref, linkText }) => {
  return (
    <Link href={ linkHref } className="text-blue-400 
    underline hover:text-blue-500">
      { linkText }
    </Link>
  )
}

