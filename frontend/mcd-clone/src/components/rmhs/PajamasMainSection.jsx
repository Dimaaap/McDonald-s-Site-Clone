import { Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

export const PajamasMainSection = () => {
  return (
    <div>
      <div className="w-full h-screen 
      bg-[url('https://rmhc.org.ua/wp-content/uploads/xb_web_pajamas_ua.jpg.pagespeed.ic.CW9bLc4mqS.webp')]
      bg-center bg-cover bg-no-repeat" />
      <div className="flex flex-col gap-[3%] px-[5%] mt-[5%]">
        <Link href="#" className="max-w-[40%] mx-auto bg-red-500 hover:bg-red-600 
        text-white font-extrabold text-lg flex flex-row items-center gap-3 py-3 
        px-5 rounded-md">
            Зробити внесок
            <Heart size={25} />
        </Link>

        <div className="text-center text-4xl font-extrabold text-blue-300 mt-[5%]">
            <h1>
                Доєднуйтеся до благодійного «Дня піжам»!
            </h1>
        </div>

        <div className="mt-[5%] flex flex-row gap-10">
            <div className="w-1/2 flex flex-col gap-7">
                <div className="flex flex-row gap-5 items-center">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/xEmotional_Wellbeing-print.jpg.pagespeed.ic.HbB9aOfNBr.jpg" 
                    alt="" width={50} height={50}/>
                    <p className="text-xl font-extrabold text-blue-300">
                        22 листопада одягніть піжаму
                    </p>
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/xHost_Fundraiser-print.jpg.pagespeed.ic.Loni9hnVoz.jpg" 
                    alt="" width={50} height={50}/>
                    <p className="text-xl font-extrabold text-blue-300">
                        Зробіть будь-який посильний внесок на rmhc.org.ua
                    </p>
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/xsocial-share-print.jpg.pagespeed.ic.6mnlagjYGk.jpg" 
                    alt="" width={50} height={50}/>
                    <p className="text-xl font-extrabold text-blue-300">
                        Поділіться фото в соцмережах з #ДеньПіжам
                    </p>
                </div>
            </div>
            <div className="w-[40%] mx-auto bg-yellow-400 rounded-lg 
            px-10 py-5 text-xl text-left">
                <p>
                    Коли дітки хворіють у лікарнях, вони весь день проводять у 
                    піжамі, яка дарує їм комфорт і нагадує про домівку. 
                    Тому щороку Фундація організовує всеукраїнську благодійну 
                    акцію «День піжам», щоб підтримати хворих дітей і нагадати 
                    їм, що вони не самі.
                </p>
            </div>
        </div>


        <Link href="#" className="max-w-[40%] mx-auto bg-red-500 hover:bg-red-600 
        text-white font-extrabold text-lg flex flex-row items-center gap-3 py-3 
        px-5 rounded-md mt-[5%]">
            Зробити внесок
            <Heart size={25} />
        </Link>

        <div className="mt-[5%] flex flex-row gap-7">
            <div className="w-1/2 text-left text-xl">
                <p>
                    «День піжам» — це найпопулярніша акція Фундації Дім Рональда Макдональда в 
                    Україні, яка збирає сотні тисяч небайдужих українців, блогерів, зірок, бізнесів, 
                    школярів, ЗМІ навколо допомоги хворих дітям. Вперше ми провели «День піжам» у 
                    2019 році. Ми об’єднали всіх охочих заради досягнення спільної мети — 
                    подарувати дітям у лікарнях можливість бути поруч з рідними. Тоді акція 
                    отримала великий відгук, а «День піжам» став щорічною традицією.
                </p>
            </div>
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/xphoto_2024-11-05_09-58-16-2-400x400.jpg.pagespeed.ic.9KWUW_THpg.webp"
                alt="" width={400} height={400} className="h-full" />
            </div>
        </div>

        <div className="mt-[5%] flex flex-row gap-7">
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/xDSC_4934-2-1024x682.jpg.pagespeed.ic.fNPMoXvMdm.webp" 
                alt="" width={400} height={400} className="h-full w-full" />
            </div>
            <div className="w-1/2 text-left text-xl">
                <p>
                    Усі кошти, зібрані під час акції, підуть на утримання Сімейних кімнат
                    Рональда МакДональда в найбільших державних дитячих лікарнях. Сімейні кімнати — 
                    це затишні простори в стінах лікарні. Щоб рідні не розлучалися під час тривалого 
                    лікування дітей, Фундація Дім Рональда МакДональда облаштовує такі кімнати, 
                    де родини можуть відпочити й набратися сил, задовольнити базові гігієнічні потреби, 
                    приділити час спілкуванню та грі з дитиною, а також поїсти. У деяких кімнатах сім’ї 
                    можуть мешкати тижнями чи навіть місяцями в окремих спальнях, стільки, скільки 
                    буде потрібно для одужання дитини. Перебування в кімнатах для хворих дітей 
                    безкоштовне.
                </p>
            </div>
        </div>

        <Link href="https://rmhc.org.ua/wp-content/uploads/Materialy-DP-2024.zip" 
        className="max-w-[40%] mx-auto bg-yellow-400 hover:bg-yellow-500 
        text-white font-extrabold text-lg flex flex-row items-center gap-3 py-3 
        px-5 rounded-md mt-[5%]">
            Матеріали акції
            <MdOutlineFileUpload size={25} />
        </Link>

        <div className="mt-[5%] flex flex-row gap-7">
            <div className="w-1/2 text-left text-xl">
                <p>
                    Сімʼя Давида, що у відео та світлинах акції, змогла бути поруч із сином під час 
                    його лікування, завдяки Сімейній кімнаті в НДСЛ «Охматдит».
                </p>
                <p>
                    «Давидик народився на 35 тижні, але через пів години перестав дихати. Його екстрено 
                    перевели в реанімацію, а пізніше — в “Охматдит”, де поставили діагноз перинатальної 
                    гіпоксії. Ми давно знали про Фундацію Дім Рональда Макдональда, завжди 
                    брали участь в акціях на підтримку, але ніколи не думали, що скористаємося кімнатою. 
                    Завдяки їй ми змогли бути поряд із сином, піклуватися про нього, і це дало нам 
                    сили пройти через усі випробування. Ми безмежно вдячні лікарям за порятунок 
                    нашого хлопчика, а Фундації Дім Рональда МакДональда і всім благодійникам за 
                    можливість бути поруч»
                </p>
            </div>
            <div className="w-1/2">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/LVp5coWIGOw?si=85S708vEsL3HqJ2R" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen className="w-full" />
            </div>
        </div>

        <div className="mt-[5%] text-center text-4xl font-extrabold text-blue-300">
            <h1>
                Реквізити для благодійного внеску на підтримку роботи Сімейних кімнат: 
            </h1>
        </div>

        <div className="text-center flex flex-col gap-7 mt-[5%] text-xl">
            <p>
                БО «Фундація Дім Рональда МакДональда в Україні»
            </p>
            <p>
                Директор Соловей Галина Олександрівна
            </p>
            <p>
                Неприбуткова організація (ознака неприбутковості 0036)
            </p>
            <p>
                Ідентифікаційний код за ЄДРПОУ: 40900442
            </p>
            <p>
                Місце знаходження: Україна, 02140, м. Київ, вул. Гришка, 7
            </p>
            <p>
                Банківські реквізити:
            </p>
            <p>
                п/р IBAN   UA913005840000026009200982002  в ПАТ «СІТІБАНК»,
            </p>
            <p>
                МФО 300584
            </p>
        </div>

        <div className="mt-[5%] text-center text-4xl font-extrabold text-blue-300">
            <h1>
                “День піжам” в минулі роки
            </h1>
        </div>

        <div className="mt-[5%] flex flex-row gap-7">
            <div className="w-1/2">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/CXYKhI3rCs4?si=ld01TRUHC-ILYvGG" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen className="w-full" />
            </div>
            <div className="w-1/2 text-left text-xl flex flex-col gap-5">
                <p className="text-blue-300 font-bold">
                    2023 рік
                </p>
                <p>
                    Понад 100 шкіл та дитсадочків, компанії та тисячі небайдужих українців 
                    долучилися до акції. Разом із зірками, школярами, працівниками та просто 
                    всіма бажаючими ми вдягнули піжаму, аби долучитися збором на програму 
                    «Дім Рональда МакДональда» для родин важкохворих діток. Ми вдячні, що до 
                    благодійної акції долучилися The Hardkiss, Казка, Злата Огнєвіч, ONUKA, 
                    Лілія Ребрик, Анатолій Анатоліч із родиною, родина Решетників та багато інших. 
                    Ми отримали 75 публікацій, у тому числі 7 висвітлень на ТБ, і 4 мільйони охоплення.
                </p>
            </div>
        </div>

        <div className="mt-[5%] flex flex-row gap-7">
            <div className="w-1/2 text-xl text-left flex flex-col gap-5">
                <p className="text-blue-300 font-bold">
                    2021 рік
                </p>
                <p>
                    Разом із зірками, школярами, працівниками та просто всіма бажаючими ми танцювали. 
                    Це був перший танцювальний благодійний флешмоб, танець став популярним у 
                    соцмережах, зокрема у TikTok. Ми вдячні, що до благодійного флешмобу 
                    долучилися Лілія Ребрик, Анатолій Анатоліч, Злата Огнєвіч та Валерія Гузема
                </p>
            </div>
            <div className="w-1/2">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/7ly6JKUkmCQ?si=qQJ5nVgcT_U1Ok1C" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen className="w-full" />
            </div>
        </div>

        <div className="mt-[5%] flex flex-row gap-7">
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/0.png" alt="" 
                width={400} height={400} className="w-full" />
            </div>
            <div className="w-1/2 text-left text-xl flex flex-col gap-5">
                <p className="text-blue-300 font-bold">
                    2020 року
                </p>
                <p>
                    80 шкіл долучилися до акції. Школярі приходили на навчання у піжамах на знак 
                    підтримки хворих дітей у лікарнях. Нас підтримали чудові зірки: родина 
                    Тимура Мирошниченко, Марічка Падалко, Анатолій Анатоліч та інші. 
                    Компанії продавали піжами, а відсоток з продажів передавали на благодійність. 
                    Сотні публікацій з хештегом у соцмережах.
                </p>
            </div>
        </div>

        <div className="mt-[5%] flex flex-row gap-7">
            <div className="w-1/2 text-left text-xl flex flex-col gap-5">
                <p className="text-blue-300 font-bold">
                    2019 рік
                </p>
                <p>
                    Акція набула небувалого розголосу. До акції приєдналися 35 зірок, лідерів думки 
                    і блогерів, що зробили фото в піжамі й узяли участь у флешмобі, запросивши всіх 
                    долучитися до «Дня піжам». Тисячі небайдужих українців, компанії, школи і 
                    громадські організації зібрались разом і зробили неоціненний внесок у відкриття 
                    та утримання Сімейних кімнат Рональда Макдональда в дитячих лікарнях по всій 
                    Україні. Ми отримали 100 публікацій, у тому числі 10 висвітлень на ТБ, і 15 
                    мільйонів охоплення.
                </p>
            </div>
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%9E%D0%B1%D0%BA%D0%BB%D0%B0%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0-%D0%92%D1%81%D0%B5%D1%83%D0%BA%D1%80%D0%B0%D1%96%CC%88%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B8%CC%86-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BF%D1%96%D0%B6%D0%B0%D0%BC-1024x535-1.png" 
                alt="" width={400} height={400} className="w-full" />
            </div>
        </div>
      </div>
    </div>
  )
}