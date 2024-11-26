import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const McDonaldHouseMainSection = () => {
  return (
    <div className="flex flex-col gap-5">
        <div className="w-full h-screen bg-[url('https://rmhc.org.ua/wp-content/uploads/dim-1200x600.jpg')]
        bg-center bg-cover bg-no-repeat" />
        <div className="text-center p-[5%] flex flex-col gap-5">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Дім Рональда МакДональда
            </h1>
            <p className="font-bold text-xl">
                Затишок і турбота для важкохворих дітей і їхніх родин
            </p>
            <Link href="#" className="flex flex-row items-center 
            bg-red-600 hover:bg-red-700 text-white font-bold text-[1.1rem]
            gap-3 max-w-[30%] rounded-md px-[4%] py-[1%] text-center m-auto">
                Підтримати внеском
                <Heart size={20} />
            </Link>
        </div>
        <div className="p-[5%] flex flex-row gap-5">
            <div className="w-1/2">
                <p className="text-xl">
                    Уперше в Україні ми плануємо будівництво наймасштабнішої програми Фундації — 
                    Дому Рональда Макдональда. Це буде безкоштовний простір на 50 окремих кімнат 
                    для проживання важкохворих дітей і їхніх родин на території найбільшої дитячої 
                    лікарні України — «Охматдит». Ми називаємо цю програму «дім поза домом», адже він 
                    забезпечить сім’ї всіма зручностями, які дарує нам рідна домівка, а також 
                    співчуттям та підтримкою команди Фундації, волонтерів та інших сімей. 
                    У будинку родини з хворими дітьми зможуть проживати у комфортабельних 
                    спальнях скільки буде потрібно для одужання дитини, користуватися сучасною кухнею, 
                    ігровою кімнатою, бібліотекою, у підвальному приміщенні буде облаштовано укриття. 
                    Родини можуть задовольнити всі базові потреби, щоб мати змогу зосередитися на 
                    головному — одужанні своєї хворої дитини. Все це в декількох кроках від лікарні. 
                    Дім Рональда Макдональда особливо допоможе сім’ям, які привезли хвору малечу з 
                    іншого міста чи села та не можуть дозволити собі дороговартісне тимчасове житло в 
                    Києві.
                </p>
            </div>
            <div className="w-1/2 bg-blue-50 rounded-md px-[4%] py-[3%] h-[50%]">
                <p className="text-xl">
                    У всьому світі завдяки меценатам збудовано та утримуються майже 400 таких програм, 
                    з них 100 у Європі. Ця програма доступна в кожній сусідній країні: 12 програм у 
                    Нідерландах, 10 у Франції, 3 у Польщі. В Україні вона стане першою.
                </p>
            </div>
        </div>

        <div className="p-[5%] grid grid-cols-4 gap-[10%]">
            <div className="flex flex-col gap-2 text-center">
                <Image src="https://rmhc.org.ua/wp-content/uploads/RMHouse-program.png" alt=""
                width={200} height={200} className="" />
                <p>Більше 3 500 м2</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <Image src="https://rmhc.org.ua/wp-content/uploads/private-bedrooms.png" alt=""
                width={200} height={200} className="w-full" />
                <p>50 окремих кімнат</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <Image src="https://rmhc.org.ua/wp-content/uploads/families.png" alt=""
                width={200} height={200} className="w-full" />
                <p>36 000 ночівель для родин щороку</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
                <Image src="https://rmhc.org.ua/wp-content/uploads/Run-for-RMHC-event-graphic.png" alt=""
                width={200} height={200} className="w-full" />
                <p>2026 рік – початок програми</p>
            </div>
        </div>
        
        <div className="p-[5%]">
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/ZWo_RCKzxv8?si=8_EN2ON3xrvxRPod" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen className="w-full h-screen" />
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Кому потрібен Дім Рональда МакДональда
            </h1>
        </div>
        <div className="px-[5%] flex flex-row gap-5">
            <div className="w-1/2 flex flex-col gap-7">
                <Image src="https://rmhc.org.ua/wp-content/uploads/VAS_3271-1024x709.jpg" alt=""
                width={400} height={400} className="w-full" />
                <p className="text-xl text-left">
                    Богдан Султанов з Донеччини, що за 30 км від Бахмута. У хлопчика серйозний 
                    діагноз: ДЦП, спастичний парапарез нижніх кінцівок і приглухуватість 4 ступеня.
                    Ще у нього з дитсадка є страх, що його залишать, тому мама й тато завжди з ним. 
                    Богдан показує хороші результати, і йому важливо не припиняти проходження 
                    реабілітації. Адже у разі значного покращення, вдасться обійтися без тяжкої
                    операції. Завдяки програмі Дім Рональда МакДональда родина зможе зосередитися на 
                    реабілітації, не витрачаючи кошти на оренді житла.
                </p>
            </div>
            <div className="w-1/2 flex flex-col gap-7">
                <Image src="https://rmhc.org.ua/wp-content/uploads/RMHC_DenPizham_-01-2-1024x709.jpg" alt=""
                width={400} height={400} className="w-full" />
                <p className="text-xl text-left">
                    З хворобою родина Міланки зіштовхнулася 2021 року, тоді дівчинці було трохи 
                    більше трьох рочків. У Мілани тромбоцитопенія, яка може з’явитися в будь-якому 
                    віці та в будь-який час зникнути. Лікарі весь час намагаються зʼясувати причину,
                    але це дуже складно. У Мілани часті рецидиви, і коли вони трапляються, 
                    терміново потрібна госпіталізація. У Домі Рональда МакДональда вона зможе жити 
                    з мамою, поки проходитиме реабілітацію в лікарні.
                </p>
            </div>
        </div>

        <div className="px-[5%] m-auto flex flex-row gap-0 w-[60%] mt-5">
            <Link href="#" className="text-white font-bold flex flex-row gap-2 w-1/2 bg-red-600 
            hover:bg-red-700 items-center text-center px-4 py-[2%] justify-center">
                Підтримати внеском
                <Heart size={20} />
            </Link>
            <Link href="#" className="text-white font-bold flex flex-row gap-2 w-1/2 bg-blue-800
            hover:bg-blue-900 items-center px-4 py-[2%] justify-center">
                Пропозиція для партнерів
                <Heart size={20} />
            </Link>
        </div>

        <div className="p-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Переваги програми
            </h1>
        </div>

        <div className="px-[5%] grid grid-cols-4 gap-7">
            <div className="flex flex-col gap-7 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/xFamily-rooms-main-banner-300x200.jpg.pagespeed.ic.2uzc0dg9Lu.webp"
                alt="" width={250} height={250} />
                <p className="text-xl">
                    Більше дітей будуть поруч із родинами під час лікування
                </p>
            </div>
            <div className="flex flex-col gap-7 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/McDonalds_Palm_02954-300x200.jpg"
                alt="" width={250} height={250} />
                <p className="text-xl">
                    Більша кількість сімей по всій країні отримає доступ до критичної медичної допомоги
                </p>
            </div>
            <div className="flex flex-col gap-7 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/1-test-1-300x200.jpg"
                alt="" width={250} height={250} />
                <p className="text-xl">
                    Мільйони гривень зможуть економити українські родини на проживанні та харчуванні
                </p>
            </div>
            <div className="flex flex-col gap-7 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/DSCF6505-300x200.jpg"
                alt="" width={250} height={250} />
                <p className="text-xl">
                    Програми Фундації зменшують стрес для сімей і допомагають лікарні надавати 
                    найкращу допомогу.
                </p>
            </div>
        </div>

        <div className="w-full h-screen bg-[url('https://rmhc.org.ua/wp-content/uploads/photo_2023-02-07_17-05-49-e1677092245589.jpg')]
        bg-center bg-no-repeat bg-cover mt-5" />
    </div>
  )
}

