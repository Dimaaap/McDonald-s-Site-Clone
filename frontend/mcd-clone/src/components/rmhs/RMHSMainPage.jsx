import Link from "next/link"
import { Slider } from "."
import { HowToJoinRouter } from "@/store"
import { Heart } from "lucide-react"
import Image from "next/image"


export const RMHSMainPage = () => {

  return (
    <>
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
            <p className="text-[1.1rem] min-h-[240px]">
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
            <p className="text-[1.1rem] min-h-[210px]">
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
          <div className="grid grid-cols-4 gap-x-7 gap-y-5 mt-[7%]">
              <div className=" border-2 border-blue-400 rounded-md relative 
              px-[5%] py-[10%] h-[250px]">
                <div className="flex flex-col gap-7 mt-[20%]">
                  <h1 className="text-2xl font-extrabold text-blue-400">
                    На 130 000 грн
                  </h1>
                  <p>
                    надано допомоги з початку війни
                  </p>
                </div>
              </div>
              <div className=" border-2 border-blue-400 rounded-md relative 
              px-[5%] py-[10%] h-[250px]">
                <div className="flex flex-col gap-7 mt-[20%]">
                <h1 className="text-2xl font-extrabold text-blue-400">
                    6 програм
                  </h1>
                  <p>
                    Сімейна кімната Рональда МакДональда у дитячих лікарнях
                  </p>
                </div>
              </div>
              <div className=" border-2 border-blue-400 rounded-md relative 
              px-[5%] py-[10%] h-[250px]">
                <div className="flex flex-col gap-7 mt-[20%]">
                  <h1 className="text-2xl font-extrabold text-blue-400">
                    240 000 разів
                  </h1>
                  <p>
                    хворі діти і їхні родини скористалися затишком Сімейних кімнат
                  </p>
                </div>
              </div>
              <div className=" border-2 border-blue-400 rounded-md relative 
              px-[5%] py-[10%] h-[250px]">
                <div className="flex flex-col gap-7 mt-[20%]">
                  <h1 className="text-2xl font-extrabold text-blue-400">
                    З 2016 року в Україні
                  </h1>
                  <p>
                    розвиваємо сімейно-орієнтовану медицину
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
   
  )
}

