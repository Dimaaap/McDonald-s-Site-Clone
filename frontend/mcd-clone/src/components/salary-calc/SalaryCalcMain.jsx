import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { CredoItem } from '../shared';
import { ChevronDown } from 'lucide-react';
import { FAQStore, ToKnowStore, VacanciesRouter } from '@/store';

export const SalaryCalcMain = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-5 bg-[#ffbc0d] w-full 
      px-8 py-5 relative h-[52vh] flex flex-row">
        <div className="w-1/2">
          <Image src="/head_houses.png" alt="houses" 
          width={400} height={400}/>
        </div>
        <div className="w-1/2">
          <CredoItem />
        </div>
      </div>
      <div className="text-center py-7 bg-gray-200">
        <h1 className="text-2xl">
            Зарплатний калькулятор дає можливість розрахувати 
            потенційний рівень твоєї зарплатні
        </h1>
      </div>
      <div className="mt-[5%] mb-[5%] flex flex-col gap-5">
        <div className="text-center text-red-600 text-3xl 
        font-extrabold">
            <h1>Для розрахунку обери:</h1> 
        </div>
        <div className="max-w-[40%] ml-[30%] flex flex-col gap-3">
            <div className="flex flex-row gap-4 relative mt-[5%] 
            items-center">
                <p className="text-xl">
                    Місто:
                </p>
                <input className="border-b border-yellow-400 
                h-[50px] px-5 w-[70%] bg-white text-black 
                cursor-pointer hover:border-gray-400" 
                disabled={true} 
                defaultValue="Київ" />
                <ChevronDown size={ 40 } className="absolute right-20 
                text-yellow-400 cursor-pointer" />
            </div>
            <div className="flex flex-row gap-4 relative mt-[5%] 
            items-center">
                <p className="text-xl -ml-[19%]">
                    Працюватимеш:
                </p>
                <input className="border-b border-yellow-400 
                h-[50px] px-5 w-[70%] bg-white text-black 
                cursor-pointer hover:border-gray-400" 
                disabled={true} 
                defaultValue="Вдень" />
                <ChevronDown size={ 40 } className="absolute right-20 
                text-yellow-400 cursor-pointer" />
            </div>
            <div className="flex flex-row gap-4 relative mt-[5%] 
            items-center">
                <p className="text-xl -ml-[25%]">
                    Можеш працювати:
                </p>
                <input className="border-b border-yellow-400 
                h-[50px] px-5 w-[70%] bg-white text-black 
                cursor-pointer hover:border-gray-400" 
                disabled={true} 
                defaultValue="У будь-який час" />
                <ChevronDown size={ 40 } className="absolute right-20 
                text-yellow-400 cursor-pointer" />
            </div>
        </div>
        <button className="bg-yellow-400 text-black 
        py-2 px-4 max-w-[12%] rounded-md text-center 
        hover:bg-yellow-500 ml-[52%] mt-[2%]">
            Розрахувати
        </button>
        <div className="mt-[3%] flex flex-row gap-5 mb-[3%] 
        max-w-[80%] ml-[10%]">
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center
            bg-yellow-400" 
            href={ FAQStore.WHY_MCD }>
                Чому МакДональдз
            </Link>
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center 
            bg-yellow-400" 
            href={ VacanciesRouter.VACANCIES }>
                Заповнити анкету
            </Link>
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center 
            bg-yellow-400" 
            href={ FAQStore.FAQ }>
                Маєш запитання?
            </Link>
      </div>
      </div>
    </div>
  )
}

