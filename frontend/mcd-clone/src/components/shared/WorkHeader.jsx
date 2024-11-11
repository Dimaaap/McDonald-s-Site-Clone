import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const WorkHeader = () => {
  return (
    <div className="px-12 py-5 flex flex-row gap-5 w-full 
    items-center">
        <Link href="/">
            <Image src="/logo.svg" alt="Logo" 
            width={100} height={100} />
        </Link>
        <h1 className="text-4xl font-normal text-gray-500">
            Кар'єра
        </h1>
    </div>
  )
}
