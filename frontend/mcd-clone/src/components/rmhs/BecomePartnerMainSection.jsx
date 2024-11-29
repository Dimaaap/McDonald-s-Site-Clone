import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const BecomePartnerMainSection = () => {
  return (
    <div className="flex flex-col gap-[5%]">
        <div className="w-full h-screen 
        bg-[url('https://rmhc.org.ua/wp-content/uploads/%D1%81%D1%82%D0%B0%D1%82%D0%B8-%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D0%BE%D0%BC.jpg')]
        bg-cover bg-center bg-no-repeat" />
        <div className="px-[5%] flex flex-col gap-[5%] mt-[5%]">
            <div className="text-center text-blue-300 flex flex-col gap-[3%]">
                <h1 className="text-4xl font-extrabold">
                    Запрошуємо вас стати партнером Фундації в Україні
                </h1>
                <p className="text-xl font-bold mt-[3%]">
                    Разом ми зможемо:
                </p>
            </div>
            <div className="grid grid-cols-3 gap-7 mt-[5%]">
                <div className="flex flex-col gap-5 text-left">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/photo_2023-01-21_03-31-55-3-e1675765508427.jpg" 
                    alt="" width={200} height={200} className="w-full"/>
                    <p className="text-xl font-bold text-blue-300">
                        Утримувати Сімейні кімнати Рональда МакДональда
                    </p>
                    <p>
                        Можливість бути поруч — найцінніша для родини, 
                        яка фактично живе у лікарні, піклуючись про малюка. 
                        Тому в дитячих лікарнях по всій Україні ми облаштовуємо 
                        Сімейні кімнати: щоб родини могли бути разом.
                    </p>
                    <p>
                        Сім’ї завжди користуються Сімейними кімнатами безкоштовно. Однак їхнє 
                        утримання в п’яти лікарнях (оренда, комунальні платежі, зарплата 
                        адміністраторів, що піклуються про зручність, чистоту і безпеку 24/7) 
                        коштує <b>7 000 000 грн щорічно.</b>
                    </p>
                    <p>
                        <b>
                            Запрошуємо вас стати генеральним партнером програми. 
                            Спонсорський внесок на 1 рік – 1 400 000 грн, 1 місяць – 117 000 грн. 
                        </b>
                    </p>
                    <p>
                        Ми робимо це для того, аби батьки могли відпочити, інколи вперше за багато 
                        днів, погратися з малюком, відчути турботу. Підтримка, яку ви можете 
                        подарувати сім’ям – безцінна. 
                    </p>
                    <Link href="#" className="max-w-[70%] px-5 py-3 bg-blue-800 hover:bg-gray-500 
                    text-white font-bold text-xl rounded-md text-center  ">
                        Більше про програму
                    </Link>
                </div>
                <div className="flex flex-col gap-5 text-left relative">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/photo_2023-01-21_03-41-06-e1675765442375.jpg" 
                    alt="" width={200} height={200} className="w-full"/>
                    <p className="text-xl font-bold text-blue-300">
                        Побудувати Дім Рональда МакДональда
                    </p>
                    <p>
                        Перший в Україні <b>Дім Рональда МакДональда</b> буде побудовано на території 
                        найбільшої дитячої лікарні країни “Охматдит“ на 3 500 кв метрів і 50 
                        окремих кімнат. 
                    </p>
                    <p>
                        Для будівництва програми потрібно 288 000 000 грн.
                    </p>
                    <p>
                        <b>
                            Ви можете стати партнером Дому Рональда МакДональда та долучитись 
                            до створення окремих спалень чи загальних приміщень. 
                        </b>
                    </p>
                    <p>
                        Ця програма дозволить важкохворим дітям жити з батьками у комфорті на 
                        території лікарні стільки, скільки буде потрібно. Та зекономити кошти сім’ям, 
                        вкрай фінансово виснаженим довготривалою хворобою дитини, на проживанні 
                        й харчуванні. 
                    </p>
                    <Link href="#" className="max-w-full px-5 py-3 bg-blue-800 hover:bg-gray-500 
                    text-white font-bold text-xl rounded-md text-center absolute bottom-0">
                        Більше про програму
                    </Link>
                </div>
                <div className="flex flex-col gap-5 text-left relative">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/MG_9151-e1711978567333.jpg" 
                    alt="" width={200} height={200} className="w-full"/>
                    <p className="text-xl font-bold text-blue-300">
                        Впровадити у лікарнях принципи сімейно орієнтованої медицини
                    </p>
                    <p>
                        Фундація Дім Рональда МакДональда в Україні прагне покращити систему 
                        охорони здоров’я в країні, просуваючи сімейно орієнтований підхід у 
                        медичному догляді дітей.
                    </p>
                    <p>
                        Наші програми мають важливе значення для того, щоб батьки могли фізично та 
                        емоційно брати участь у догляді за хворою дитиною, отримувати всю необхідну 
                        інформацію та приймати зважені рішення. 
                    </p>
                    <p>
                        <b>
                            Ви можете підтримати створення навчальних програм для медичних 
                            фахівців і батьків,
                        </b>
                        з метою розвитку сімейно орієнтованого підходу у медичному догляді, 
                        у центрі уваги якого – дитина та її сім’я.
                    </p>
                    <Link href="#" className="max-w-full px-5 py-3 bg-blue-800 hover:bg-gray-500 
                    text-white font-bold text-xl rounded-md text-center absolute bottom-0">
                        Більше про програму
                    </Link>
                </div>
            </div>
            <div className="text-center text-blue-300 mt-[7%]">
                <h1 className="text-4xl font-extrabold">
                    Будемо раді співпраці:
                </h1>
            </div>
            <div className="flex flex-row justify-between mt-[5%]">
                <div className="w-1/2 justify-start text-left flex flex-col gap-7">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/galina_solovey_300_300.jpg" 
                    alt="" width={300} height={300} />
                    <h1 className="text-2xl font-bold">
                        Галина Соловей
                    </h1>
                    <p>директорка</p>
                    <p>galina.solovey@rmhc.org.ua</p>
                </div>
                <div className="w-1/2 justify-start text-left flex flex-col gap-7">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/anna_vlasenko_300_300.jpg" 
                    alt="" width={300} height={300} />
                    <h1 className="text-2xl font-bold">
                        Анна Власенко
                    </h1>
                    <p>
                        менеджерка зі стратегічних партнерств і фандрейзингу
                    </p>
                    <p>anna.moskvichova@rmhc.org.ua</p>
                </div>
            </div>
        </div>
    </div>
  )
}

