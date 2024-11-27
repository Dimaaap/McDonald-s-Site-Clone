import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { OurImpactCart } from '../shared'

export const SomMainSection = () => {
  return (
    <div className="flex flex-col gap-10">
        <div className="w-full h-screen 
        bg-[url('https://rmhc.org.ua/wp-content/uploads/baner-som.png')]
        bg-center bg-cover bg-no-repeat" />
        
        <div className="px-[5%] text-left text-xl font-bold">
            <p>
                Самотність, туга, страх — це лише невеликий перелік емоцій, що опановують дитину, 
                яка щойно потрапила до лікарні, а може, уже й перестала рахувати дні в лікарняних 
                стінах — без улюблених іграшок, звичного розпорядку дня, без рідних поруч. Чи може 
                сучасна медицина зменшити стрес, який переживає хвора дитина? Так, якщо це 
                сімейно-орієнтована медицина. Якщо діти не розлучаються з рідними під час лікування,
                якщо медики ставляться з повагою, інформують, співпрацюють з родиною як одна команда. 
                На сьогодні це найбільш сучасний і гуманний підхід у медичному догляді за дитиною.
            </p>
        </div>
        
        <div className="px-[5%] flex flex-row gap-5">
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/DSCF6505-1-1536x1024.jpg" 
                alt="" width={400} height={400} className="w-full" />
            </div>
            <div className="w-1/2 flex flex-col gap-5 text-xl font-bold">
                <p>
                    У сучасній медицині спільне перебування батьків і дітей у лікарнях поступово 
                    стає стандартом медичного обслуговування. Численні дослідження свідчать про 
                    позитивний терапевтичний вплив присутності близьких родичів на процес видужання 
                    дитини. Їхня підтримка під час болісних процедур і маніпуляцій дарує дитині 
                    відчуття захищеності й турботи. А це зменшує тривогу як у батьків, так і в дітей.
                </p>
                <p>
                    Саме в цьому полягає суть сімейно орієнтованої медицини, що передбачає активне 
                    залучення родини до лікування пацієнта й догляду за ним у лікарні. Згідно з цим 
                    підходом, медперсонал і батьки вважаються партнерами, які співпрацюють для 
                    якнайшвидшого видужання чи стабілізації стану хворої дитини.
                </p>
            </div>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Принципи сімейно орієнтованої медицини
            </h1>
        </div>

        <div className="px-[5%] grid grid-cols-3 gap-7">
            <div className="flex flex-col gap-7">
                <Image src="https://rmhc.org.ua/wp-content/uploads/MG_9186.jpg" alt=""
                width={300} height={300} />
                <div className="flex flex-col gap-3 text-left">
                    <p className="font-bold text-xl">
                        Гідність і повага
                    </p>
                    <ul className="flex flex-col gap-3 list-disc">
                        <li>
                            З’ясовується й поважається думка та вибір пацієнта і сім’ї.
                        </li>
                        <li>
                            Знання, цінності, виховання, переконання, культурні традиції та 
                            інші особливості пацієнта і сім’ї включаються в планування та 
                            надання медичної допомоги.
                        </li>
                        <li>
                            Комунікація відбувається з гідністю та повагою.
                        </li>
                    </ul>
                    <p>
                        Вважається, що гідність і повага — вроджені якості людини, і цього не 
                        вчать у медичних університетах. Проте в прогресивних країнах у тестах 
                        на лікарську спеціальність більшість запитань — саме етичні. Гідність 
                        і повага в сімейно орієнтованому підході винесено на перше місце. З 
                        цього треба починати перші лекції в медичних ЗВО, і це має проходити 
                        наскрізною ниткою через все навчання лікарів.
                    </p>
                </div>
            </div>
            
            <div className="flex flex-col gap-7">
                <Image src="https://rmhc.org.ua/wp-content/uploads/DSCF6467-1.jpg" alt=""
                width={300} height={300} />

                <div className="flex flex-col gap-3 text-left">
                    <p className="font-bold text-xl">
                        Доступ до інформації
                    </p>
                    <ul className="flex flex-col gap-3 list-disc">
                        <li>
                            Медичні працівники, пацієнт і родина спілкуються.
                        </li>
                        <li>
                            Пацієнтові та його родині надається повна й неупереджена інформація.
                        </li>
                        <li>
                            Медичні працівники пояснюють призначення.
                        </li>
                    </ul>
                    <p>
                        Поширення інформації, або інформаційна компетентність, — це насамперед заданість 
                        лікаря шукати, розпізнавати, виокремлювати лише правдиву інформацію, робити 
                        висновки, критично оцінювати великий потік інформації. 
                        А також спроможність лікаря пояснити пацієнтові кілька варіантів лікування 
                        і впевнитися в тому, що пацієнт та його родина зрозуміли те, що йому пояснюють.
                    </p>
                    <p>
                        Чи може зміна фокуса лікарів на комунікацію з батьками призвести до поліпшення 
                        стану здоров’я? Незважаючи на досягнення сучасної медицини в галузі високих 
                        технологій, найпотужнішим діагностичним інструментом залишається розмова лікаря 
                        і пацієнта, яка може виявити левову частку проблем.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-7">
                <Image src="https://rmhc.org.ua/wp-content/uploads/photo_2023-01-21_03-35-39.jpg" alt=""
                width={300} height={300} />

                <div className="flex flex-col gap-3 text-left">
                    <p className="font-bold text-xl">
                        Участь у лікувальному процесі та співпраця
                    </p>
                    <ul className="flex flex-col gap-3 list-disc">
                        <li>
                            Сім’ї співпрацюють з лікарями: вони мають заохочуватися до участі в 
                            лікувальному процесі й ухваленні рішень, що стосуються здоров’я 
                            пацієнта-дитини.
                        </li>
                        <li>
                            Родина має змогу бути в палаті поруч із дитиною під час її перебування 
                            в лікарні.
                        </li>
                        <li>
                            Родина має змогу перебувати поруч із дитиною під час різних маніпуляцій:
                            огляду, проведення ін’єкцій, перев’язувань тощо.
                        </li>
                        <li>
                            У родини з’ясовуються сподівання щодо результатів лікування дитини, 
                            а також чи зрозуміло, як відбувається процес лікування.
                        </li>
                        <li>
                            Лікар погоджує призначення лікарських препаратів, попередньо пояснивши 
                            всі можливі варіанти препаратів, врахувавши їхню економічну ефективність 
                            і наслідки застосування.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Чому це важливо*
            </h1>
        </div>

        <div className="px-[5%] grid grid-cols-4 gap-7 mt-[3%]">
            <OurImpactCart imageSrc="home" headerText="98%" 
            mainText="батьків впевнені, що їхнє активне залучення важливе для якісного догляду за дитиною"
            extraClasses='text-center' />

            <OurImpactCart imageSrc="home" headerText="91%" 
            mainText="батьків хочуть ліпше взаємодіяти з лікарями"
            extraClasses='text-center' />

            <OurImpactCart imageSrc="home" headerText="43%" 
            mainText="батьків вважають, що головна перешкода — небажання медиків співпрацювати"
            extraClasses='text-center' />

            <OurImpactCart imageSrc="home" headerText="41%" 
            mainText="батьків не мали змогу бути поруч з дітьми під час медичних процедур"
            extraClasses='text-center' />
        </div>

        <div className="px-[5%] text-center">
            <p className='text-xl'>
                *Дослідження Фундації Дім Рональда МакДональда в Україні на 
                тему сімейно орієнтованої медицини, липень 2021 року
            </p>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Наші досягення
            </h1>
        </div>
        
        <div className="px-[5%] grid grid-cols-3 gap-x-7 gap-y-10">
            <div className="flex flex-col gap-3 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/DSC_4412-1.jpg" alt="" width={400} 
                height={400} className="w-full" />
                <p className="text-xl font-semibold">
                    6 Сімейних кімнат
                </p>
                <p>
                    у найбільших дитячих лікарнях України, щоб батьки й діти були поруч
                </p>
            </div>
            <div className="flex flex-col gap-3 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/410182559_3266381733505950_5294772333796115794_n.jpg" alt="" width={400} 
                height={400} className="w-full" />
                <p className="text-xl font-semibold">
                    6 конференцій національного рівня
                </p>
                <p>
                    50 експертів, більше як 10 000 медиків залучено
                </p>
            </div>
            <div className="flex flex-col gap-3 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/6-4.jpg" alt="" width={400} 
                height={400} className="w-full" />
                <p className="text-xl font-semibold">
                    Навчальний курс
                </p>
                <p>
                    з сімейно орієнтованої медицини для студентів медзакладів
                </p>
            </div>
            <div className="flex flex-col gap-3 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/photo_2021-06-18_16-01-16-2.jpg" alt="" width={400} 
                height={400} className="w-full" />
                <p className="text-xl font-semibold">
                    9 відеокурсів
                </p>
                <p>
                    для медиків і  батьків на тему сімейно  орієнтованої медицини
                </p>
            </div>
            <div className="flex flex-col gap-3 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/VAS_2021.jpg" alt="" width={400} 
                height={400} className="w-full" />
                <p className="text-xl font-semibold">
                    4 тренінги
                </p>
                <p>
                    в найбільших дитячих лікарнях для лікарів, медичних сестер і братів
                </p>
            </div>
            <div className="flex flex-col gap-3 text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/McDonalds_Palm_02907.jpg" alt="" width={400} 
                height={400} className="w-full" />
                <p className="text-xl font-semibold">
                    Національна освітня кампанія
                </p>
                <p>
                    охопила більше як 20 000 000 контактів
                </p>
            </div>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Запрошуємо дізнатися більше з наших відеороликів
            </h1>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Для медиків
            </h1>
        </div>

        <div className="px-[5%] grid grid-cols-4 gap-7">
            <div className="flex flex-col gap-3">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/wZmQ7m95SdU?si=VJ8v-PaxQWYF7cEG" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen className="w-full max-h-[30vh]" />
                <p className="text-left">
                    Поширення сімейно орієнтованого підходу в дитячих лікарнях
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/9peb03xtNyQ?si=sQeVfC5b7Xgov1A-" 
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen 
                className="w-full max-h-[30vh]" />
                <p className="text-left">
                    Основи сімейно орієнтованого підходу
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/1lvlIk2v2HI?si=OoGEj_09XPYBKoC_" 
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen 
                className="w-full max-h-[30vh]" />
                <p className="text-left">
                    Профілактика емоційного вигорання
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/HJpGDutumsA?si=aif39UcsS9DpaO-E" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen className="w-full max-h-[30vh]" />
                <p className="text-left">
                    Як налагодити комунікацію між родинами і лікарями
                </p>
            </div>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Для батьків хворих дітей
            </h1>
        </div>

        <div className="px-[5%] grid grid-cols-4 gap-7">
            <div className="flex flex-col gap-3">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/A6lFsz2NCzg?si=JulZvEE_5p8xmJuA" 
                title="YouTube video player" frameBorder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
                web-share" referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen className="w-full max-h-[30vh]" />
                <p className="text-left">
                    Як батькам підтримувати дітей під час лікування
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <iframe width="560" height="315"
                src="https://www.youtube.com/embed/hSYXCuV8AVw?si=hKdoXkMP6CiH75kP" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen className="w-full max-h-[30vh]" />
                <p className="text-left">
                    Запитай у педіатра. Побудова довірливих стосунків між лікарями і батьками
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/XrCiO7N1OPU?si=wVXHO4fOdzlk-uPs" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen className="w-full max-h-[30vh]" />
                <p className="text-left">
                    Підготовка до візиту до лікаря
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/qKy0MKoMbC8?si=3slDFaiN8stTB7xX" 
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen 
                className="w-full max-h-[30vh]" />
                <p className="text-left">
                    Як повідомити дитині про важкий діагноз
                </p>
            </div>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Дізнайтеся більше про сімейно орієнтовану медицину
            </h1>
        </div>

        <div className="px-[5%] flex flex-row gap-10 items-center">
            <div className="w-1/2 flex flex-col gap-0">
                <Link href="https://www.ipfcc.org/about/pfcc.html">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/ipfcc.png" alt="" 
                    width={400} height={400} className="w-full m-auto"/>
                </Link>
                <p className="text-lg text-left m-auto">
                    Інститут пацієнто й сімейно орієнтованої медицини
                </p>
            </div>
            <div className="w-1/2 flex flex-col gap-0">
                <Link href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2014/02/effective-patient-physician-communication">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/acog.png" alt="" 
                    width={400} height={400} className="w-full m-auto"/>
                </Link>
                <p className="text-lg text-left m-auto">
                    Американський коледж акушерів і гінекологів
                </p>
            </div>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Про Фундацію Дім Рональда МакДональда в Україні
            </h1>
        </div>

        <div className="px-[5%] flex flex-row items-center gap-5">
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/%D1%81%D0%B5%D1%81%D1%82%D1%80%D0%B8%D1%87%D0%BA%D0%B82-1.jpg"
                alt="" width={400} height={400} className="w-full" />
            </div>
            <div className="w-1/2 text-left text-xl">
                <p>
                    В Україні Фундація Дім Рональда МакДональда розпочала свою діяльність 2016 року. 
                    Ми пишаємося бути частиною глобальної організації, маючи змогу підтримувати 
                    українські сім’ї в найважчі для них часи. 2017 року відкрито першу Сімейну 
                    кімнату в “Охматдит” Центру дитячої медицини у Львові. За весь час відкрито 
                    6 Сімейних кімнат у найбільших дитячих лікарнях України. З початком війни 
                    Фундація започаткувала гуманітарні програми, надавши допомогу на 120 млн грн. 
                    Для розвитку системи охорони здоров’я Фундація реалізовує навчальні програми 
                    для лікарів на тему сімейно орієнтованої медицини: щороку проводить всеукраїнські 
                    конференції, реалізовує курси з підвищення кваліфікації медиків на порталі НСЗУ, 
                    розробила серію відеокурсів для лікарів і батьків на своєму ютуб-каналі, 
                    реалізовує навчальний курс в одному з найбільших медичних ЗВО України.
                </p>
            </div>
        </div>
    </div>
  )
}

