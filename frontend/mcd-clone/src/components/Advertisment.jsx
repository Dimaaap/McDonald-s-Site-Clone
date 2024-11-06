import Image from 'next/image'
import React from 'react'
import { MoreDetailsBtn } from './shared'
import { AdvertismentRoute } from '@/store'

export const Advertisment = () => {
  return (
    <div className="w-[90%] ml-[5%] mb-10 flex flex-row gap-5">
      <div className="flex flex-col gap-7 w-1/2 mt-10">
        <Image src="/McCafe.jpeg" alt="McCafe" 
        width={600} height={600} />
        <h1 className="text-4xl font-extrabold">
            Справді смачна кава
        </h1>
        <p className="">
            Якщо й існує справді смачна кава, то в МакДональдз. 
            Заходь і смакуй улюблену 100% арабіку в жовтому 
            стаканчику. Залишиться лише вибрати: велика чи 
            маленька.
        </p>
        <MoreDetailsBtn href={AdvertismentRoute.MCCAFE} />
      </div>
      <div className="flex flex-col gap-7 w-1/2 mt-10">
        <Image src="/McApp.jpeg" alt="McApp" 
        width={600} height={600} />
        <h1 className="text-4xl font-extrabold">
            Доставляємо улюблене
        </h1>
        <p>
            Вам більше не доведеться виходити з дому, 
            щоб насолоджуватися вашими улюбленими стравами. 
            Отримайте їх разом з нашим безконтактним McDelivery.
        </p>
        <MoreDetailsBtn href={AdvertismentRoute.DELIVERY} />
      </div>
    </div>
  )
}

