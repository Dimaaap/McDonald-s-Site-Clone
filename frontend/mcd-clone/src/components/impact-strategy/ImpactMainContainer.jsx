import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { LiLink } from '../shared'

export const ImpactMainContainer = () => {
  return (
    <div className="text-center flex flex-col gap-5 p-10">
      <h1 className="text-4xl font-extrabold">
        Стратегія впливу
      </h1>
      <div className="w-full mt-5 ">
        <Image src="/impact-strategy-hero.jpeg" 
        alt="impact-strategy" 
        width={800} height={800} className="w-full" />
      </div>
      <div className="text-left flex flex-col gap-5">
        <h1 className="text-2xl font-extrabold">
            Ми тут - до ваших послуг
        </h1>
        <p>
            Ще ніколи громади не були такими важливими. 
            А McDonald’s завжди там – де громада. До 
            нас звертаються у пошуку роботи, коли опиняються 
            в незнайомому місті, коли потребують затишного 
            куточку й гарячої страви.
        </p>
        <p>
            Ми не просто обслуговуємо відвідувачів, частуючи 
            їх Біг-Маками, ми віддано служимо нашим працівникам, 
            клієнтам, партнерам, постачальникам і кожному із 
            громади, хто до нас причетний. Тому зараз, 
            коли українці як ніколи потребують підтримки, 
            ми зі ще більшою силою працюємо, щоб допомогти громадам.
        </p>
        <p>
            З першого дня повномасштабної війни на потреби 
            населення ми передали більше 700 тонн продукції 
            на понад 130 мільйонів гривень, працівники 
            МакДональдз разом із Фундацією Дім Рональда МакДональда 
            започаткували програми підтримки сімей і лікарень, 
            які постраждали через війну. Наші працівники 
            активно волонтерять в програмах Фундації, 
            використовуючи для цього увесь свій досвід та 
            експертизу, здобуту в МакДональдз.
        </p>
        <p>
            Ми беремо на себе зобов’язання, що забезпечать 
            підтримку наших громад у складний час тепер і в 
            майбутньому. Ми працюємо, аби потішити українців 
            улюбленими стравами, аби підтримати наших 
            працівників і партнерів, аби працювати, щоб 
            сплачувати податки і підтримувати економіку країни.
        </p>
        <p>
            Дивлячись у майбутнє, ми маємо амбіцію зробити 
            значно більше. З цієї причини ми продовжуємо 
            зосереджувати зусилля на чотирьох напрямах:
        </p>
        <ul className="ml-10 list-disc">
            <li>
                <LiLink linkHref="/quality_and_hygiene"
                linkText="Якість їжі і джерела постачання" />
                ;
            </li>
            <li>
                Збереження нашої планети;
            </li>
            <li>
                Підтримка громад;
            </li>
            <li>
                Робоча місця, рівність та розширення можливостей;
            </li>
        </ul>
      </div>
      <div className="flex flex-row mt-5 gap-5 mb-10">
        <div className="flex flex-col w-1/3 gap-3 h-[85vh] text-left">
            <Image className="w-full" alt="" src="/ronald-mcdonald-foundation.jpeg"
            width={200} height={200} />
            <h1 className="text-2xl font-extrabold mt-2">
                Фундація Дім Рональда МакДональда
            </h1>
            <p className="mt-2 min-h-[25vh]">
                Присутність батьків у лікарні допомагає дітям 
                успішніше боротися з хворобою. З підтримкою 
                рідних нам усе вдається краще. Тільки рідні 
                можуть дати тепло та відчуття безпеки.
            </p>
            <Link href="#" 
            className="bg-yellow-400 text-center p-3 rounded-md 
            hover:bg-yellow-500 max-w-[50%]">
                Дізнатись більше
            </Link>
        </div>
        <div className="flex flex-col w-1/3 gap-3 h-[85vh] text-left">
            <Image className="w-full" alt="" 
            src="/recycling.jpeg"
            width={200} height={200} />
            <h1 className="text-2xl font-extrabold mt-2">
                Збереження планети для нас у пріоритеті
            </h1>
            <p className="mt-2 min-h-[25vh]">
                Ми виступаємо рушійною силою із захисту клімату 
                та навколишнього середовища й прискорюємо 
                провадження рішень із багаторазового використання. 
                Тому, що вважаємо нашим обов’язком берегти 
                планету на благо нинішніх і майбутніх громад.
            </p>
            <Link href="#" 
            className="bg-yellow-400 text-center p-3 rounded-md 
            hover:bg-yellow-500 max-w-[50%]">
                Дізнатись більше
            </Link>
        </div>
        <div className="flex flex-col w-1/3 gap-3 h-[85vh] text-left">
            <Image className="w-full" alt="" 
            src="/work_places.jpeg"
            width={200} height={200} />
            <h1 className="text-2xl font-extrabold mt-2">
                Робочі місця, рівність та розширення можливостей
            </h1>
            <p className="mt-2 min-h-[25vh]">
                Ми створюємо можливості для навчання та здобуття 
                професійних навичок у громадах, де працюємо, – 
                через посилення рівності та причетності до 
                всього нашого бізнесу.
            </p>
            <Link href="#" 
            className="bg-yellow-400 text-center p-3 rounded-md 
            hover:bg-yellow-500 max-w-[50%]">
                Дізнатись більше
            </Link>
        </div>
      </div>
    </div>
  )
}

