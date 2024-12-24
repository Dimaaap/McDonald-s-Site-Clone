import React from 'react'
import Image from "next/image"

import { LiLink } from '../shared'

export const FeedbackMainSection = () => {
  return (
    <div className="px-[5%] py-[5%] text-center flex flex-col gap-5">
      <h1 className="text-5xl font-extrabold">
          Зворотний зв'язок
      </h1>
      <Image src="/feedback_hero.jpeg" alt=""
        width={900} height={900} className="w-full mt-5" />
      <div className="flex flex-col gap-5 text-left mt-5 
      text-[1.1rem]">
        <h1 className="font-extrabold text-2xl">
          Надайте коментар щодо роботи закладів МакДональдз:
        </h1>
        <ul className='list-disc ml-10'>
          <li>
            0 800 501 579 (щоденно з 9:00 до 21:00)
          </li>
          <li>
            <LiLink linkHref="/feedback" linkText="Форма" />
            {" "} зворотнього зв'язку
          </li>
          <li>
            Відгук на сторінці {" "}
            <LiLink linkHref="https://www.mctellus.com/websurvey/2/execute?_g=MTEyNDQ%3DG&_s2=77e9efc0-f79f-48c5-ac87-88907bd44054" linkText="Mctellus" />
            {" "} (за наявності чеку)
          </li>
          <li>
            <LiLink linkHref="https://www.facebook.com/McDonaldsUA/" linkText="Facebook" />
            {" "} або {" "}

            <LiLink linkHref="https://www.instagram.com/mcdonaldsukraine/" linkText="Intagram" />
          </li>
        </ul>
        <h1 className="font-extrabold text-2xl">
          Організація благодійних обідів для дітей:
        </h1>
        <ul className='list-disc ml-10'>
          <li>
            Звертайтесь {" "}
            <LiLink linkHref="#" linkText="у заклади МакДональдз" />
          </li>
        </ul>
        <h1 className="font-extrabold text-2xl">
          Пропозиції щодо співпраці:
        </h1>
        <ul className='list-disc ml-10'>
          <li>
            <LiLink linkHref="mailto:info@ua.mcd.com" 
            linkText="info@ua.mcd.com" />
          </li>
        </ul>
      </div>
    </div>
  )
}
