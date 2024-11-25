import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { LuHardDriveUpload } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";

export const ReportsMainSection = () => {
  return (
    <div>
      <div className="w-full h-screen 
      bg-[url('https://rmhc.org.ua/wp-content/uploads/photo_2023-02-15_08-55-58-1.jpg')]
      bg-center bg-cover bg-no-repeat" />
      <div className="p-[5%] flex flex-col gap-5">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold text-blue-300">
            Звіти
          </h1>
          <p className="text-2xl font-bold text-blue-400">
            Досконалість і прозорість – наші цінності
          </p>
        </div>
        <p className="text-xl">
          Ми надаємо послуги найвищої якості прозоро, чесно, зі співчуттям і 
          з усією любов’ю та професіоналізмом нашої команди. Ми завжди 
          дотримуємося міжнародних стандартів благодійних організацій. 
          Будь ласка, ознайомтеся з результатами діяльності Фундації за 2023 рік.
        </p>
        <div className="justify-center flex flex-col gap-3">
          <Link href="https://rmhc.org.ua/wp-content/uploads/Richnyi_zvit_2023.pdf"
          className="m-auto">
            <LuHardDriveUpload size={50} className="text-blue-400 hover:text-blue-500" />
          </Link>
          <Link href="https://rmhc.org.ua/zvit_2023/" className="m-auto">
            <IoEyeOutline size={50} className='text-blue-400 hover:text-blue-500' />
          </Link>
          <Image src="https://rmhc.org.ua/wp-content/uploads/zvit_2023.png" alt="" 
          width={400} height={400} className="m-auto h-[100vh] mt-5"/>
        </div>
      </div>
      <div className="w-[90%] m-auto bg-blue-600/70 text-center py-[1%] 
      text-white font-bold text-2xl">
        Річні звіти
      </div>
      <div className="p-[5%] mt-5 grid grid-cols-4 gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between bg-blue-50 px-5 py-3">
            <div className="w-1/2 flex flex-col gap-3">
              <h1 className="text-2xl font-bold">
                Звіт
              </h1>
              <h1 className="text-2xl font-bold">
                2022
              </h1>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <Link href="https://rmhc.org.ua/wp-content/uploads/RMHC-in-Ukraine_report-2022-ua.pdf"
              className="m-auto">
                <LuHardDriveUpload size={30} className="text-blue-400 
                hover:text-blue-500" />
              </Link>
              <Link href="https://rmhc.org.ua/50-rokiv/zvit-2022/" className="m-auto">
                <IoEyeOutline size={30} className='text-blue-400 
                hover:text-blue-500' />
              </Link>
            </div>
          </div>
          <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%B7%D0%B2%D1%96%D1%82-%D1%83%D0%BA%D1%80-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-690x986-1.jpg"
          alt="" width={400} height={400} className="w-full max-h-[70vh] min-h-[50vh]" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between bg-blue-50 px-5 py-3">
            <div className="w-1/2 flex flex-col gap-3">
              <h1 className="text-2xl font-bold">
                Звіт
              </h1>
              <h1 className="text-2xl font-bold">
                2021
              </h1>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <Link href="https://rmhc.org.ua/wp-content/uploads/2021-RMHC-annual-report-1.pdf"
              className="m-auto">
                <LuHardDriveUpload size={30} className="text-blue-400 
                hover:text-blue-500" />
              </Link>
              <Link href="https://rmhc.org.ua/zvit-2021/" className="m-auto">
                <IoEyeOutline size={30} className='text-blue-400 
                hover:text-blue-500' />
              </Link>
            </div>
          </div>
          <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%B7%D0%B2%D1%96%D1%82-21.jpg"
          alt="" width={400} height={400} className="w-full max-h-[70vh] min-h-[50vh]" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between bg-blue-50 px-5 py-3">
            <div className="w-1/2 flex flex-col gap-3">
              <h1 className="text-2xl font-bold">
                Звіт
              </h1>
              <h1 className="text-2xl font-bold">
                2020
              </h1>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <Link href="https://rmhc.org.ua/wp-content/uploads/2020-RMHC-annual-report-2020-final.pdf"
              className="m-auto">
                <LuHardDriveUpload size={30} className="text-blue-400 
                hover:text-blue-500" />
              </Link>
            </div>
          </div>
          <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%97%D0%B2%D1%96%D1%82-2020-%D1%80%D0%BE%D0%BA%D1%83.jpg"
          alt="" width={400} height={400} className="w-full max-h-[70vh] min-h-[50vh]" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between bg-blue-50 px-5 py-3">
            <div className="w-1/2 flex flex-col gap-3">
              <h1 className="text-2xl font-bold">
                Звіт
              </h1>
              <h1 className="text-2xl font-bold">
                2019
              </h1>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <Link href="https://rmhc.org.ua/wp-content/uploads/2019-RMHC-annual-report-2019.pdf"
              className="m-auto">
                <LuHardDriveUpload size={30} className="text-blue-400 
                hover:text-blue-500" />
              </Link>
            </div>
          </div>
          <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%B7%D0%B2%D1%96%D1%82-2019-%D1%80%D0%BE%D0%BA%D1%83.jpg"
          alt="" width={400} height={400} className="w-full max-h-[70vh] min-h-[50vh]" />
        </div>
      </div>
      <div className="w-[90%] m-auto bg-blue-600/70 text-center py-[1%] 
      text-white font-bold text-2xl">
        Щомісячні звіти 2024 року
      </div>
      <div className="p-[5%] mt-5 grid grid-cols-4 gap-5">
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Липень</h1>
              <h1>2024</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_lypen_2024.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Квітень</h1>
              <h1>2024</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_kviten_2024.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Червень</h1>
              <h1>2024</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_cherven_2024.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Березень</h1>
              <h1>2024</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_berezen_2024.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Травень</h1>
              <h1>2024</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_traven_-2024.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Лютий</h1>
              <h1>2024</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/Zvit_lutyi_2024.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative 
        h-[50%] mt-[31%]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Січень</h1>
              <h1>2024</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_sichen_2024.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[90%] m-auto bg-blue-600/70 text-center py-[1%] 
      text-white font-bold text-2xl">
        Щомісячні звіти 2023 року
      </div>
      <div className="p-[5%] mt-5 grid grid-cols-4 gap-5">
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Грудень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_gruden-2023.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Серпень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_serpen23.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Квітень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_may-2023.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Листопад</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_lystopad23.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Липень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/Zvit_lypen-2023.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Березень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_match2023_ua.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Жовтень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_zhovten23.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Червень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_cherven-2023.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Лютий</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_2023_february_ua.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Вересень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_veresen23-1.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Травень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_traven-2023.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Січень</h1>
              <h1>2023</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_sich_ua.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[90%] m-auto bg-blue-600/70 text-center py-[1%] 
      text-white font-bold text-2xl">
        Щомісячні звіти 2022 року
      </div>
      <div className="p-[5%] mt-5 grid grid-cols-4 gap-5">
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Грудень</h1>
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_gruden_22-1.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Серпень</h1>
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvir_serpen_22.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Листопад</h1>
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvot_nov_ua.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Липень</h1>
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_lupen_22.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Жовтень</h1>
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_oct_ua.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Червень</h1>
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_june_ua.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Вересень</h1>
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/zvit_sept_ua.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>Травень</h1>
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/911407bd-march-may-2022-1.jpg">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[90%] m-auto bg-blue-600/70 text-center py-[1%] 
      text-white font-bold text-2xl">
        Фінансові звіти
      </div>
      <div className="p-[5%] mt-5 grid grid-cols-4 gap-5">
        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>2023</h1> 
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/Finansovyy-zvit-FDRM-v-Ukrayini_2023.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>2019 </h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/finansovyi-zvit-2019_UK.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>

        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>2022</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/finansovyi-zvit-2022.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>2018</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/financial_zvit_2018_UK.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>

        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>2021</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/finansovyi-zvit-2021.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>2016-2017</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/RMHC-Cash-Statement_2017_ua.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>

        <div className="bg-blue-50 flex flex-col gap-5 px-[5%] py-[3%] max-h-[50%] 
        relative">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 font-bold text-lg">
              <h1>2020</h1>
            </div>
            <Link className="m-auto absolute right-10" 
            href="https://rmhc.org.ua/wp-content/uploads/Audit-2020-UKR.pdf">
              <LuHardDriveUpload size={ 30 } className="text-blue-400 
              hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
