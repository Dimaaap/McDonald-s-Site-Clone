import Image from 'next/image'
import React from 'react'

export const MainSection = () => {
  return (
    <div className="px-[5%] py-[5%] text-center flex flex-col gap-5">
        <h1 className="text-5xl font-extrabold">
            МакДональдз в Україні
        </h1>
        <Image src="/to_know_hero.jpeg" alt=""
        width={900} height={900} className="w-full mt-5" />
        <div className="flex flex-col gap-5 text-left mt-5 
        text-[1.1rem]">
            <p>
                Компанія МакДональдз є світовим лідером в галузі 
                швидкого обслуговування й налічує понад 40 000 
                закладів більш ніж у 120 країнах світу, які щодня 
                обслуговують 70 мільйонів відвідувачів.
            </p>
            <p>
                Україна стала 102-ю країною, де почала розвиватись 
                мережа МакДональдз. 24 травня 1997 року поруч зі 
                станцією метро "Лук'янівська" в Києві відкрився 
                перший заклад МакДональдз у країні.
            </p>
            <p>
                Компанія "МакДональдз Юкрейн Лтд" є одним із 
                найбільших іноземних інвесторів в Україні: у 
                розвиток мережі МакДональдз та інфраструктури 
                нашої держави компанією було вже було вкладено 
                близько 225 мільйонів доларів
            </p>
        </div>
        <div className="flex flex-col gap-5 text-left mt-5 
        text-[1.1rem]">
            <h1 className="text-4xl font-extrabold">
                Місія МакДональдз
            </h1>
            <p className="font-extrabold">
                Наша місія: створювати приємні моменти задоволення 
                смаком - легко для кожного.
            </p>
            <p>
                Саме так ми живемо і плекаємо громади. Ми подаємо 
                смачні страви, з якими люди почуваються добре, в 
                зручних місцях, у зручний час та за доступними цінами.
                Ми наполегливо працюємо, щоб забезпечити швидкість, асортимент 
                та індивідувальний підхід, яких очікують наші клієнти. Ми не 
                просто обслуговуємо клієнтів - ми створюємо приємні моменти з 
                усією легкістю, гостинністю та надійністю, за які нас знають 
                та люблять.
            </p>
        </div>
        <div className="flex flex-col gap-5 text-left mt-5 
        text-[1.1rem]">
            <h1 className='text-4xl font-extrabold'>
                Цінності МакДональдз
            </h1>
            <p>
                Основою нашого бренду є і завжди було слідування 
                основним цінностям, які визначають, хто ми є і як 
                ми керуємо нашим бізнесом і закладами.
            </p>
            <p>
                Ми щодня живемо нашими цінностями та використовуємо 
                їх для прийняття рішень - великих і малих. Так ми 
                створюємо той МакДональдз, якому можуть 
                довіряти наші люди та клієнти.
            </p>
            <div className="flex flex-row gap-5 mb-4">
                <div className="flex flex-col gap-1 w-1/5 text-center">
                    <Image src="/values/service.jpeg" alt="service" 
                    width={200} height={200} className="ml-1" />
                    <div className="">
                        <h1 className="font-extrabold">
                            Служіння
                        </h1>
                        <p>
                            Для нас клієнти та наші люди на 
                            першому місці.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-1/5 text-center">
                    <Image src="/values/equal.jpeg" alt="equal" 
                    width={200} height={200} className="ml-1" />
                    <div className="">
                        <h1 className="font-extrabold">
                            Рівність
                        </h1>
                        <p>
                            Ми відкриваємо двері для кожного.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-1/5 text-center">
                    <Image src="/values/virtue.jpeg" alt="virtue"
                    width={200} height={200} className="ml-1" />
                    <div className="">
                        <h1 className="font-extrabold">
                            Доброчесність
                        </h1>
                        <p>
                            Ми вчиняємо правильно.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-1/5 text-center">
                    <Image src="/values/community.jpeg" 
                    alt="community" width={200} height={200} 
                    className="ml-1" />
                    <div>
                        <h1 className="font-extrabold">
                            Громада
                        </h1>
                        <p>Ми гарні сусіди.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-1/5 text-center">
                    <Image src="/values/family.jpeg" alt="family" 
                    width={200} height={200} className="ml-1" />
                    <div>
                        <h1 className="font-extrabold">
                            Родина
                        </h1>
                        <p>
                            Зростаємо разом.
                        </p>
                    </div>
                </div>
            </div>
            <p>
                Наші цінності - це фільтр, через який проходять усі 
                рішення в компанії. Адже дії говорять 
                більше за слова.
            </p>
        </div>
    </div>
  )
}
