import Image from 'next/image'
import React from 'react'

export const HowToUsePromo = () => {
  return (
    <div className="flex flex-col py-5 px-[5%] mt-[5%]"
    id="how-to-use-promo">
        <div className="text-center">
            <h1 className="text-2xl font-extrabold">
                Як скористатися пропозиціями від МакДональдз?
            </h1>
        </div>
        <div className="flex flex-row justify-between 
        gap-5 mt-[3%]">
            <div className="flex flex-col gap-2 max-w-1/5">
                <Image src="/how-to-use-promo-1.jpeg" 
                alt="How To Use Promo" width={ 200 } 
                height={200} />
                <div className="text-center max-w-[70%] ml-[15%]
                mt-[40%] 
                flex flex-col gap-3">
                    <p className="font-extrabold">
                        Крок 1:
                    </p>   
                    <p>
                        Зайдіть в застосунок
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 max-w-1/5">
                <Image src="/how-to-use-promo-2.jpeg" 
                alt="How To Use Promo" width={ 200 } 
                height={200} />
                <div className="text-center max-w-[90%] ml-[5%] 
                flex flex-col gap-3 mt-[30%] ">
                    <p className="font-extrabold">
                        Крок 2:
                    </p>   
                    <p>
                        Перейдіть у розділ «Ваучери»
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 max-w-1/5">
                <Image src="/how-to-use-promo-3.jpeg" 
                alt="How To Use Promo" width={ 200 } 
                height={200} className="ml-[5%]" />
                <div className="text-center max-w-[80%] ml-[10%] 
                flex flex-col gap-3">
                    <p className="font-extrabold">
                        Крок 3:
                    </p>   
                    <p>
                        Виберіть пропозицію та натисніть 
                        «Використати»
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 max-w-1/5">
                <Image src="/how-to-use-promo-4.jpeg" 
                alt="How To Use Promo" width={ 200 } 
                height={200} />
                <div className="text-center max-w-[80%] ml-[10%] 
                flex flex-col gap-3">
                    <p className="font-extrabold">
                        Крок 4:
                    </p>   
                    <p>
                        Щоб продовжити, натисніть «Активувати»
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 max-w-1/5">
                <Image src="/how-to-use-promo-5.jpeg" 
                alt="How To Use Promo" width={ 200 } 
                height={200} />
                <div className="text-center max-w-[80%] ml-[10%] 
                flex flex-col gap-3">
                    <p className="font-extrabold">
                        Крок 5:
                    </p>   
                    <p>
                        Використайте пропозицію протягом 15 хвилин
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
