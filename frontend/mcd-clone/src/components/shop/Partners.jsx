import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Partners = () => {
  return (
    <div className="bg-gray-100 px-[5%] flex flex-col gap-10 py-[4%]">
        <div className="text-center text-4xl font-extrabold">
            Наші партнери
        </div>
        <div className="grid grid-cols-4 gap-10">
            <Link href="https://pokupon.ua/">
                <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/09/partner-1.png"
                alt="" width={200} height={200} className="w-full" />
            </Link>
            <Link href="https://superdeal.ua/uk/">
                <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/09/partner-2.png"
                alt="" width={200} height={200} className="w-full" />
            </Link>
            <Link href="https://prom.ua/">
                <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/09/partner-3.png"
                alt="" width={200} height={200} className="w-full" />
            </Link>
            <Link href="https://garnamama.com/">
                <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/10/logo_kolor_garnamama-2.png"
                alt="" width={200} height={200} className="w-full" />
            </Link>
        </div>
    </div>
  )
}
