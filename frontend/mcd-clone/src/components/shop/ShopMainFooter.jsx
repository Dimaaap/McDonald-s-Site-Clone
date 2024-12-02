import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ShopMainFooter = () => {
  return (
    <div className="w-full flex flex-row justify-between gap-5 bg-white z-50
    border-t border-gray-100 shadow-md p-7">
        <Link href="/rmhs" className="text-black font-extrabold 
        hover:text-yellow-400">
            Сайт Фундації
        </Link>
        <Link href="https://www.facebook.com/rmhcukraine/" 
        className="text-black font-extrabold 
        hover:text-yellow-400">
            Ми у Facebook
        </Link>
        <Link href="https://www.instagram.com/rmhcukraine/" 
        className="text-black font-extrabold 
        hover:text-yellow-400">
            Ми у Instagram
        </Link>
        <Link href="tel:+380 044 230 0991" 
        className="text-black font-extrabold 
        hover:text-yellow-400">
            +380 044 230 0991
        </Link>
        <Link href="mailto:info@rmhc.org.ua"
        className="text-black font-extrabold 
        hover:text-yellow-400">
            info@rmhc.org.ua
        </Link>
        <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/04/visa-mastercard.png"
        alt="" width={100} height={100} className="rounded-md" />
    </div>
  )
}