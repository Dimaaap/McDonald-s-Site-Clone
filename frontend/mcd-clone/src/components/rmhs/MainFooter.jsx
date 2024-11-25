import { FoundationThingsRouter, HowToJoinRouter, RMHCAboutRouter } from '@/store';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export const MainFooterRMHC = () => {
  return (
    <div className="mt-[3%] grid grid-cols-4 gap-10 bg-blue-600/60 
    px-[5%] py-[3%] text-white">
      <div className="flex flex-col gap-4">
        <Image src="/rmhc/main_logo.svg" alt="" width={300} height={300} />
        <div className="flex flex-row gap-5">
            <Link href="https://www.instagram.com/rmhcukraine">
                <FaInstagram size={40} 
                className="text-white hover:text-white/60" />
            </Link>
            <Link href="https://www.facebook.com/rmhcukraine">
                <FaFacebook size={40} 
                className="text-white hover:text-white/60" />
            </Link>
            <Link href="https://www.linkedin.com/in/galina-solovey-454b98241?originalSubdomain=ua">
                <FaLinkedin size={40} 
                className="text-white hover:text-white/60" />
            </Link>
            <Link href="https://www.youtube.com/@rmhc.ukraine">
                <FaYoutube size={40} 
                className="text-white hover:text-white/60" />
            </Link>
        </div>
        <Link href="#" className="hover:text-yellow-400 tranistion-all duration-300">
            Положення та умови
        </Link>
        <Link href="#" className="hover:text-yellow-400 tranistion-all duration-300">
            Політика конфіденційності
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">
            Про Фундацію в Україні
        </h1>
        <Link href={ RMHCAboutRouter.ABOUT } className="hover:text-yellow-400 transition-all 
        duration-300">
            Про Фундацію
        </Link>
        <Link href={ RMHCAboutRouter.YEARS_50 } className="hover:text-yellow-400 transition-all 
        duration-300">
            50 років у світі
        </Link>
        <Link href={ RMHCAboutRouter.REPORTS } className="hover:text-yellow-400 transition-all 
        duration-300">
            Звіти
        </Link>
        <Link href={ RMHCAboutRouter.TEAM } className="hover:text-yellow-400 transition-all 
        duration-300">
            Команда
        </Link>
        <Link href={ RMHCAboutRouter.PARTNERS } className="hover:text-yellow-400 transition-all 
        duration-300">
            Наші партнери
        </Link>
        <Link href={ RMHCAboutRouter.SUPERVISORY_BOARD } className="hover:text-yellow-400 transition-all 
        duration-300">
            Наглядова рада
        </Link>
        <Link href="rmhc/news" className="hover:text-yellow-400 transition-all 
        duration-300">
            Новини
        </Link>
        <Link href="rmhc/contacts" className="hover:text-yellow-400 transition-all 
        duration-300">
            Контакти
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">
            Наші програми
        </h1>
        <Link href={ FoundationThingsRouter.FAMILY_ROOMS } className="hover:text-yellow-400 transition-all 
        duration-300">
            Сімейні кімнати
        </Link>
        <Link href={ FoundationThingsRouter.MCDONALD_HOUSE } className="hover:text-yellow-400 transition-all 
        duration-300">
            Дім Рональда МакДональда
        </Link>
        <Link href={ FoundationThingsRouter.SOM } className="hover:text-yellow-400 transition-all 
        duration-300">
            Розвиток сімейно-орієнтованої медицини
        </Link>
        <Link href={ FoundationThingsRouter.CURRICULUM } className="hover:text-yellow-400 transition-all 
        duration-300">
            Навчальний курс для медиків
        </Link>
        <Link href={ FoundationThingsRouter.HELP } className="hover:text-yellow-400 transition-all 
        duration-300">
            Гуманітарна допомога
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">
            Як допомогти
        </h1>
        <Link href={ HowToJoinRouter.DONATE } className="hover:text-yellow-400 transition-all 
        duration-300">
            Зробити внесок
        </Link>
        <Link href={ HowToJoinRouter.BECOME_PARTNER } className="hover:text-yellow-400 transition-all 
        duration-300">
            Стати партнером
        </Link>
        <Link href={ HowToJoinRouter.SHOP } className="hover:text-yellow-400 transition-all 
        duration-300">
            Крамниця добрих покупок
        </Link>
        <Link href={ HowToJoinRouter.PAJAMAS_DAY } className="hover:text-yellow-400 transition-all 
        duration-300">
            День піжам
        </Link>
        <div className="flex flex-row justify-between gap-3 items-center">
            <input type="search" className="border border-black w-4/5 
            h-[40px]" />
            <button type="submit" className="text-white bg-blue-800 
            hover:bg-blue-900 rounded-sm w-2/5 font-bold p-2">
                Пошук
            </button>
        </div>
      </div>
    </div>
  )
}

