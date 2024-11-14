import React from 'react'
import Link from "next/link";

import { FaFacebook, FaTiktok, 
    FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import { FAQStore, ImpactStrategyRoute, QualityAndHygieneRoute, SocialRoute, TermsRoute, ToKnowStore } from '@/store';

export const MainFooter = () => {
  return (
    <div className="mt-20 flex flex-col gap-8 py-3 px-16">
        <div className="flex flex-row gap-24">
            <div className="flex flex-col gap-2 w-1/5">
                <h1 className="font-extrabold">
                    МакДональдз® в Україні
                </h1>
                <Link href={ ToKnowStore.MCD_IN_UKRAINE } 
                className="mt-3 hover:underline">
                    МакДональдз® в Україні
                </Link>
                <Link href={ ToKnowStore.FEEDBACK }
                className="hover:underline">
                    Зворотній зв'язок
                </Link>
                <Link href={ ToKnowStore.FIND_US } 
                className="hover:underline">
                    Знайти нас
                </Link>
                <Link href={ ToKnowStore.TENDERS } 
                className="hover:underline">
                    Тендери
                </Link>
                <Link href={ ToKnowStore.PRESS_ROOM } 
                className="hover:underline">
                    Прескімната "МакДональдз"
                </Link>
            </div>
            <div className="flex flex-col gap-2 w-1/5">
                <h1 className="font-extrabold">
                    Робота
                </h1>
                <Link href={ ToKnowStore.WORK } className="mt-3
                hover:underline">
                    Робота
                </Link>
                <Link href={ FAQStore.FAQ } className="hover:underline">
                    Запитання та відповіді
                </Link>
                <Link href={ ToKnowStore.WORK_CALC } className="hover:underline">
                   Зарплатний калькулятор 
                </Link>
            </div>
            <div className="flex flex-col gap-2 w-1/5">
                <h1 className="font-extrabold">
                    Стратегія впливу
                </h1>
                <Link href={ ImpactStrategyRoute.IMPACT_STRATEGY } 
                className="mt-3 hover:underline">
                    Стратегія впливу
                </Link>
                <Link href={ ImpactStrategyRoute.FOUNDATION } 
                className="hover:underline">
                    Фундація Рональда МакДональда
                </Link>
                <Link href={ ImpactStrategyRoute.SAVE_PLANET }
                className="hover:underline">
                    Бережемо планету
                </Link>
                <Link href={ ImpactStrategyRoute.WORKING_PLACES }
                className="hover:underline">
                    Робочі місця
                </Link>
            </div>
            <div className="flex flex-col gap-2 w-1-/5">
                <h1 className="font-extrabold">
                    Якість та гігієна
                </h1>
                <Link href={ QualityAndHygieneRoute.QUALITY_AND_HYGIENE } 
                className="mt-3 hover:underline">
                    Якість та гігієна
                </Link>
                <Link href={ QualityAndHygieneRoute.HYGIENE_IN_RESTAURANTS }
                className="hover:underline">
                    Гігієна в ресторанах
                </Link>
                <Link href={ QualityAndHygieneRoute.PRODUCTION_QUALITY }
                className="hover:underline">
                    Якість продукції
                </Link>
            </div>
        </div>
        <div className="flex flex-row justify-between border-b 
        border-gray-300 pb-5">
            <div className="flex flex-row gap-5">
                <Link href={ SocialRoute.FACEBOOK } 
                className="hover:text-black/30">
                    <FaFacebook size={25} />
                </Link>
                <Link href={ SocialRoute.TIK_TOK }
                className="hover:text-black/30">
                    <FaTiktok size={25} />
                </Link>
                <Link href={ SocialRoute.YOUTUBE }
                className="hover:text-black/30">
                    <FaYoutube size={25} />
                </Link>
                <Link href={ SocialRoute.TWITTER }
                className="hover:text-black/30">
                    <FaTwitter size={25} />
                </Link>
                <Link href={ SocialRoute.INSTAGRAM }
                className="hover:text-black/30">
                    <FaInstagram size={25} />
                </Link>
            </div>
        </div>
        <div className="flex flex-row justify-between">
            <div className='flex flex-row gap-5 items-center'>
                <Link className="hover:underline" 
                href={ TermsRoute.PRIVACY_POLICY }>
                    Політика конфіденційності
                </Link>
                <Link className="hover:underline" 
                href={ TermsRoute.TERMS_AND_CONDITIONS }>
                    Положення та умови
                </Link>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <Image src="/McDLogo.jpg" width={50} height={50} 
                alt="" />
                <p>
                    Усі права захищені ©2024 МакДональдз®
                </p>
            </div>
        </div>
    </div>
  )
}

