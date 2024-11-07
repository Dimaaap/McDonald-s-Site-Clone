import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { VacanciesRouter } from '@/store'

export const CareerMainSection = () => {
  return (
    <div className="p-12 flex flex-col text-center">
      <h1 className="text-4xl font-extrabold">
        Кар’єра в МакДональдз
      </h1>
      <div className="mt-5">
        <Image src="/career-hero.jpeg" 
        alt="carrer" width={800} height={800}
        className="w-full" />
      </div>
      <div className="text-left flex flex-col gap-3 mt-5">
        <p>
            Хочеш працювати в компанії, де кожен день 
            сповнений новими можливостями? «МакДональдз» — 
            це не просто місце, де можна смачно поїсти, а й 
            команда людей, що створює незабутні враження для 
            клієнтів і знаходить друзів серед колег.
        </p>
        <p className="font-extrabold">
            Що ми пропонуємо:
        </p>
        <ul className="ml-10 list-disc">
            <li className="mb-3">
                <span className="font-extrabold">
                    Гнучкий графік:
                </span> {" "}
                Працюй тоді, коли тобі зручно! Навчання, хобі, відпочинок — 
                у тебе завжди буде час на те, що важливо.
            </li>
            <li className="mb-3">
                <span className="font-extrabold">
                    Підтримку та турботу:
                </span> {" "}
                Окрім стабільної зарплати та бонусів, ти отримаєш доступ 
                до психологічної підтримки, курсів англійської мови, 
                можливість підключити медичне страхуваннята багато іншого.
            </li>
            <li className="mb-3">
                <span className="font-extrabold">
                    Дружню атмосферу:
                </span> {" "}
                Тут колеги швидко стають друзями. Разом вирішуємо робочі 
                завдання, а після роботи — весело проводимо час.
            </li>
            <li className="mb-3">
                <span className="font-extrabold">
                    Навчання та розвиток:
                </span> {" "}
                У «МакДональдз» ти зможеш розвиватися й зростати.
                Ми пропонуємо курси, тренінги та багато можливостей для саморозвитку.
            </li>
            <li className="mb-3">
                <span className="font-extrabold">
                    Швидке кар'єрне зростання:
                </span>
                99% наших директорів ресторанів починали свій шлях із посади 
                працівника. І ти теж можеш досягти такого успіху!
            </li>
        </ul>
        <p className="font-extrabold">
            Ми відкриті для всіх!
        </p>
        <p>
            Неважливо, хто ти та який у тебе досвід — ми готові навчити 
            всього, що потрібно. Ти будеш частиною компанії, що цінує людей і 
            працює в Україні для українців.
        </p>
        <p>
            Залишай відгук на вакансію і роби свої перші кроки в «МакДональдз» 
            вже сьогодні!
        </p>
        <div className="flex flex-row gap-[10%] my-5 max-w-[40%] ml-[35%]">
            <Link href={ VacanciesRouter.RESTAURANT_VACANCY }
            className="bg-yellow-400 text-black p-4 rounded-md 
            hover:bg-yellow-500">
                Робота в ресторані
            </Link>
            <Link href={ VacanciesRouter.OFFICE_VACANCY } 
            className="bg-yellow-400 text-black p-4 rounded-md 
            hover:bg-yellow-500">
                Робота в офісі
            </Link>
        </div>
      </div>
    </div>
  )
}

