import Link from "next/link"
import { MainFooter, Slider, BottomFooter } from "."
import { HowToJoinRouter } from "@/store"
import { Heart } from "lucide-react"
import Image from "next/image"
import { OurAchievements, OurImpactCart, WhatFamilySayCart } from "../shared"


export const RMHSMainPage = () => {

  return (
    <div className="mt-[10%]">
      <Slider />
      <div className="flex flex-row justify-between gap-12 px-[5%] py-[2%]">
        <div className="flex flex-col gap-10 w-3/5">
          <p className="text-[1.3rem]">
            Наша мрія — щасливі й здорові діти. Ми віримо у силу підтримки, 
            любові й тепла, які дарують нам рідні поруч. Наша стрижнева програма — 
            Сімейна кімната Рональда МакДональда — допомогла вже тисячам родин 
            бути поруч у лікарнях, коли їхня дитина хворіла. З 2016 року ми 
            відкрили 6 Сімейних кімнат у найбільших дитячих лікарнях країни. 
            А в цей складний для України час ми також започаткували гуманітарні 
            програми підтримки сім’ям і дитячим лікарням, що потерпають від війни.
          </p>
          <div className="flex flex-row justify-between items-center gap-10">
            <Link href={ HowToJoinRouter.DONATE } 
            className="flex flex-row gap-3 items-center px-5 py-3 rounded-md 
            bg-red-500 text-white font-bold hover:bg-red-600">
              Зробити внесок
              <Heart size={ 20 } />
            </Link>
            <Link href={ HowToJoinRouter.BECOME_PARTNER } 
            className="px-5 py-3 rounded-md 
            bg-blue-800 text-white font-bold hover:bg-blue-900">
              Стати партнером
            </Link>
          </div>
        </div>
        <div className="w-2/5">
          <Image src="https://rmhc.org.ua/wp-content/uploads/xDSC_4934-1.jpg.pagespeed.ic.KCeeazLRg5.webp" 
          alt="Our Aim is Help" width={ 350 } height={ 350 } />
        </div>
      </div>
      <div className="px-[5%] py-[2%] bg-blue-50 grid grid-cols-3 gap-[5%]">
        <div className="flex flex-col gap-5">
          <Image src="https://rmhc.org.ua/wp-content/uploads/Family-rooms-main-banner-300x200.jpg" 
          alt="" width={300} height={300} />
          <div className="flex flex-col gap-5">
            <h1 className="text-blue-400 text-2xl font-bold">
              Сімейна кімната Рональда МакДональда
            </h1>
            <p className="text-[1.1rem] min-h-[200px]">
              У Сімейних кімнатах у лікарнях родини можуть відпочити, поїсти, 
              приділити час дитині. Головне, що дають кімнати, — це можливість 
              бути поруч, не залишати хвору малечу без сімейного тепла й любові. 
              Тут панує затишок і турбота. А ще народжується сила, здатна подолати 
              негаразди.
            </p>
            <Link href="#" className="px-5 py-2 rounded-md 
            bg-blue-800 hover:bg-blue-900 text-white font-bold 
            max-w-[60%] text-center">
              Дізнатись більше
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image src="https://rmhc.org.ua/wp-content/uploads/Main-banner-1-300x200.jpg" 
          alt="" width={300} height={300} />
          <div className="flex flex-col gap-5">
            <h1 className="text-blue-400 text-2xl font-bold">
              Дім Рональда МакДональда
            </h1>
            <p className="text-[1.1rem] min-h-[250px]">
              Це будинок для сімей важкохворих дітей, що лікуються далеко від дому. 
              Будівництво заплановане на території найбільшої дитячої лікарні 
              НДСЛ «ОХМАТДИТ». Програма допоможе тисячам родин бути поруч з 
              дітьми під час лікування і зекономити їм мільйони гривень на 
              проживанні й харчуванні.
            </p>
            <Link href="#" className="px-5 py-2 rounded-md 
            bg-blue-800 hover:bg-blue-900 text-white font-bold 
            max-w-[60%] text-center">
              Дізнатись більше
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image src="https://rmhc.org.ua/wp-content/uploads/0126-%E2%80%93-%D0%BA%D0%BE%D0%BF%D1%96%D1%8F-1-e1674607963972-300x199.jpg" 
          alt="" width={300} height={300} />
          <div className="flex flex-col gap-5">
            <h1 className="text-blue-400 text-2xl font-bold">
            Розвиток сімейно-орієнтованої медицини
            </h1>
            <p className="text-[1.1rem] min-h-[220px]">
              Фундація долучається до змін у системі охорони здоров’я 
              та розвиває сімейно орієнтовану медицину в Україні. 
              Ми допомагаємо впроваджувати найкращі світові практики задля 
              здоров’я наших дітей.
            </p>
            <Link href="#" className="px-5 py-2 rounded-md 
            bg-blue-800 hover:bg-blue-900 text-white font-bold 
            max-w-[60%] text-center">
              Дізнатись більше
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://rmhc.org.ua/wp-content/uploads/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA1-1.png?id=12439')] 
      bg-cover bg-no-repeat bg-center h-screen w-full relative">
        <div className="text-white absolute max-w-[40%] right-5 top-[20%]
        flex flex-col gap-5">
          <h1 className="text-4xl font-light">
            Підтримуйте родини, коли вони цього найбільше потребують! 
          </h1>
          <p className="text-2xl font-bold">
            Ваші благодійні внески допомагають сім’ям бути разом у 
            лікарнях або отримувати важливу гуманітарну підтримку. 
          </p>
          <Link href="#" className="bg-red-600 hover:bg-red-700 text-white 
          font-bold flex flex-row gap-2 items-center max-w-[40%] px-5 py-4 rounded-md 
          text-center">
            Зробити внесок
            <Heart size={ 25 } />
          </Link>
        </div>
      </div>
      <div className="px-[5%] py-[2%] flex flex-col gap-10 mt-7">
        <div className='text-center'>
          <h1 className="text-4xl font-extrabold text-blue-300">
            Наш вплив
          </h1>
          <div className="grid grid-cols-4 gap-x-7 gap-y-12 mt-[7%]">
              <OurImpactCart headerText="На 130 000 грн"
              mainText="надано допомоги з початку війни"
              imageSrc="home" />

              <OurImpactCart headerText="6 програм" 
              mainText="Сімейна кімната Рональда МакДональда у дитячих лікарнях"
              imageSrc="house" />

              <OurImpactCart headerText="240 000 разів" 
              mainText="хворі діти і їхні родини скористалися затишком Сімейних кімнат"
              imageSrc="heart" />
              
              <OurImpactCart headerText="З 2016 року в Україні"
              mainText="розвиваємо сімейно-орієнтовану медицину"
              imageSrc="help" />

              <OurImpactCart headerText="300 000 наборів" 
              mainText="з продуктами харчування для потерпілих дітей"
              imageSrc="home" />

              <OurImpactCart headerText="200 ВАК-апаратів" 
              mainText="та 420 вакуумних аспіраторів для лікарень"
              imageSrc="help" />

              <OurImpactCart headerText="200+ лікарень" 
              mainText="отримали медичне обладнання чи іншу гуманітарну підтримку"
              imageSrc="house" />

              <OurImpactCart headerText="100+ запитів" 
              mainText="на гуманітарну допомогу задовольнено" imageSrc="heart" />
          </div>
        </div>
        <div className="text-center mt-10">
          <h1 className="text-4xl font-extrabold text-blue-300">
            Останні досягнення
          </h1>
          <div className="grid grid-cols-3 gap-x-7 gap-y-12 mt-[5%]">
            <OurAchievements imageSrc="pajamas.jpg" 
            titleText="Доєднуйтеся до Дня піжам 22 листопада!"
            mainText="Задля підтримки діток, що хворіють, щороку ми проводимо нашу 
            наймасштабнішу благодійну акцію День пі..." />

            <OurAchievements imageSrc="ruta-promo.jpg" 
            titleText="Акція від TM Ruta на підтримку Сімейних кімнат"
            mainText="ТМ Ruta та «Фундація Дім Рональда МакДональда» знову 
            об’єднались, щоб дати можливість мамам, т..." />

            <OurAchievements imageSrc="8-years.png" 
            titleText="8 років турботи та підтримки" 
            mainText="Вісім років тому ми розпочали шлях до створення світу, 
            у якому діти та їхні рідні здорові й щасливі,..." />

            <OurAchievements imageSrc="8-years-anniversary.jpg" 
            titleText="Фундація відзначає 8-річчя діяльності в Україні"
            mainText="Сьогодні ми відзначаємо особливу дату – 8 років, як Фундація 
            Дім Рональда МакДональда в Україні розп..." />

            <OurAchievements imageSrc="optimum-media.jpg" 
            titleText="OMD Optimum Media Ukraine підтримала Сімейну кімнату у Львові"
            mainText="Більше 500 родин більше 5000 разів опиняться в затишних умовах 
            Сімейної кімнати у Центрі дитячої мед..." />

            <OurAchievements imageSrc="modern-incubator.jpg" 
            titleText="Сучасний інкубатор-трансформер передали пологовому при 
            Чернівецькій лікарні" mainText="Сучасний інкубатор-трансформер Фундація Дім Рональда МакДональда
            передала пологовому при Чернівецькі..." />
          </div>
          <div className="justify-center mt-[5%]">
            <Link href="#" className="text-white font-extrabold bg-blue-800 
            hover:bg-gray-500 px-4 py-3 rounded-md text-center max-w-[40%]">
              Більше новин
            </Link>
          </div>
        </div>
      </div>
      <div className="px-[5%] py-[2%] flex flex-col gap-10 mt-7 bg-blue-50">
        <div className='text-center'>
          <h1 className="text-4xl font-extrabold text-blue-300">
            Обмінюємо ваш емейл на цікавинки від Фундації
          </h1>
        </div>
        <form className="w-[40%] m-auto py-[3%] px-3 bg-blue-400 rounded-md">
          <div className="flex justify-between items-center gap-5">
            <input type="text" placeholder="Ваш Емейл" 
            className="h-[50px] rounded-sm border border-black px-3 w-3/5" />
            <button type="submit" className="bg-yellow-400 text-white 
            font-extrabold hover:bg-yellow-500 p-3 w-2/5 rounded-md">
              Підписатись
            </button>
          </div>
        </form>
      </div>
      <div className="px-[5%] py-[2%] flex flex-col gap-10 mt-7">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-300">
            Що кажуть родини
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <WhatFamilySayCart imageSrc="renata-family.jpg"
          cartTitle="Родина Ренати"
          cartText="Маленька Рената народилася з гідроцефалією. Хто чув про цей 
          діагноз знає, що ймовірність ходити з ним майже нульова. 
          Але в Сімейній кімнаті дівчинка зробила свої перші кроки!" />

          <WhatFamilySayCart imageSrc="ferida-family.jpg"
          cartTitle="Родина Феріди"
          cartText="«Я давно вже не почувалась так затишно і спокійно, як тут, 
          у Сімейній кімнаті», — каже Феріда. Вона та її син Амет — 
          кримські татари, які після початку повномасштабного 
          вторгнення залишили рідній дім у Херсонській області та 
          переїхали на Львівщину. Хлопчик потребує серйозного лікування, 
          тож мама завжди поруч — у Сімейній кімнаті." />

          <WhatFamilySayCart imageSrc="zlata-family.jpg"
          cartTitle="Родина Злати" 
          cartText="У 8 років маленька Злата дізналася, що таке війна, 
          протягом кількох тижнів ховаючись у холодному підвалі в Бучі. 
          Голод і хвороби змусили вийти і тікати через блокпости ворога. 
          Так і доїхали до Рівного. Тепер дівчинка на постійному лікуванні 
          через хронічне запалення бронхів. Родина часто відвідує Сімейну 
          кімнату: мама готує щось смачне, а потім разом дивляться улюблені 
          мультфільми."/>

          <WhatFamilySayCart imageSrc="davyd-family.jpg" 
          cartTitle="Родина Давидка" 
          cartText="Родина Борута — давні друзі Сімейної кімнати. З народження 
          Давидко не міг самостійно дихати, і йому зробили першу в 
          Україні операцію, вжививши стимулятор. Увесь перший рік життя 
          малюк провів у лікарні. Саме в Сімейній кімнаті він робив перші 
          кроки і вперше почав посміхатися."  />
        </div>
      </div>
    </div>
   
  )
}

