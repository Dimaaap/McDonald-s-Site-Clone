"use client"

import React, { useState } from 'react'
import Image from "next/image"
import { FaGooglePlay, FaSortDown, FaApple } from "react-icons/fa";
import { SelectCurierBtn, UploadAppBtn } from '../shared';
import { useDeliveryService, useSelectedCity } from '@/store';
import Link from 'next/link';
import { CitiesWithDeliveryModal } from '../modals';


export const McDeliveryMainSection = () => {

  const { chosenCourier } = useDeliveryService();
  const { selectedCity } = useSelectedCity();
  const [citiesModalOpen, setCitiesModalOpen] = useState(false)


  return (
    <div className="flex flex-col gap-7">
      <div className="w-full max-h-screen">
        <Image src="/McDelivery_header_2024.jpg" 
        alt="McDelivery Header" 
        width={800} height={800} className="w-full"/>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold">
          Перевірте на мапі міста радіус доставки
        </h1>
      </div>
      <div className="flex flex-row gap-5 px-[5%] w-[60%] mb-5">
        <div className='w-1/2 flex flex-col gap-3 relative'>
          <label className="text-[1.1rem]">
            Оберіть місто закладу
          </label>
          <input className="ring-0 border-2 border-yellow-400 
          h-[50px] px-5 cursor-pointer rounded-md" 
          disabled={ true }
          value={ selectedCity.title }
          onClick={() => setCitiesModalOpen(!citiesModalOpen)} />
          
          { citiesModalOpen && <CitiesWithDeliveryModal /> }
          
          <div className={`absolute w-[50px] h-[50px] 
          bg-yellow-400 text-center items-center 
          text-black right-0 top-10 rounded-md
          `}
          onClick={() => setCitiesModalOpen(!citiesModalOpen)}>
            <FaSortDown size={30} className={`ml-[10px]
            cursor-pointer transition-all duration-300 
            ${citiesModalOpen ? "rotate-180 translate-y-[16px]": "translate-y-[5px]"}`} />
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-3 relative'>
          <label className="text-[1.1rem]">
            Оберіть кур'єра
          </label>
          <SelectCurierBtn hasBoltDelivery={ selectedCity.has_bolt_delivery } />
        </div>
      </div>
      <div className="flex flex-row items-center my-5 
      max-w-[90%] px-[5%] gap-5">
        <div className="w-1/5">
          <Image src={`${chosenCourier === "glovo" ? 
            "/glovo.png" : 
            "/Bolt-icon.png"}`} alt="delivery-service" 
            className="rounded-md" width={90} height={90}/>
        </div>
        <div className="mb-5">
          <p className="text-lg">
            Вартість доставки у вашому місті залежить від 
            відстані (від закладу до вашого місцезнаходження).
          </p>
          <p className="text-sm mt-3">
            Управління радіусами доставки - це повністю 
            відповідальність {" "}
            { chosenCourier === "glovo" ? "Glovo" : "Bolt Food" }. 
            Це означає, 
            що в залежності від погодних умов, кількістю 
            вільних кур'єрів, часу та інших факторів стандартні 
            радіуси можуть як збільшуватись, так і зменшуватись 
            з метою надання найкращого сервісу покупцям.
          </p>
        </div>
      </div>
      <div className="px-[5%] w-full mb-5 max-h-[500px] cursor-pointer">
        { selectedCity.has_glovo_delivery & chosenCourier === "glovo" && (
          <Image src={ selectedCity.glovo_area_image } 
          alt="map-lutsk-delivery" width={800} height={800} 
          className="w-full object-cover max-h-[500px]"/>
        ) }
        { selectedCity.has_bolt_delivery & chosenCourier === "bolt" && (
          <Image src={ selectedCity.bolt_area_image } 
          alt="map-lutsk-delivery" width={800} height={500} 
          className="w-full object-cover max-h-[500px]"/>
        ) }
      </div>
      <div className="text-center justify-center flex 
      flex-col gap-5 mb-10">
        <p>
          Правила рекламної акції з Glovo в місті Олександрія у 
          період з 01 листопада по 30 листопада 2024 року
        </p>
        <Link href="https://ukraine.mcdonalds.ua/media/docs/Rules_Glovo_Oleksandriya.pdf"
        className="text-white font-semibold rounded-md bg-yellow-400 
        px-4 py-2 text-center max-w-[15%] justify-center 
        hover:bg-yellow-500 ml-[41%]">
            Правила акції
        </Link>
      </div>
      <div className="text-center justify-center flex 
      flex-col gap-5 mb-10">
        <p>
          Правила рекламної акції з Bolt Food у період з 
          28 жовтня по 10 листопада 2024 року
        </p>
        <Link href="https://ukraine.mcdonalds.ua/media/docs/BOLT_Delivery_28.10-10.11.pdf"
        className="text-white font-semibold rounded-md bg-yellow-400 
        px-4 py-2 text-center max-w-[15%] justify-center 
        hover:bg-yellow-500 ml-[41%]">
            Правила акції
        </Link>
      </div>
      <div className="px-[5%] text-center">
        <h1 className="text-2xl font-extrabold">
          Завантажуй застосунок
        </h1>
        <div className="w-full h-[90vh] mb-10 mt-5
        flex flex-row py-[9%] px-[5%]
        bg-[url('https://ukraine.mcdonalds.ua/macdonalds/macDelivery/img/Delivery_footer_background.jpg')]">
          <div className='flex flex-col gap-5 ml-[5%]'>
            <Image src="/Glovo-banner.svg" alt="glovo banner" 
            width={200} height={200}/>
            <div className="flex flex-row gap-3 -ml-12 mt-3">
              <UploadAppBtn serviceTitle="AppStore" 
              serviceIcon={<FaApple size={25} />}
              serviceLink="https://glovoapp.com/?utm_source=Referral&utm_medium=Paid_Partners_Visibility&utm_campaign=Referral_BrandAwareness_PartnerWeb_All_PartnersVisibility_UA" />
              <UploadAppBtn serviceTitle="GooglePlay"
              serviceIcon={<FaGooglePlay size={25} />} 
              serviceLink="https://glovoapp.com/?utm_source=Referral&utm_medium=Paid_Partners_Visibility&utm_campaign=Referral_BrandAwareness_PartnerWeb_All_PartnersVisibility_UA"/>
            </div>
            <Link className="text-white bg-green-600 rounded-md 
            hover:bg-green-700 p-3 text-center max-w-[40%] mt-5" 
            href="https://glovoapp.com/?utm_source=Referral&utm_medium=Paid_Partners_Visibility&utm_campaign=Referral_BrandAwareness_PartnerWeb_All_PartnersVisibility_UA">
              Замовляй на сайті
            </Link>
          </div>
          <div className="flex flex-col">
            <Image src="/BoltFood-hor-white.svg" alt="bolt logo" 
            width={200} height={200} className="mt-8 ml-[40%]" />
            <div className="flex flex-row gap-3 ml-[30%] mt-3">
              <UploadAppBtn serviceTitle="AppStore" 
              serviceIcon={<FaApple size={25} />}
              bigWidth={ true }
              serviceLink="https://apps.apple.com/ua/app/bolt-food/id1451492388?l=uk" />
              <UploadAppBtn serviceTitle="GooglePlay"
              serviceIcon={<FaGooglePlay size={25} />} 
              bigWidth={ true }
              serviceLink="https://play.google.com/store/apps/details?id=com.bolt.deliveryclient"/>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}