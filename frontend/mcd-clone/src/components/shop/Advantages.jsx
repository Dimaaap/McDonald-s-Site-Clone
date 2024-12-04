import React from 'react'
import Image from 'next/image'

export const Advantages = () => {
  return (
    <div className="p-[5%] bg-gray-100 
    -mt-[5%] relative overflow-hidden">
        <div className="flex flex-row gap-[15%] mx-auto items-center px-[15%]">
            <div className="w-1/2 flex flex-col gap-5 mt-[5%] items-center">
                <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/bgs/bg-numbers-small.svg" 
                alt="" width={200} height={200} className='relative'/>
                <h1 className='text-6xl font-extrabold text-white absolute
                bottom-[50%] right-[67%]'>
                    5
                </h1>
                <h1 className='text-2xl font-extrabold text-center w-[80%]'>
                    Сімейних Кімнат вже відкрито в Україні
                </h1>
            </div>
            <div className="w-1/2 flex flex-col gap-5 mt-[5%] items-center">
                <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/bgs/bg-numbers-big.svg" 
                alt="" width={350} height={350} className='relative'/>
                <h1 className='text-6xl font-extrabold text-white absolute
                bottom-[48%] right-[23%]'>
                    35 833
                </h1>
                <h1 className='text-2xl font-extrabold text-center w-[80%]'>
                    гостей відвідали Сімейні Кімнати
                </h1>
            </div>
        </div>
    </div>
  )
}
