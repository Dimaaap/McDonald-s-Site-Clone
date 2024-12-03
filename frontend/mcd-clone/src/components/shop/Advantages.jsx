import React from 'react'
import Image from 'next/image'

export const Advantages = () => {
  return (
    <div className="p-[5%] bg-gray-100 
    -mt-[5%] relative overflow-hidden">
        <div className="flex flex-row gap-[15%] mx-auto items-center">
            <div className="relative flex flex-col gap-10 w-1/2 pl-[15%] pt-[5%]">
                <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/bgs/bg-numbers-small.svg" 
                alt="" width={200} height={200} />
                <h1 className="text-center text-4xl font-extrabold text-white absolute 
                top-[40%] left-[50%]">
                    5
                </h1>
                <h1 className="text-center text-2xl font-extrabold 
                max-w-[90%] -ml-[15%] -mt-[10%]">
                    Сімейних Кімнат вже відкрито в Україні
                </h1>
            </div>
            <div className="relative flex flex-col gap-10 w-1/2 pl-[15%] pt-[5%]">
                <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/bgs/bg-numbers-big.svg" 
                alt="" width={250} height={250} />
                <h1 className="text-center text-4xl font-extrabold text-white absolute 
                top-[40%] left-[50%]">
                    35 833
                </h1>
                <h1 className="text-center text-2xl font-extrabold 
                max-w-[80%] -ml-[15%] -mt-[10%]">
                    гостей відвідали Сімейні Кімнати
                </h1>
            </div>
        </div>
    </div>
  )
}
