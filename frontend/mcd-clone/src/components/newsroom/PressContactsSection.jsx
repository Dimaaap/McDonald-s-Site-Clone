import Link from 'next/link'
import React from 'react'

export const PressContactsSection = () => {
  return (
    <div className="flex flex-col gap-5 px-5 py-[5%]">
      <h1 className="text-center font-extrabold text-4xl">
        Контакти для ЗМІ
      </h1>
      <ul className="ml-[2%] list-disc">
        <li>
            Маєте питання або вам потрібна додаткова інформація?
        </li>
        <li>
            Хочете надіслати запит на коментар?
        </li>
        <li>
            Бажаєте долучитися до нашої прес-розсилки?
        </li>
        <li>
            Маєте пропозицію співпраці?
        </li>
      </ul>
      <p>
        Ви можете звернутися до пресслужби нашої компанії за адресою {" "}
        <Link href="mailto:pr@ua.mcd.com" className="text-blue-400 underline 
        hover:text-blue-500">
            pr@ua.mcd.com
        </Link>. {" "}
        Ми будемо раді відповісти на ваш запит!
      </p>
    </div>
  )
}
