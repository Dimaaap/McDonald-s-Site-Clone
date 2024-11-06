import Image from 'next/image'
import React from 'react'
import { MoreDetailsBtn } from './shared'

export const FAQSection = () => {
  return (
    <div className="w-[90%] ml-[5%] flex flex-row gap-5 mt-7 mb-5">
        <div className="flex flex-col gap-3 w-1/3 rounded-md 
        border border-gray-400/50 min-h-[450px]">
            <Image src="/work_in_mcd.jpeg" alt="work in McD" 
            className="w-full" width={200} height={200} />
            <div className="flex flex-col gap-3 px-5 py-2">
                <h1 className="text-3xl font-extrabold">
                    Робота в МакДональдз
                </h1>
                <p className="h-[100px]">
                    У нас ти зможеш поєднувати навчання й роботу, 
                    зустрічатися із друзями та мати вдосталь часу для 
                    родини!
                </p>
                <MoreDetailsBtn href="/work" size="xl" />
                </div>
        </div>
        <div className="flex flex-col gap-3 w-1/3 rounded-md 
        border border-gray-400/50">
            <Image src="/open_restaurants.jpeg" alt="Open Restaurants"
            className="w-full" width={200} height={200} />
            <div className="flex flex-col gap-3 px-5 py-2">
                <h1 className="text-3xl font-extrabold">
                    Завітати чи замовити?Ось у чому питання!
                </h1>
                <p className="h-[100px]">
                    Тут відповідь, який заклад зараз працює для 
                    відвідування і на доставку!
                </p>
                <MoreDetailsBtn href="/work" size="xl" />
            </div>
        </div>
    </div>
  )
}