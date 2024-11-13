import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HowToRegister, HowToUsePromo, 
    HowUploadAppSection, UsePromo } from '.'

export const GmalSection = () => {
  return (
    <div className='flex flex-col py-5 px-[5%]'>
      <div className="text-center flex flex-col gap-3">
        <h1 className="font-extrabold text-4xl">
            Мобільний застосунок МакДональдз
        </h1>
        <Image src="/gmal_hero.jpeg" alt="gmal" 
        width={800} height={800} className="w-full mt-5"/>
      </div>
      <div className="flex flex-row justify-between mt-[7%]">
        <Link href="#how-to-upload" 
        className="text-black bg-yellow-400 
        px-4 py-2 rounded-md hover:bg-yellow-500 max-w-1/3">
            Як завантажити застосунок?
        </Link>
        <Link href="#how-to-register" 
        className="text-black bg-yellow-400 
        px-4 py-2 rounded-md hover:bg-yellow-500 max-w-1/3">
            Як зареєструватись в застосунку?
        </Link>
        <Link href="#how-to-use-promo" 
        className="text-black bg-yellow-400 
        px-4 py-2 rounded-md hover:bg-yellow-500 max-w-1/3">
            Як скористатись пропозиціями?
        </Link>
      </div>
      <HowUploadAppSection />
      <HowToRegister />
      <HowToUsePromo />
      <UsePromo />
      <div className='justify-center mt-[5%] ml-[40%]'>
        <Link href="https://www.mcdonalds.com/content/dam/sites/ua/nfl/pdf/gma/Rules_Addendum_11.11-08.12.2024.pdf" 
        className="bg-yellow-400 text-center 
        max-w-[30%] hover:bg-yellow-500 rounded-md px-2 py-4">
            Актуальні правила акції
        </Link>
      </div>
      <div className="flex flex-row gap-20 mt-[5%] ml-[34%]">
        <Link href="https://www.mcdonalds.com/content/dam/sites/ua/nfl/pdf/gma/Term_and_Conditions_McDonald%27s_GMAL_20.07.23.pdf" 
        className="text-blue-400 underline 
        text-[0.8rem] hover:text-blue-500">
            Положення та умови
        </Link>
        <Link href="https://www.mcdonalds.com/content/dam/sites/ua/nfl/pdf/gma/GMA_Global_Template_Privacy_Statement_26.06.19_rev-IMU.pdf" 
        className="text-blue-400 underline 
        text-[0.8rem] hover:text-blue-500">
            Політика конфіденційності
        </Link>
      </div>
    </div>
  )
}
