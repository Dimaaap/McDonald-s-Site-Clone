import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { QualityAndHygieneRoute } from '@/store'

export const QualityAndHygieneMain = () => {
  return (
    <div className="text-center flex flex-col gap-5 p-10">
      <h1 className="text-4xl font-extrabold">
        Правила безпеки під час повітряної тривоги
      </h1>
      <div className="w-full mt-5 ">
        <Image src="/quality_and_hygiene_hero.jpeg" 
        alt="Quality and Hygiene" 
        width={800} height={800} className="w-full" />
      </div>
      <div className="flex flex-col gap-3 text-left">
        <p>
            Шановні гості, під час повітряної тривоги або за відсутності 
            електроенергії МакДональдз не працюватиме — всі 
            мають покинути заклад. Задля вашої безпеки після оголошення 
            повітряної тривоги радимо пройти в безпечне місце. Інформацію 
            про розташування найближчих укриттів дивіться на вхідних дверях закладів.
        </p>
        <p>
            Після завершення тривоги чи відновлення постачання електроенергії 
            нам потрібно близько години, щоб налаштувати обладнання та 
            підготуватися до відкриття.
        </p>
        <p>
            Наші заклади можуть відкриватися пізніше, ніж зазвичай, 
            для виконання складніших робіт, пов’язаних з обслуговуванням 
            обладнання та генеральним прибиранням закладу.
        </p>
        <p>
            Із турботою, ваш МакДональдз.
        </p>
        <div className="mt-10 flex flex-row gap-7">
            <div className="w-1/2">
                <div className="w-full">
                    <Image src="/hygiene.jpeg" alt="Hygiene" width={400} height={400}
                    className="w-full mb-5" />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl font-extrabold">
                        Гігієна в ресторанах
                    </h1>
                    <p>
                        Щоб гарантувати вашу безпеку, ми дотримуємося українських 
                        і світових вимог, а крім того, розробили власні 
                        взірцеві стандарти якості, чистоти й безпечності 
                        та постійно їх посилюємо.
                    </p>
                    <Link href={QualityAndHygieneRoute.HYGIENE_IN_RESTAURANTS} 
                    className="bg-yellow-400 
                    text-center max-w-[40%] p-4 rounded-md hover:bg-yellow-500">
                        Дізнатись більше
                    </Link>
                </div>
            </div>
            <div className="w-1/2">
                <div className="w-full">
                    <Image src="/quality.jpeg" alt="Quality" 
                    width={400} height={400} 
                    className="w-full mb-5" />
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-extrabold">
                        Якість продукції
                    </h1>
                    <p>
                        Ми завжди виступаємо за інновації в харчовій промисловості. 
                        А ще - за відповідальне ставлення постачальників до своєї 
                        роботи. Наша компанія прагне, щоби все, що ми спільно робимо, 
                        не шкодило планеті.
                    </p>
                    <Link href={QualityAndHygieneRoute.PRODUCTION_QUALITY}
                    className="bg-yellow-400 
                    text-center max-w-[40%] p-4 rounded-md hover:bg-yellow-500">
                        Дізнатись більше
                    </Link>
                </div>
            </div>
        </div>
        <div className="h-[1px] w-[100px] bg-black mt-10" />
        <small className="text-[0.8rem] text-gray-500 mt-3">
            * 2019 року наші ресторани відвідала рекордна кількість 
            клієнтів — 110 млн.
        </small>
      </div>
    </div>
  )
}

