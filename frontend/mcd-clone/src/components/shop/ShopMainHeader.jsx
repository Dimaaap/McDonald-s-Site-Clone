import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShopSectionLinks } from '@/store'

export const ShopMainHeader = () => {
  return (
    <div className="flex flex-row justify-between gap-5 items-center 
    p-10 bg-white fixed top-0 left-0 z-50 w-full mb-[20%]">
        <Link href="/shop" className="">
            <Image src="/rmhc/main-logo.webp" alt="RMHC Logo" width={150} 
            height={150} />
        </Link>
        <div className="flex flex-row gap-12 items-center">
            <Link href={ ShopSectionLinks.ABOUT_SECTION } className="font-extrabold text-black 
            hover:text-yellow-400">
                Про нас
            </Link>
            <Link href={ ShopSectionLinks.PRODUCTS_SECTION } className="font-extrabold text-black 
            hover:text-yellow-400">
                Товари
            </Link>
            <Link href={ ShopSectionLinks.REVIEWS_SECTION } className="font-extrabold text-black 
            hover:text-yellow-400">
                Відгуки
            </Link>
            <Link href={ ShopSectionLinks.CONTACTS_SECTION } className="font-extrabold text-black 
            hover:text-yellow-400">
                Контакти
            </Link>
            <Link href={ ShopSectionLinks.HELP_ONLINE } className="rounded-lg 
            text-white font-extrabold bg-yellow-400 hover:bg-yellow-500 p-2">
                Подарувати
            </Link>
        </div>
    </div>
  )
}

