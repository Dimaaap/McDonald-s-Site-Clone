import React from 'react'
import Image from 'next/image';

export const PresentsSection = () => {
  return (
    <div className="relative bg-[url('https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/bgs/bg-out-results.svg')] 
    flex flex-row px-[5%] items-center bg-cover bg-center -mt-[5%]">
        <div className="text-6xl w-1/2 text-left font-extrabold py-[15%] 
        mx-auto">
            Родинам уже подарували
        </div>
        <div className="w-1/2 font-extrabold py-[15%]
        mx-auto flex flex-col gap-0 relative">
            <h1 className="text-[10rem] text-blue-300">
                32:12
            </h1>
            <div className="flex flex-row text-left -mt-[9%]">
                <h1 className="text-2xl ml-[12%]">
                    днів
                </h1>
                <h1 className="text-2xl ml-[33%]">
                    годин
                </h1>
            </div>
            <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/icons/icon-red-left.svg"
            alt="" width={50} height={50} className="absolute -left-20" />
            <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/icons/icon-blue-left.svg"
            alt="" width={20} height={20} className="absolute bottom-[45%] -left-12" />
            <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/icons/icon-yellow-left.svg" 
            alt="" width={30} height={30} className="absolute bottom-[25%] -left-20" />
            <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/icons/icon-yellow-left.svg" 
            alt="" width={30} height={30} className="absolute bottom-[45%] right-20" />
            <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/icons/icon-red-left.svg"
            alt="" width={50} height={50} className="absolute bottom-[25%] right-20" />
        </div>
    </div>
  )
}
