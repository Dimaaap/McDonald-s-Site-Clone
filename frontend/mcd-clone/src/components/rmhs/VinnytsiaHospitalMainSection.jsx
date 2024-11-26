import React from 'react'
import Image from 'next/image'
import { FaHouse, FaNotesMedical, FaPhone } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { IoMailOpenOutline } from "react-icons/io5";
import { OurThingsBanner } from '.';

export const VinnytsiaHospitalMainSection = () => {
  return (
    <div className="p-[5%] flex flex-col gap-20">
        <div>
            <Image src="https://rmhc.org.ua/wp-content/uploads/DSCF5987-1.jpg"
            alt="" width={800} height={800} className="w-full" />
        </div>

        <div className="flex flex-row gap-[7%] items-center">
            <div className="w-1/2 text-4xl font-extrabold text-blue-300">
                <h1>
                    Сімейна кімната у Вінницькій обласній дитячій 
                    клінічній лікарні
                </h1>
            </div>
            <div className="w-1/2 text-xl font-bold text-left">
                <p>
                    Облаштована у відділенні черепно-лицьової хірургії, 
                    поруч з операційним блоком та онкогематологічним відділенням. 
                    Тут перебувають пацієнти з найважчими діагнозами в лікарні. 
                    Дарує комфорт і відпочинок відвідувачам.
                </p>
            </div>
        </div>

        <div className="bg-blue-50 p-[5%] grid grid-cols-4 gap-x-10 gap-y-7 text-xl 
        font-bold text-blue-300">
          <div className="flex flex-col gap-1 text-center">
              <Image src="/rmhc/house-program.png" alt="" width={100} height={100} className="mx-auto" />
              <p>знаходиться безпосередньо в лікарні</p>
          </div>
          <div className="flex flex-col gap-1 text-center">
              <Image src="/rmhc/sofas.png" alt="" width={100} height={100} className="mx-auto" />
              <p>диван та окремий куток для відпочинку</p>
          </div>
          <div className="flex flex-col gap-1 text-center">
              <Image src="/rmhc/kitchen.png" alt="" width={100} height={100} className="mx-auto" />
              <p>сучасна кухня</p>
          </div>
          <div className="flex flex-col gap-1 text-center">
              <Image src="/rmhc/family.png" alt="" width={100} height={100} className="mx-auto" />
              <p>іграшки та книжки</p>
          </div>
          <div className="flex flex-col gap-1 text-center">
              <Image src="/rmhc/beverages.png" alt="" width={100} height={100} className="mx-auto" />
              <p>безкоштовні гарячі напої, перекуси, вода</p>
          </div>  
          <div className="flex flex-col gap-1 text-center">
              <Image src="/rmhc/laundry.png" alt="" width={100} height={100} className="mx-auto" />
              <p>пральна машина</p>
          </div> 
          <div className="flex flex-col gap-1 text-center">
              <Image src="/rmhc/dental-care.png" alt="" width={100} height={100} className="mx-auto" />
              <p>шафки для збереження речей</p>
          </div>
          <div className="flex flex-col gap-1 text-center">
              <Image src="/rmhc/free-wi-fi.png" alt="" width={100} height={100} className="mx-auto" />
              <p>телевізор та Wi-Fi</p>
          </div> 
        </div>

        <div className="text-center max-w-[50%] m-auto flex flex-col gap-8">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Як нас знайти
            </h1>
            <div className="flex flex-row gap-3 items-center">
                <FaHouse size={70} className="text-blue-300" />
                <p className="text-2xl text-blue-300 font-bold text-left">
                    Вінницька обласна дитяча клінічна лікарня
                </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <FaNotesMedical size={55} className="text-blue-300" />
                <p className="text-2xl text-blue-300 font-bold text-left">
                    м. Вінниця, Хмельницьке шосе, 108
                </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <FaPhone size={55} className="text-blue-300" />
                <p className="text-2xl text-blue-300 font-bold text-left">
                    +380432511270
                </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <CgSandClock size={55} className="text-blue-300" />
                <p className="text-2xl text-blue-300 font-bold text-left">
                    Цілодобово
                </p>
            </div>
            <div className="flex flex-row gap-3 items-center">
                <IoMailOpenOutline size={55} className="text-blue-300" />
                <p className="text-2xl text-blue-300 font-bold text-left">
                    info@rmhc.org.ua
                </p>
            </div>
        </div>

        <OurThingsBanner />
    </div>
  )
}
