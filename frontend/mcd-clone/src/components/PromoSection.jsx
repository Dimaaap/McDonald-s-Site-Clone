import Image from 'next/image'
import React from 'react'
import { UploadAppBtn } from './shared'
import { FaApple, FaGooglePlay } from "react-icons/fa";

export const PromoSection = () => {
  return (
    <div className="max-w-[90%] ml-[5%] flex flex-row gap-5 mb-10">
      <div className="w-1/2">
        <Image src="/promo_section.jpg" alt="McD Promo" width={550} 
        height={550}/>
      </div>
      <div className="flex flex-col gap-5 text-left">
        <h1 className="font-extrabold text-4xl">
            Отримуй знижки та особливі пропозиції
        </h1>
        <p>Завантажуй застосунок МакДональдз.</p>
        <div className="flex flex-row gap-5">
            <UploadAppBtn serviceTitle="AppStore" 
            serviceIcon={<FaApple size={25} className="w-1/2" />}
            serviceLink="https://apps.apple.com/us/app/mcdonalds/id922103212" />
            <UploadAppBtn serviceTitle="Google Play" 
            serviceIcon={<FaGooglePlay size={25} className="w-1/2" />}
            serviceLink="https://play.google.com/store/apps/details?id=com.mcdonalds.app&hl=en" />
        </div>
      </div>
    </div>
  )
}

