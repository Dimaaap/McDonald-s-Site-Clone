"use client"

import { getToys } from '@/fetch'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export const ToysMainSection = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        const fetchToys = async() => {
            try{
                const toysObj = await getToys();
                setToys(toysObj)   
            } catch(err){
                console.error(err)
            }
            
        }
        fetchToys()
    }, [])

  return (
    <div className="p-[5%] flex flex-col gap-7">
      <div className="text-center text-4xl font-extrabold">
        Нова серія іграшок «Маріо Карт»
      </div>
      <div className="w-full h-screen">
        <Image src="/mario-toys-hero.jpg" alt="" width={600} height={600} 
        className="w-full" />
      </div>
      <div className="text-left flex flex-col gap-3">
        <p>
            «Маріо» — це не просто відеогра, це цілий всесвіт, який об’єднує 
            однодумців і створює справжні спільноти.
        </p>
        <p>
            Вважаємо, покоління Альфа погодиться з тим, що геймінг стає частиною життя, а не 
            просто розвага. Адже хочеться бути залученим, навіть якщо не граєш у саму гру.
        </p>
        <p>
            Хеппі Міл® дає дітям змогу зануритися у веселий світ «Маріо Карт», де 
            вони можуть створити й налаштувати власний карт, як у грі. До набору входить 
            серія картингів, які можна зібрати й кастомізувати на свій смак. У кожному Хеппі Міл® 
            малеча знайде кузов картингу з фігуркою, змінне шасі та наліпки для персоналізації. 
            Тож гайда на перегони!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-12 gap-y-12">
        { toys && toys.map((toy) => (
            <div className="flex flex-col gap-5" key={ toy.id }>
                <Image src={ toy.image } alt={ toy.title } width={200} height={200}
                className="w-full" />
                <h1 className="text-2xl font-extrabold text-center">
                    { toy.title }
                </h1>
            </div>
        )) }
      </div>
      <div className="text-center font-extrabold text-2xl w-[80%] mx-auto mt-[3%]">
        <h1>
            Пропозиція діє з 28 листопада по 25 грудня 2024 року в закладах МакДональдз 
            на території України та за умови наявності акційної продукції в закладі. 
            Іграшки можуть відрізнятися від зображень.
        </h1>
      </div>
      <div className="flex flex-row gap-5 mt-[5%]">
        <div className="w-1/3">
            <Image src="https://s7d1.scene7.com/is/image/mcdonalds/Social-responsibility_376x376pxl:3-column-desktop?resmode=sharp2"
            width={200} height={200} className="w-full" alt="" />
        </div>
        <div className="w-2/3 text-left flex flex-col gap-5 relative">
            <h1 className="text-2xl font-extrabold">
                Читаємо книги разом із Хеппі Міл®
            </h1>
            <p>
                Ми хочемо, щоб у батьків з’являлося все більше приводів провести 
                час із дітьми. Наприклад, не тільки погратися із дитиною іграшками,
                а ще й погортати дитячі книжки з Хеппі Міл®
            </p>
            <Link href="#" className="bg-yellow-400 hover:bg-yellow-500 text-center
            w-[30%] p-4 rounded-md absolute bottom-0">
                Дізнатись більше
            </Link>
        </div>
      </div>
    </div>
  )
}

