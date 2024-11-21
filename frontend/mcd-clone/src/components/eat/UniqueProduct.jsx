"use client";

import { getUniqueProduct } from '@/fetch';
import { DailyCalories } from '@/store';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { calculateDailyCaloriesPart } from '@/lib';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'

export const UniqueProduct = ({ productId }) => {

  const [productInfo, setProductInfo ] = useState({})
  const [caloriesBlock, setCaloriesBlock] = useState(false);
  const [compoundBlock, setCompoundBlock] = useState(false)

  useEffect(() => {

    const fetchProduct = async () => {
        try{
            const cachedData = localStorage.getItem(`product_${productId}`);
            const cacheTimestamp = localStorage.getItem(`product_${productId}_timestamp`);

            if (cachedData && cacheTimestamp) {
                const isCacheValid = Date.now() - parseInt(cacheTimestamp, 10) < ONE_HOUR;

                if (isCacheValid) {
                    const data = JSON.parse(cachedData);
                    setProductInfo(data);
                    return;
                }
            }
            const prod = await getUniqueProduct(productId);
            setProductInfo(prod);

            localStorage.setItem(`product_${productId}`, JSON.stringify(prod));
            localStorage.setItem(`product_${productId}_timestamp`, Date.now().toString());
        } catch (err) {
            console.error("Error fetching products:", err);
        }
      }
      fetchProduct();
  }, [])

  return (
    <div className="flex flex-col gap-0">
        <div className="flex flex-row gap-[5%] w-full py-[20%] px-[10%] items-center">
          <div className="w-3/5">
            <Image src={ productInfo.image ? productInfo.image : null } 
            alt={ productInfo.title } 
            width={ 500 } height={ 500 } />
          </div> 
          <div className="w-2/5 text-left">
            <h1 className="text-5xl font-extrabold">
              { productInfo.title }
            </h1>
            <div className="flex flex-row gap-3 mt-7 text-2xl">
              <p>
                { productInfo.weight ? productInfo.weight : productInfo.volume } г/g
              </p>
              <p>|</p>
              <p>
                { productInfo.calories } ккал/kcal
              </p>
            </div>
            <div className="mt-7 text-lg">
              { productInfo.description }
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col gap-2">
          <div className="text-4xl font-extrabold text-center w-full px-[10%] py-[7%]">
            Поживна цінність
          </div>
          <div className="flex flex-col gap-0 w-[70%] m-auto -mt-20">
            <div className='flex flex-col
            w-full border-y border-gray-300 
            cursor-pointer'>
              <div className="flex flex-row justify-between items-center"
                onClick={() => setCaloriesBlock(!caloriesBlock)}>
                <h1 className="text-2xl font-extrabold py-5">
                  Поживна цінність та вміст поживних речовин
                </h1>
                { caloriesBlock ? 
                <ChevronUp size={40} className="text-red-600" /> : 
                <ChevronDown size={ 40 } className="text-red-600" />}
              </div>
              { caloriesBlock && (
                <div className="flex flex-col gap-7">
                <div className='grid grid-cols-4 gap-7 mt-5'>
                  <div className="flex flex-col gap-1 max-w-1/4 mb-5">
                    <h1 className="text-3xl">
                      { productInfo.calories } <b>ккал</b>/kcal
                    </h1>
                    <p className="m-auto">
                      Калорійність ({calculateDailyCaloriesPart(productInfo.calories, DailyCalories.DAILY_DIET)}% DV)
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 max-w-1/4 mb-5">
                    <h1 className="text-3xl text-center">
                      { productInfo.fats } <b>г</b>/g
                    </h1>
                    <p className="m-auto">
                      Жири ({calculateDailyCaloriesPart(productInfo.fats, DailyCalories.DAILY_FATS)}% DV)
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 max-w-1/4 mb-5">
                    <h1 className="text-3xl text-center">
                      { productInfo.carbonhydrates } <b>г</b>/g
                    </h1>
                    <p className="m-auto">
                      Вуглеводи ({calculateDailyCaloriesPart(productInfo.carbonhydrates, 
                        DailyCalories.DAILY_CARBONHYDRATES)}% DV)
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 max-w-1/4 mb-5">
                    <h1 className="text-3xl text-center">
                      { productInfo.proteins } <b>г</b>/g
                    </h1>
                    <p className="m-auto">
                      Білки ({calculateDailyCaloriesPart(productInfo.proteins, 
                        DailyCalories.DAILY_PROTEINS)}% DV)
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-0 max-w-1/2 mb-5">
                  <div className="flex flex-row gap-10">
                    <div className="border-b border-dashed py-3 flex 
                    flex-row justify-between items-center w-1/4">
                        <p>НЖК:</p>
                        <p className="text-right">
                        0г/g (0 % DV) N/Aг/g per100g
                        </p>
                    </div>
                    <div className="border-b border-dashed py-3 flex 
                    flex-row justify-between items-center w-1/4">
                        <p>Сіль:</p>
                        <p className="text-right">
                          { productInfo.sault }г/g (0 % DV) N/Aг/g per100g
                        </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-10">
                    <div className="border-b border-dashed py-3 flex 
                    flex-row justify-between items-center w-1/4">
                        <p>Цукор:</p>
                        <p className="text-right">
                          { productInfo.sugar }г/g ({calculateDailyCaloriesPart(productInfo.sugar, 
                            DailyCalories.DAILY_SUGAR)}% DV) N/Aг/g per100g
                        </p>
                    </div>
                    <div className="border-b border-dashed py-3 flex 
                    flex-row justify-between items-center w-1/4">
                        <p>Порція:</p>
                        <p className="text-right">
                          { productInfo.weight ? productInfo.weight : productInfo.volume }г/g (0 % DV) N/Aг/g per100g
                        </p>
                    </div>
                  </div>
                </div>
                <div className="px-[3%] mb-5">
                  <p className="text-[0.9rem]">
                    * RI (Reference intake) - середня референсна величина добового 
                    споживання для осіб старше 18 років (8400кДж/2000ккал).
                  </p>
                </div>
              </div>
              ) }
            </div>
            <div className='flex flex-col
            w-full border-y border-gray-300 
            cursor-pointer' onClick={() => setCompoundBlock(!compoundBlock)}>
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-extrabold py-5">
                  Склад та алергени
                </h1>
                { compoundBlock ? 
                <ChevronUp size={40} className="text-red-600" /> : 
                <ChevronDown size={ 40 } className="text-red-600" />} 
              </div>
              { compoundBlock && (
                <div className="py-[3%] flex flex-col gap-5">
                { productInfo.compound && (
                  <p>
                    ІНГРЕДІЄНТИ: { productInfo.compound }
                  </p>
                ) }
                { productInfo.alergens && (
                  <p>
                    МІСТИТЬ: { productInfo.alergens }
                  </p>
                ) }
                </div>
              ) }
            </div>
          </div>
          <div className="text-4xl font-extrabold w-full px-[10%] py-[7%] 
          mt-10">
            <div className="text-center">
              СУПУТНІ ТОВАРИ 
            </div>
          </div>
        </div>
        <div className="bg-white text-[0.8rem] px-[10%] py-[7%]">
          <small>
            <i>
              Ми виробляємо свою їжу на кухнях, де люди працюють з алергенами, 
              і де обладнання та посуд використовуються для декількох пунктів 
              меню, включаючи ті, що містять алергени. 
            </i> {" "}
            Хоча ваша їжа готується обережно, через поводження з алергенами 
            на нашій кухні, ми не можемо гарантувати, що вона буде без алергенів, 
            навіть після того, як інгредієнти будуть видалені за бажанням. 
            Хоча в перерахованих продуктах немає горіхів чи арахісових 
            інгредієнтів, ми не можемо гарантувати, що наша їжа повністю 
            не містить горіхів чи арахісу.
          </small>
        </div>
    </div>
  )
}

