"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { RequiredStar } from '../shared'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const FeedbackFormContainer = () => {

  return (
    <div className="px-[5%] py-[5%] flex flex-col gap-8">
        <h1 className='text-center text-5xl font-extrabold'>
            Залиште свій відгук
        </h1>
        <div className="w-full h-[90vh] flex flex-row justify-between px-[5%] 
        relative bg-[url('https://ukraine.mcdonalds.ua/macdonalds/macResponse/img/response-head-bg.png')]
        bg-cover bg-center bg-no-repeat">
            <div className="max-w-[40%] flex flex-col gap-2 absolute 
            font-extrabold text-5xl top-[40%] left-[20%]">
                <h1>Є запитання?</h1>
                <h1>Є відповідь!</h1>
            </div>
            <Image src="https://ukraine.mcdonalds.ua/macdonalds/macResponse/img/response-head-img.png" alt="" 
            className="absolute bottom-0 right-10" width={350} height={350} />
        </div>
        <div className="text-center flex flex-col gap-2">
            <h1 className="font-extrabold text-4xl">
                Заповніть форму
            </h1>
            <h1 className="text-3xl font">
                Зірочкою (<RequiredStar />) позначено поля
                для обов'язкового заповнення
            </h1>
        </div>
        <form className="flex flex-col gap-5 w-full">
            <div className="flex flex-row justify-between gap-7 w-full">
                <div className="flex flex-col gap-2 w-1/3">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Ім'я
                        <RequiredStar />
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full" type="text" placeholder='Іван'/>    
                </div>

                <div className="flex flex-col gap-2 w-1/3">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Ваш номер телефону
                        <RequiredStar />
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full" type="tel" placeholder='+380(__)___-__-__'/>
                </div>

                <div className="flex flex-col gap-2 w-1/3">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Ваш e-mail
                        <RequiredStar />
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full" type="email" placeholder="______@___"/>    
                </div>
            </div>
            <div className="flex flex-row justify-between gap-7 w-full">
                <div className="flex flex-col gap-2 w-1/3 relative">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Оберіть тематику звернення
                        <RequiredStar />
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full cursor-pointer" disabled />
                    <span className="w-[50px] h-[50px] rounded-md bg-yellow-400 p-4 absolute 
                    right-0 bottom-0 items-center text-center justify-center">
                        <ChevronDown size={25} className="text-black cursor-pointer mt-0 -ml-[2px]" />
                    </span>
                </div>
                <div className="flex flex-col gap-2 w-1/3 relative">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Оберіть місто закладу
                        <RequiredStar />
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full cursor-pointer" disabled />
                    <span className="w-[50px] h-[50px] rounded-md bg-yellow-400 p-4 absolute 
                    right-0 bottom-0 items-center text-center justify-center">
                        <ChevronDown size={25} className="text-black cursor-pointer mt-0 -ml-[2px]" />
                    </span>
                </div>
                <div className="flex flex-col gap-2 w-1/3 relative">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Оберіть адресу закладу
                        <RequiredStar />
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full cursor-pointer" disabled />
                    <span className="w-[50px] h-[50px] rounded-md bg-yellow-400 p-4 absolute 
                    right-0 bottom-0 items-center text-center justify-center">
                        <ChevronDown size={25} className="text-black cursor-pointer mt-0 -ml-[2px]" />
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-7 justify-between w-full">
                <div className="w-2/3 flex flex-col gap-2">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Ваше звернення
                        <RequiredStar />
                    </label>
                    <textarea className="border-2 border-gray-300 rounded-md 
                    resize-none p-5 outline-none" rows={9} placeholder="Текст повідомлення" />
                </div>
                <div className="flex flex-col gap-5 w-1/3">
                    <div className="flex flex-row justify-between gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="flex flex-row items-center gap-0 text-left">
                                Дата та час описаної події
                                <RequiredStar />
                            </label>
                            <div className="flex flex-row gap-5">
                            <input className="border-2 border-yellow-400 outline-none rounded-md 
                            h-[50px] px-5 w-full text-center" placeholder='ДД.ММ.РРРР' />
                            <input className="border-2 border-yellow-400 outline-none rounded-md 
                            h-[50px] px-5 w-full text-center" placeholder='ГГ:ХХ' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between gap-5'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label className="text-left">
                                Наявність чека
                            </label>
                            <div className='w-full flex flex-row gap-0 
                            border-2 border-yellow-400 rounded-md'>
                                <div className="w-1/2 text-center bg-yellow-400 
                                p-3 cursor-pointer">
                                    Так
                                </div>
                                <div className="w-1/2 text-center bg-white
                                p-3 cursor-pointer">
                                    Ні
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <label className='text-left'>
                                Номер чека/замовлення
                            </label>
                            <input className="border-2 border-yellow-400 outline-none rounded-md 
                            h-[50px] px-5" placeholder='№' />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-left">
                            Сума чеку
                        </label>
                        <input className="border-2 border-yellow-400 outline-none rounded-md 
                        h-[50px] px-5 w-full" />
                    </div>
                    <button className="w-full bg-yellow-400 h-[50px] text-center 
                    rounded-md text-black hover:shadow-xl mt-2">
                        Прикріпити файл
                    </button>
                    <input type="file" className="opacity-0" />
                    
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <input type="checkbox" className="w-[20px] h-[20px] 
                border-2 border-yellow-400 rounded-md" />
                <label className="text-xl">
                    Я даю {" "}
                    <Link href="https://ukraine.mcdonalds.ua/media/docs/Personal_Data_Permission.pdf"
                    className='text-blue-300'>
                        згоду
                    </Link>
                    {" "}
                    на обробку та використання моїх персональних даних
                </label>
            </div>
        </form>
    </div>
  )
}

