import Image from 'next/image'
import React from 'react'
import { OurImpactCart } from '../shared'
import { DonateBanner } from '.'

export const YearsMainSection = () => {
  return (
    <div>
        <div className="w-full h-screen 
        bg-[url('https://rmhc.org.ua/wp-content/uploads/50-rokiv-baner-1.png')]
        bg-center bg-cover bg-no-repeat" />

        <div className="p-[5%] flex flex-row justify-between gap-10">
            <div className="w-1/2 font-bold text-2xl flex flex-col gap-3">
                <p>
                    Фундація Дім Рональда МакДональда вже 50 років у світі 
                    дарує підтримку й турботу хворим дітям і їхнім родинам.
                </p>
                <p>
                    Історія Фундації розпочалася 1974 року з бажання маленької дівчинки 
                    Кім Хілл, яка страждала на лейкемію. Вона дуже хотіла, щоб її мама і 
                    тато були поруч з нею в лікарні, особливо, коли вночі відчувала сильний 
                    біль і не мала сил викликати медсестру. Кім не розуміла, чому батьки 
                    мають залишати її в лікарні на самоті.
                </p>
            </div>
            <div className="w-1/2">
                <Image src="/rmhc/kim-hill.jpg" alt=""
                width={400} height={400} className="w-full" />
            </div>
        </div>
        
        <div className="p-[5%] flex flex-row justify-between gap-10 -mt-20">
            <div className="w-1/2">
                <Image src="/rmhc/mcdonald-house.jpg" alt="" width={400} height={400}
                className="w-full" />
            </div>
            <div className="w-1/2 text-2xl font-bold">
                <p>
                    Щоб сім’ї таких хворих дітей могли бути разом у лікарнях, лікар Одрі Еванс, 
                    McDonald’s і Philadelphia Eagles, де грав батько Кім, об’єдналися і 
                    побудували перший Дім Рональда Макдональда біля лікарні у Філадельфії. 
                    Так була заснована благодійна організація Фундація Дім Рональда МакДональда 
                    (Ronald McDonald House Charities, RMHC).
                </p>
            </div>
        </div>

        <div className="p-[5%]">
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/bZQEiMAZn9Q?si=DaWkYgewvu6FpT9p"
             title="YouTube video player" frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
             picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen className="w-full h-[90vh]" />
        </div>

        <div className="p-[5%] grid grid-cols-4 gap-x-7 gap-y-12">
            <OurImpactCart imageSrc="home" 
            mainText="Допомагаємо родинам з 1974 року" 
            extraClasses="text-center max-h-[200px] py-[5%] text-xl" />

            <OurImpactCart imageSrc="home" 
            mainText="260+ підрозділів" 
            extraClasses="text-center max-h-[200px] py-[5%] text-xl" />

            <OurImpactCart imageSrc="home" 
            mainText="62 країни та регіони" 
            extraClasses="text-center max-h-[200px] py-[5%] text-xl" />

            <OurImpactCart imageSrc="home" 
            mainText="152 000+ працівників і волонтерів" 
            extraClasses="text-center max-h-[200px] py-[5%] text-xl" />

            <OurImpactCart imageSrc="home" 
            mainText="2,2 млн безкоштовних ночівель родин щороку" 
            extraClasses="text-center max-h-[200px] py-[5%] text-xl" />

            <OurImpactCart imageSrc="home" 
            mainText="380+ програм Дім Рональда МакДональда" 
            extraClasses="text-center max-h-[200px] py-[5%] text-xl" />

            <OurImpactCart imageSrc="home" 
            mainText="265 програм Сімейна кімната" 
            extraClasses="text-center max-h-[200px] py-[5%] text-xl" />

            <OurImpactCart imageSrc="home" 
            mainText="програми Фундації працюють у 90% найбільших дитячих 
            лікарень у всьому світі" 
            extraClasses="text-center max-h-[200px] py-[0%] text-xl" />
        </div>

        <div className="p-[5%] flex flex-row justify-between gap-10">
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/%D1%81%D0%B5%D1%81%D1%82%D1%80%D0%B8%D1%87%D0%BA%D0%B82-1.jpg"
                alt="" 
                width={400} height={400} className="w-full" />
            </div>
            <div className="w-1/2 text-2xl font-bold">
                В Україні Фундація Дім Рональда МакДональда розпочала свою 
                діяльність 2016 року. Ми пишаємося тим, що є частиною глобальної 
                організації та можемо підтримувати українські сім’ї у 
                найважчі для них часи. 2017 року була відкрита перша Сімейна 
                кімната у “Охматдит” Центру дитячої медицини у Львові. 
                За весь час відкрито 6 Сімейних кімнат у найбільших 
                дитячих лікарнях України. З початком війни Фундація 
                започаткувала гуманітарні програми і надала допомогу на 
                120 млн грн. Задля розвитку системи охорони здоров’я, 
                Фундація реалізовує навчальні програми для лікарів на тему 
                сімейно орієнтованої медицини — сучасного підходу в лікуванні 
                дітей, де у центрі уваги медиків — хворі діти та їхні родини.
            </div>
        </div>

        <DonateBanner />
    </div>
  )
}

