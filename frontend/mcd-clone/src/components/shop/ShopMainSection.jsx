"use client"

import React, { useState } from 'react'
import { AnimationTriangles } from '../shared'
import { PresentsSection, TimeForFamilies, WhyImportantSection, Advantages } from '.'

export const ShopMainSection = () => {
    const [ isMoreText, setIsMoreText ] = useState(false)


    const handleShowMoreClick = () => {
        if(isMoreText){
            setIsMoreText(false)
        } else {
            setIsMoreText(true)
        }
    }

  return (
    <div>
        <div className="w-full h-screen flex flex-row">
            <div className="w-1/2 bg-blue-500/90 px-3 py-12 flex flex-col gap-5 
            relative overflow-hidden
            text-left">
                <AnimationTriangles />
                <div className="flex flex-col gap-3 z-10">
                    <h1 className="text-4xl font-extrabold text-yellow-400">
                        #ГодиниДляРодини
                    </h1>
                    <h1 className="text-2xl text-white">
                        Онлайн-магазин безцінних товарів
                    </h1>    
                </div>
                <p className='text-white'>
                    Можливість бути поруч — найцінніша для родини, яка фактично 
                    живе у лікарні, піклуючись про малюка. Однак той, хто хоч 
                    раз провів із дитиною безсонну ніч у палаті, знає, як це 
                    непросто — щодня знаходити сили для боротьби. Тому в 
                    дитячих лікарнях по всій Україні ми облаштовуємо Сімейні 
                    Кімнати: щоб родини могли бути разом.
                </p>
                { isMoreText && (
                    <>
                        <p className='text-white'>
                        Для родин перебування в Сімейних Кімнатах безкоштовне. Однак Фундація 
                        витрачає за добу 18000 гривень на їх утримання в п’яти лікарнях. Якщо простіше: 
                        близько 12 гривень за хвилину. Ми робимо це для того, аби у батьків був час 
                        відпочити, інколи вперше за багато днів. Час погратися з малюком. Час 
                        відчути підтримку.
                        </p>
                        <p className='text-white'>
                            Цей час, який ви можете подарувати їм, — безцінний, бо лікує. І щоб він 
                            був у родин, нам із вами час допомагати.
                        </p>
                    </>
                ) }
                <button className="text-white font-extrabold rounded-lg 
                bg-red-600 hover:bg-red-700 p-3 max-w-[30%] text-center cursor-pointer z-10"
                onClick={() => handleShowMoreClick()}>
                    Дізнатись більше
                </button>
            </div>
            <div className={`w-1/2 
            bg-[url('https://shop.rmhc.org.ua/wp-content/uploads/2020/04/bg1-photo.png')]
            bg-center bg-cover bg-no-repeat`} />
        </div>
        <PresentsSection />
        <TimeForFamilies />
        <WhyImportantSection />
        <Advantages />
    </div>
  )
}

