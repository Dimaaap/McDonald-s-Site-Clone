import React from 'react'
import Image from 'next/image';
import { CredoItem } from '../shared';
import { GrMapLocation } from "react-icons/gr";
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { IoLocationOutline } from "react-icons/io5";
import { PiShareFatLight } from "react-icons/pi";
import { FAQStore, ToKnowStore, VacanciesRouter } from '@/store';
import Link from 'next/link';

export const VacanciesSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-5 bg-[#ffbc0d] w-full px-8 py-5 
      relative h-[60vh] flex flex-row">
        <div className="w-1/2">
            <Image src="/main_head_sun.png" alt="main_head_sun"
            width={300} height={300} className="absolute left-[10%]" /> 
        </div>
        <div className="w-1/2">
            <CredoItem />
        </div>
      </div>
      <div className="flex flex-col gap-3 px-[5%]">
        <h1 className="font-extrabold text-xl">
            Підібрати вакансію
        </h1>
        <div className="grid grid-cols-3 gap-10 mb-5 mt-5">
            <div className="relative w-full">
                <input className="border-b border-yellow-400 
                h-[50px] px-5 bg-white text-black 
                cursor-pointer w-full"
                disabled={true} 
                placeholder='Знайти моє розташування'/>
                <GrMapLocation size={ 35 } 
                className="text-yellow-400 absolute right-0 bottom-2" />
            </div>
            <div className="relative w-full">
                <input className="border-b border-yellow-400 
                h-[50px] px-5 bg-white text-black 
                cursor-pointer w-full"
                disabled={true} 
                placeholder='Київ'/>
                <ChevronDown size={ 35 } 
                className="text-yellow-400 absolute right-0 bottom-2" />
            </div>
            <div className="relative w-full">
                <input className="border-b border-yellow-400 
                h-[50px] px-5 bg-white text-black 
                cursor-pointer w-full"
                disabled={true} 
                placeholder='Обери район'/>
                <ChevronDown size={ 35 } 
                className="text-yellow-400 absolute right-0 bottom-2" />
            </div>
            <div className="relative w-full">
                <input className="border-b border-yellow-400 
                h-[50px] px-5 bg-white text-black 
                cursor-pointer w-full"
                disabled={true} 
                placeholder='Обери ресторан'/>
                <ChevronDown size={ 35 } 
                className="text-yellow-400 absolute right-0 bottom-2" />
            </div>
        </div>
        <div className="mt-5 border border-gray-300 rounded-sm 
        flex flex-col">
            <div className="border-b border-gray-300 px-8 py-5
            flex flex-row gap-5 items-center">
                <div className="flex flex-col text-left w-[25%]">
                    <p className="text-xl">
                        Працівник закладу
                    </p>
                    <p className="">
                        Відкрита вакансія
                    </p>
                </div>
                <div className="flex flex-col text-left w-[25%]">
                    <p className="text-xl">
                        Центральний район
                    </p>
                    <p className="">
                        Луцьк, просп.Соборності, 43
                    </p>
                </div>
                <div className="flex flex-col text-center w-[10%]">
                    <IoLocationOutline size={30} 
                    className="cursor-pointer text-yellow-400 
                    text-center" />
                </div>
                <div className="flex flex-col text-center w-[25%]">
                    <Link href="#" className="bg-yellow-400 px-4 py-2 
                    text-center text-black rounded-md 
                    hover:bg-yellow-500">
                        Заповнити анкету
                    </Link>
                </div>
                <div className="flex flex-col w-[10%] text-center">
                    <PiShareFatLight size={30} className="text-red-500 
                    cursor-pointer text-center ml-[40%]" />
                </div>
            </div>
        </div>
        <span className="flex flex-row gap-5 text-gray-500 
        justify-end">
            <div className="flex flex-row gap-1 items-center">
                <small className="text-[0.8rem]">
                    Показати 7
                </small>  
                <ChevronDown size={ 15 } className="cursor-pointer" />
            </div>
            <div className="flex flex-row gap-1 items-center">
                <small className="text-[0.8rem]">
                    1-2 з 2
                </small>
                <div className="flex flex-row gap-2">
                    <ChevronLeft size={25} className="cursor-pointer" />
                    <ChevronRight size={25} className="cursor-pointer" />
                </div>
            </div>
        </span>
        <div className="mt-[5%] flex flex-row gap-5 mb-[5%] 
        max-w-[100%]">
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center
            bg-yellow-400" 
            href={ FAQStore.WHY_MCD }>
                Чому МакДональдз
            </Link>
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center 
            bg-yellow-400" 
            href={ ToKnowStore.WORK_CALC }>
                Розрахувати ЗП
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

