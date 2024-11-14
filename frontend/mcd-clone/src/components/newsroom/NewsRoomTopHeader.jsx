import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

export const NewsRoomTopHeader = () => {
  return (
    <div className="bg-white w-full px-5 py-3">
       <Link className="flex flex-row gap-3
        items-center" href="/">
        <div>
            <Image src="/mcd-small-logo.jpg" alt="Logo" 
            width={40} height={40} />
        </div>
        <div className="flex flex-row gap-1 items-center">
            <ChevronLeft size={20} className='text-black' />
            <p>На головну</p>
        </div>
        </Link> 
    </div>
  )
}

