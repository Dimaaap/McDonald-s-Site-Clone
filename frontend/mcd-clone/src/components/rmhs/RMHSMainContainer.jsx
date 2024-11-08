"use client"

import Image from 'next/image'
import React from 'react'
import { FoundationBanner, InfoCard, LiLink } from '../shared'
import { CartsRoute, foundationBanners, 
  useFoundationBannerHandler } from '@/store'
import Link from 'next/link'

export const RMHSMainContainer = () => {

  const { currentBanner } = useFoundationBannerHandler()

  return (
    <div className="p-10 flex flex-col gap-5">
      <h1 className="text-4xl font-extrabold text-center">
        Фундація Дім Рональда МакДональда
      </h1>
      <div className="w-full mt-3">
        <Image src="/foundation-hero.jpeg" 
        alt="foundation" width={700} height={700} className="w-full" />
      </div>
      <div className="mt-3 flex flex-col gap-3">
        <h1 className="text-2xl font-extrabold">
          Допомагаємо дітям і їхнім родинам під час війни
        </h1>
        <p>
          У всьому світі Фундація Дім Рональда МакДональда 
          створює й підтримує програми, які покращують 
          здоров’я та благополуччя дітей.
        </p>
        <p>
          У відповідь на проблеми тисяч українських родин, 
          які потерпають від війни, Фундація Дім Рональда 
          МакДональда розгорнула програми допомоги, а саме:
        </p>
        <ul className="ml-10 list-decimal">
          <li>
            Надавала гуманітарну допомогу дитячим лікарням і 
            постраждалим родинам.
          </li>
          <li>
            Передає продуктові набори тим, кому вони зараз 
            життєво необхідні.
          </li>
          <li>
            Закуповує життєво важливе медичне обладнання 
            для лікарень України.
          </li>
        </ul>
        <p>
          Деякі з проєктів Фундації виникли з ініціативи 
          працівників МакДональдз та були підтримані 
          співробітниками компанії, які долучилися 
          до них як волонтери.
        </p>
        <p>
          Наші працівники ефективно займаються перевіркою 
          постачальників і закупівлями, логістикою та 
          проєктним менеджментом в цих ініціативах 
          завдяки досвіду та експертизі, здобутим під 
          час роботи в компанії.
        </p>
        <p>
          Ви також можете долучитися і підтримати програми 
          Фундації Дім Рональда МакДональда донатом. 
          Надіслати свій внесок можна як на сайті 
          Фундації, так і через мобільні застосунки банків. 
          Ви також можете підтримати Фундацію, додавши 
          благодійний внесок 15, 25, 50 або 100 грн до 
          вашого замовлення в відкритих закладах МакДональдз 
          (ПІІ «МакДональдз Юкрейн Лтд» здійснює публічний 
          збір благодійних пожертв від імені Благодійної 
          організації «Фундація Дім Рональда МакДональда в 
          Україні» згідно довіреності {" "}
          <LiLink 
          linkHref="https://www.mcdonalds.com/content/dam/sites/ua/nfl/pdf/impact-strategy/notarial-power-of-attorney.pdf" 
          linkText="довіреності від 09 грудня 2016 року"/> ).
        </p>
        <h1 className="text-2xl font-extrabold">
          Сімейна кімната Рональда МакДональда – це:
        </h1>
        <div className='flex flex-row gap-5 ml-16 mt-12'>
          <InfoCard imageSrc="/rmhc/rmhs-1.jpg" 
          text="місце для відпочинку" />
          <InfoCard imageSrc="/rmhc/rmhs-2.jpg" 
          text="місце для побутових потреб 
              (приготування їжі, прання, гігієна)" />
          <InfoCard imageSrc="/rmhc/rmhs-4.jpg"
          text="місце для гри" />
          <InfoCard imageSrc="/rmhc/rmhs-3.jpg" 
          text="місце для спілкування" />
          <InfoCard imageSrc="/rmhc/rmhs-5.jpg" 
          text="можливість для родини бути поруч, не залишати 
              свою дитину без сімейного тепла й любові 
              під час боротьби з хворобою" />
        </div>
        <h1 className="text-2xl font-extrabold">
          В Україні є п'ять Сімейних Кімнат:
        </h1>
        <FoundationBanner bgImage={foundationBanners[currentBanner - 1].bgImage}
        noticeTitle={foundationBanners[currentBanner - 1].noticeTitle}
        noticeText={foundationBanners[currentBanner - 1].noticeText}/>

        <p>
          Підтримка сімейних кімнат — це наш внесок у 
          розвиток сімейно орієнтованої медицини, що 
          дає змогу залучати до лікування дитини її родину. 
          Оточена любов’ю та батьківським піклуванням, дитина 
          швидше одужує. Батьки стають партнерами лікарів під 
          час лікування: допомагають визначити стан дитини, 
          навчаються надавати потрібну підтримку й забезпечувати 
          догляд після повернення додому.
        </p>
        <Link href={ CartsRoute.FOUNDATION } 
        className='bg-yellow-400 p-4 rounded-md 
        max-w-[15%] text-center hover:bg-yellow-500'>
          Відвідати сайт
        </Link>
      </div>
    </div>
  )
}

