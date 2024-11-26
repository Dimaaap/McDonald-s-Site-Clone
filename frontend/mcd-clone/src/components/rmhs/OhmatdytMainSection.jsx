import Image from 'next/image'
import React from 'react'
import { FaHouse, FaNotesMedical, FaPhone } from "react-icons/fa6";
import { CgSandClock } from "react-icons/cg";
import { IoMailOpenOutline } from "react-icons/io5";
import { OurThingsBanner } from '.';


export const OhmatdytMainSection = () => {
  return (
    <div className="p-[5%] flex flex-col gap-20">
      <div>
        <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B02-1-1.jpg"
        alt="" width={800} height={800} className="w-full" />
      </div>
      <div className="flex flex-row gap-[7%] items-center">
        <div className="w-1/2 text-4xl font-extrabold text-blue-300">
            <h1>
                У Національній дитячій спеціалізованій лікарні «Охматдит» у Києві
            </h1>
        </div>
        <div className="w-1/2 text-xl font-bold text-left">
            <p>
                Сімейна кімната у найбільшій дитячій лікарні країни облаштована 
                у відділенні неонатології. Найчастіше нас відвідують родини немовлят, які 
                знаходяться у реанімації. Тут батьки можуть побути поруч з дитиною, допомагати
                медперсоналу у догляді за малечою, попити каву чи розігріти обід. Також передбачена
                кімната, де матусі можуть комфортно зцідити молоко для своїх немовлят.
            </p>
        </div>
      </div>

      <div className="bg-blue-50 p-[5%] grid grid-cols-4 gap-x-10 gap-y-7 text-xl 
      font-bold text-blue-300">
        <div className="flex flex-col gap-1 text-center">
            <Image src="/rmhc/house-program.png" alt="" width={100} height={100} className="mx-auto" />
            <p>біля відділу неонатології</p>
        </div>
        <div className="flex flex-col gap-1 text-center">
            <Image src="/rmhc/sofas.png" alt="" width={100} height={100} className="mx-auto" />
            <p>зручні крісла для відпочинку, що розкладаються</p>
        </div>
        <div className="flex flex-col gap-1 text-center">
            <Image src="/rmhc/kitchen.png" alt="" width={100} height={100} className="mx-auto" />
            <p>сучасна кухня</p>
        </div>
        <div className="flex flex-col gap-1 text-center">
            <Image src="/rmhc/family.png" alt="" width={100} height={100} className="mx-auto" />
            <p>книжки та іграшки</p>
        </div>
        <div className="flex flex-col gap-1 text-center">
            <Image src="/rmhc/beverages.png" alt="" width={100} height={100} className="mx-auto" />
            <p>безкоштовні гарячі напої, перекуси, вода</p>
        </div>  
        <div className="flex flex-col gap-1 text-center">
            <Image src="/rmhc/laundry.png" alt="" width={100} height={100} className="mx-auto" />
            <p>кімната для зціджування молока</p>
        </div> 
        <div className="flex flex-col gap-1 text-center">
            <Image src="/rmhc/dental-care.png" alt="" width={100} height={100} className="mx-auto" />
            <p>шафки для зберігання речей</p>
        </div>
        <div className="flex flex-col gap-1 text-center">
            <Image src="/rmhc/free-wi-fi.png" alt="" width={100} height={100} className="mx-auto" />
            <p>безкоштовний Wi-Fi</p>
        </div> 
      </div>
      <div className="text-center max-w-[50%] m-auto flex flex-col gap-8">
        <h1 className="text-4xl font-extrabold text-blue-300">
          Як нас знайти
        </h1>
        <div className="flex flex-row gap-3 items-center">
          <FaHouse size={70} className="text-blue-300" />
          <p className="text-2xl text-blue-300 font-bold text-left">
            Національна дитяча спеціалізована лікарня ``Охматдит``
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <FaNotesMedical size={55} className="text-blue-300" />
          <p className="text-2xl text-blue-300 font-bold text-left">
            м. Київ, вул. В’ячеслава Чорновола, 28/1
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <FaPhone size={55} className="text-blue-300" />
          <p className="text-2xl text-blue-300 font-bold text-left">
            +380442366942
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <CgSandClock size={55} className="text-blue-300" />
          <p className="text-2xl text-blue-300 font-bold text-left">
            Графік: цілодобово
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

      <div className="text-center text-4xl font-extrabold text-blue-300">
        <h1>Історії родин</h1>
      </div>
      <div className="flex flex-row gap-7 items-center">
        <div className="w-1/2">
          <Image src="https://rmhc.org.ua/wp-content/uploads/IMG_8996_2-2.jpg"
          alt="" width={400} height={400} className="w-full" />
        </div>
        <div className="w-1/2 text-left flex flex-col gap-3">
          <p>
            “Наші двійнятка народилися внаслідок екстреного кесарева розтину. Малі перебували у 
            важкому стані, не могли самі дихати, знаходилися під апаратами ШВЛ – таким чином 
            потрапили до реанімації. Нік пробув там тиждень, а в Алекса показники були нижчими, 
            тож, він пролежав у реанімації майже місяць”, – розповіла Іра.
          </p>
          <p>
            Під час лікування пара встала перед вибором: або розлучити дітей і відправити батька з 
            Ніком додому, а Алекса лишити з мамою у лікарні, або триматися всім разом. Обрали, 
            звичайно, другий варіант.
          </p>
          <p>
            Мені як батьку ця кімната дуже допомогла. Я навіть не намагаюся уявити, як би все 
            це відбувалося без подібного місця, як важко матусям все робити самотужки “, – 
            зізнався Віктор.
          </p>
          <p>
            Сімейна кімната стала і тимчасовою оселею, і місцем моральної підтримки.
          </p>
          <p>
            “Особливо підтримували дівчата-адміністратори. Вони завжди питають, як справи, 
            як діти, пам’ятають історію та стан кожного. Їм вдавалося делікатно підтримати нас 
            та створити сприятливий моральний клімат”, – згадала Іра.
          </p>
        </div>
      </div>
    </div>
  )
}

