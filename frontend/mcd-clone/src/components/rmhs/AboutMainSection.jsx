import { FoundationThingsRouter } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DonateBanner } from '.'

export const AboutMainSection = () => {
  return (
    <div>
      <div className="min-h-screen w-full bg-[url('https://rmhc.org.ua/wp-content/uploads/MG_4250-%E2%80%93-%D0%BA%D0%BE%D0%BF%D1%96%D1%8F-1-1.jpg')]
      bg-cover bg-center bg-no-repeat" />
      <div className="px-[5%] flex flex-col gap-3 mt-[3%]">
        <div>
            <div className="text-center flex flex-col gap-5">
                <h1 className="text-4xl font-extrabold text-blue-300">
                    Про Фундацію Дім Рональда МакДональда в Україні
                </h1>
                <p className="text-2xl">
                    Ми творимо світ, у якому діти користуються перевагами 
                    якісної охорони здоров’я, а їхні родини можуть бути поруч, 
                    підтримувати й брати активну участь у догляді та лікуванні.
                </p>
            </div>  
            <div className="flex flex-row gap-5 mt-7">
                <div className="w-1/2 bg-blue-800/80 text-white text-left 
                p-[5%] font-bold">
                    <h1 className='text-2xl'>
                        Місія Фундації
                    </h1>
                    <p className='text-xl font-normal mt-5'>
                        полягає у створенні, пошуку та підтримці програм, 
                        які безпосередньо покращують здоров’я та благополуччя 
                        дітей та їхніх сімей. У складний для України час ми 
                        також надаємо допомогу лікарням і родинам дітей,
                        які постраждали внаслідок цієї жахливої війни.
                    </p>
                </div>
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/5LHyRPVlXXo?si=v2eEx905fBO2iHH7" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
            </div>
            <div className="flex flex-row gap-10 mt-[5%]">
                <div className="flex flex-col gap-5 w-1/2 text-center justify-center">
                    <Image src="/rmhc/home.jpg" alt="" width={100} height={100} className="mx-auto" />
                    <h1 className="text-2xl font-bold text-blue-300">
                        У світі
                    </h1>
                    <p>
                        Допомагаємо родинам з 1974 року
                    </p>
                    <p>
                        260+ підрозділів
                    </p>
                    <p>
                        62 країни та регіони
                    </p>
                    <p>
                        152 000+ працівників і волонтерів
                    </p>
                </div>
                <div className="flex flex-col gap-5 w-1/2 text-center justify-center mt-[6%]">
                    <Image src="/rmhc/house.jpg" alt="" width={100} height={100} className="mx-auto" />
                    <h1 className="text-2xl font-bold text-blue-300">
                        В Україні
                    </h1>
                    <p>
                        Заснована в 2016 році
                    </p>
                    <p>
                        Стрижнева програма — Сімейні кімнати Рональда МакДональда у 
                        6 державних обласних дитячих лікарнях
                    </p>
                    <p>
                        8 років розвитку сімейно орієнтованої медицини
                    </p>
                    <p>
                        100+ гуманітарних проєктів, 320 000 продуктових наборів для 
                        потерпілих українців, 200 апаратів вакуумної терапії, 420 вакуумних 
                        аспіраторів, 30+ дороговартісного медобладнання
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-[10%]">
                <div className='flex flex-col gap-5 text-left relative'>
                    <Image src="/rmhc/our-projects-1.jpg" alt="" width={300} height={300} />
                    <h1 className="text-2xl font-bold text-blue-300">
                        Сімейна кімната Рональда МакДональда
                    </h1>
                    <p>
                        У Сімейних кімнатах у лікарнях родини можуть відпочити, поїсти, 
                        приділити час дитині. Головне, що дають кімнати, — це можливість бути поруч, 
                        не залишати хвору малечу без сімейного тепла й любові. Тут панує затишок і 
                        турбота. А ще народжується сила, здатна подолати негаразди.
                    </p>
                    <Link href={ FoundationThingsRouter.FAMILY_ROOMS } 
                    className="font-bold text-white bg-blue-800 
                    hover:bg-blue-900 rounded-md max-w-[70%] px-4 py-2 text-center ">
                        Дізнатись більше
                    </Link>
                </div>
                <div className='flex flex-col gap-5 text-left relative'>
                    <Image src="/rmhc/our-projects-2.jpg" alt="" width={300} height={300} />
                    <h1 className="text-2xl font-bold text-blue-300">
                        Дім Рональда МакДональда
                    </h1>
                    <p>
                        Це будинок для сімей важкохворих дітей, що лікуються далеко від дому. 
                        Будівництво заплановане на території найбільшої дитячої лікарні НДСЛ «ОХМАТДИТ». 
                        Програма допоможе тисячам родин бути поруч з дітьми під час лікування і 
                        зекономити їм мільйони гривень.
                    </p>
                    <Link href={ FoundationThingsRouter.MCDONALD_HOUSE }
                    className="font-bold text-white bg-blue-800 
                    hover:bg-blue-900 rounded-md max-w-[70%] px-4 py-2 text-center 
                    absolute bottom-0">
                        Дізнатись більше
                    </Link>
                </div>
                <div className='flex flex-col gap-5 text-left relative'>
                    <Image src="/rmhc/our-projects3.jpg" alt="" width={300} height={300} />
                    <h1 className="text-2xl font-bold text-blue-300">
                        Програми підтримки під час війни
                    </h1>
                    <p>
                        Мільйони українських родин з початком війни були змушені покинути домівку,
                        залишитися без даху над головою чи без засобів до існування. Ми допомагаємо 
                        потерпілим сім’ям продуктами харчування, а лікарням – важливим медичним 
                        обладнанням.
                    </p>
                    <Link href={ FoundationThingsRouter.HELP } 
                    className="font-bold text-white bg-blue-800 
                    hover:bg-blue-900 rounded-md max-w-[70%] px-4 py-2 text-center 
                    absolute bottom-0">
                        Дізнатись більше
                    </Link>
                </div>
                <div className='flex flex-col gap-5 text-left relative'>
                    <Image src="/rmhc/our-projects4.jpg" alt="" width={300} height={300} />
                    <h1 className="text-2xl font-bold text-blue-300">
                        Розвиток сімейно-орієнтованої медицини
                    </h1>
                    <p>
                        Фундація є партнером й ментором для лікарів. Ми долучаємося до змін у 
                        системі охорони здоров’я та допомагаємо впроваджувати найкращі світові 
                        практики з сімейно орієнтованої медицини задля здоров’я дітей.
                    </p>
                    <Link href={ FoundationThingsRouter.SOM } 
                    className="font-bold text-white bg-blue-800 
                    hover:bg-blue-900 rounded-md max-w-[70%] px-4 py-2 text-center absolute bottom-0">
                        Дізнатись більше
                    </Link>
                </div>
            </div>
        </div>
      </div>
      <DonateBanner />
    </div>
  )
}

