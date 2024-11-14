import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { NewsRoomRouter } from '@/store';

export const NewsRoomSection = () => {
  return (
    <div className='flex flex-col gap-7 py-[7%] px-5'>
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-extrabold text-4xl">
            Прескімната "МакДональдз"
        </h1>
        <p className="max-w-[50%] ml-[25%]">
            Ласкаво просимо до прескімнати "МакДональдз" в Україні. 
            Тут ви знайдете наші актуальні новини, пресрелізи, 
            візуальні матеріали та контакти для звʼязку із 
            пресслужбою компанії.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-[3%]">
        <div className="max-w-1/3 flex flex-col gap-5">
            <Image src="/news-image.jpeg" alt="News Image"
            width={400} height={400} className="w-full" />
            <div className="flex flex-col gap-5 max-h-[60vh] text-left">
                <h1 className="text-2xl font-extrabold">
                    Новини
                </h1>
                <p>
                    У цьому розділі ви можете ознайомитися з усіма новинами 
                    та пресрелізами компанії "МакДональдз" в Україні, які 
                    для зручності можна відфільтрувати за темами та по датах.
                </p>
                <Link href={ NewsRoomRouter.NEWS } 
                className="bg-yellow-400 rounded-sm px-4 py-2 
                text-center max-w-[50%] hover:bg-yellow-500">
                    Перейти до новин
                </Link>
            </div>
        </div>
        <div className="max-w-1/3 flex flex-col gap-5">
            <Image src="/visual-materials.jpeg" alt="Visual Materials Image"
            width={400} height={400} className="w-full" />
            <div className="flex flex-col gap-5 max-h-[60vh] text-left">
                <h1 className="text-2xl font-extrabold">
                    Візуальні матеріали
                </h1>
                <p >
                    Тут ви знайдете різноманітні зображення від пресслужби 
                    компанії "МакДональдз" в Україні, які можете використовувати 
                    у ваших матеріалах: на сайтах, соцмережах, чи у друці.
                </p>
                <Link href={ NewsRoomRouter.VISUAL_MATERIALS } 
                className="bg-yellow-400 rounded-sm px-4 py-2 
                text-center max-w-[90%] hover:bg-yellow-500">
                    Перейти до візуальних матеріалів
                </Link>
            </div>
        </div>
        <div className="max-w-1/3 flex flex-col gap-5">
            <Image src="/contacts.jpeg" alt="Contacts Image"
            width={400} height={400} className="w-full" />
            <div className="flex flex-col gap-5 max-h-[60vh] text-left">
                <h1 className="text-2xl font-extrabold">
                    Контакти для ЗМІ
                </h1>
                <p>
                Якщо ви хочете зробити інформаційний запит до "МакДональдз" в 
                Україні або маєте пропозицію співпраці, ви можете звернутися 
                до пресслужби нашої компанії.
                </p>
                <Link href={ NewsRoomRouter.PRESS_CONTACTS } 
                className="bg-yellow-400 rounded-sm px-4 py-2 
                text-center max-w-[60%] hover:bg-yellow-500">
                    Перейти до контактів
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

