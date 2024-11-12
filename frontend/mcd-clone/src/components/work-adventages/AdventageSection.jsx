import Image from 'next/image'
import React from 'react'
import { CredoItem, FillAnket } from '../shared'
import { FAQStore, ToKnowStore } from '@/store'
import Link from 'next/link'

export const AdventageSection = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="mt-5 bg-[#ffbc0d] w-full px-8 py-5 
      relative h-[60vh] flex flex-row">
        <div className="w-1/2">
            <Image src="/main_head_sun.png" alt="main_head_sun"
            width={300} height={300} className="absolute left-[10%]" /> 
        </div>
        <div className="w-1/2">
            <CredoItem />
        </div>
      </div>
      <div className="w-[70%] ml-[15%]">
        <p className="text-2xl my-5">
        Ми пишаємося, що у нас <b>працюють люди із різними 
        історіями та досвідом</b>. 
        Не важливо, що ти робив у минулому, ми пропонуємо 
        роботу, де в тебе є можливість розкрити свій потенціал.
        </p>
        <div className="h-[3px] rounded-md w-[100px] bg-yellow-400 
        -mt-5 -ml-5 mb-5" />
      </div>
      <div className="mt-5 bg-[#ffbc0d] w-full px-[10%] items-center
      relative h-[25vh] flex flex-row gap-12">
        <div className="">
            <h1 className="text-2xl font-extrabold">
                МАКДОНАЛЬДЗ ЧЕКАЄ НА ТВОЇ ТАЛАНТИ!
            </h1>
        </div>
        <div>
            <FillAnket />
        </div>
        <div className="absolute right-[12%] bottom-5">
            <Image src="/main_head_bottom_dandruff.png" 
            alt="main_head_bottom_dandruff" 
            width={120} height={120} className="overflow-clip" />
        </div>
      </div>
      <div className="text-center w-full text-2xl my-8 
      justify-center">
        У нас ти самостійно керуєш власним графіком
        <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
        ml-[47.5%] mt-[1%]" />
      </div>
      <div className="flex flex-row my-8 px-[10%] gap-10">
        <div className="w-1/3 flex flex-col gap-5">
            <Image src="/clock.png" alt="clock" width={120}
            height={120} className="ml-[25%] mb-5" />
            <p className="text-lg">
                Вирішуй, скільки годин на тиждень (але не менше 4-х) 
                ти можеш присвятити роботі.
            </p>
            <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
            -ml-5 -mt-3" />
        </div>
        <div className="w-1/3 flex flex-col gap-5">
            <Image src="/sun.png" alt="clock" width={120}
            height={120} className="ml-[25%] mb-5" />
            <p className="text-lg">
                Обирай, яка зміна тобі підходить найкраще - 
                і ми створимо для тебе комфортний графік.
            </p>
            <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
            -ml-5 -mt-3" />
        </div>
        <div className="w-1/3 flex flex-col gap-5">
            <Image src="/faces.png" alt="clock" width={120}
            height={120} className="ml-[25%] mt-5" />
            <p className="text-lg mt-8 w-[110%]">
            У нас ти зможеш поєднувати навчання й роботу, 
            зустрічатися із друзями та мати вдосталь часу 
            для родини!
            </p>
            <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
            -ml-5 -mt-3" />
        </div>
    </div>
    <div className="w-full px-[10%] flex flex-row gap-10 
    items-center relative mt-10 mb-10 h-[25vh] bg-black/85">
        <div className="absolute mb-5">
            <Image src="/mouse.png" alt="mouse" width={120}
            height={120} />
        </div>
        <div className="ml-[23%]">
            <FillAnket />  
        </div>
        <div className="ml-[5%]">
            <h1 className='text-2xl font-extrabold 
            text-yellow-400'>
                СПРОБУЙ ТА ПЕРЕКОНАЙСЯ САМ!
            </h1>
        </div>
    </div>
    <div className="text-center w-full text-2xl my-8 
      justify-center">
        Працюєш у темпі - зростаєш швидко
        <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
        ml-[47.5%] mt-[1%]" />
    </div>
    <div className="flex flex-row px-[10%] gap-10 mb-5">
        <div className="w-1/2">
            <p className="text-lg">
                Зазвичай у МакДональдз робота «кипить».
                Та ми допоможемо тобі швидко всього навчитися. 
                Зростатимеш професійно та особисто.
            </p>
            <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
            mt-[3%] -ml-[3%]" />
            <p className="text-lg mt-[3%]">
                МакДональдз — одна із тих компаній, де ти отримуєш 
                можливість побудувати кар'єру, незалежно від 
                попереднього досвіду.
            </p>
        </div>
        <div className="w-1/2 -mt-[2%]">
            <Image src="/main_growth_photo.png" alt="main_growth_photo"
            width={400} height={400} />
        </div>
    </div>
    <div className="w-full px-[10%] flex flex-row gap-10 
    items-center relative mt-10 mb-10 h-[25vh] bg-yellow-400">
        <div className="absolute left-[40%]">
            <Image src="/star.png" alt="star" width={130} height={130} />
        </div>
        <div className="ml-[55%]">
            <FillAnket />
        </div>
    </div>
    <div className="text-center w-full text-2xl my-8 
      justify-center">
        Команда завжди підтримає
        <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
        ml-[47.5%] mt-[1%]" />
    </div>
    <div className="flex flex-row gap-10 px-[10%] mb-5">
        <div className="w-1/2">
            <Image src="/main_support_photo.png" alt="main_support_photo" 
            width={400} height={400} />
        </div>
        <div className="w-1/2 mt-[5%]">
            <p className="text-lg">
                Дружба починається у МакДональдз
                Не хвилюйся через брак досвіду. Тут тебе завжди 
                підтримають та дадуть пораду.
            </p>
            <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
            mt-[3%] -ml-[3%]" />
            <p className="text-lg mt-[3%]">
                До того ж з тобою буде інструктор із навчання, який допоможе 
                опанувати основні навички роботи в ресторані.
            </p>
        </div>
    </div>
    <div className="w-full px-[10%] flex flex-row gap-10 
    items-center relative mt-10 mb-10 h-[25vh] bg-black/85">
        <div className="ml-[10%]">
            <FillAnket />
        </div>
        <div className="absolute left-[55%]">
            <Image src="/heart.png" alt="star" width={140} height={140} />
        </div>
    </div>
    <div className="text-center w-full text-2xl my-8 
      justify-center">
        Правила додають впевненості
        <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
        ml-[47.5%] mt-[1%]" />
    </div>
    <div className="flex flex-row gap-10 px-[10%] mb-5">
        <div className="w-1/2">
            <p className="text-lg">
                Правила — це те, що робить кожного відвідувача наших закладів 
                впевненим у якості й смаку наших страв, а працівників — у тому, 
                що вони зможуть розвиватися професійно та досягнуть високих 
                результатів.
            </p>
            <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
            mt-[3%] -ml-[3%]" />
            <p className="text-lg mt-[3%]">
                Так, одне з головних наших правил — це захист кожного працівника 
                нормами трудового законодавства України.
            </p>
            <p className="text-2xl font-extrabold mt-[3%]">
                У цьому ми — безкомпромісні
            </p>
            <div className="h-[3px] rounded-md w-[180px] bg-yellow-400 
            mt-[1%] ml-[35%]" />
        </div>
        <div className="w-1/2">
            <Image src="/main_rules_photo.png" alt="main_rules_photo" 
            width={400} height={400} />
        </div>
    </div>
    <div className="w-full px-[10%] flex flex-row gap-10 
    items-center relative mt-10 mb-10 h-[25vh] bg-yellow-400
    text-center justify-center">
        <h1 className="text-xl font-extrabold">
            СПРОБУЙ ТА ПЕРЕКОНАЙСЯ САМ!
        </h1>
        <div className="">
            <FillAnket />
        </div>
    </div>
    <div className="text-center w-full text-2xl my-8 
      justify-center">
        Місце, де стаєш професіоналом
        <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
        ml-[47.5%] mt-[1%]" />
    </div>
    <div className="flex flex-row gap-10 px-[10%] mb-5">
        <div className="w-1/2">
            <Image src="/main_place_photo.png" alt="main_place_photo" 
            width={400} height={400} />
        </div>
        <div className="w-1/2">
            <p className="text-lg">
                Ми готові підтримати тебе в досягненні професійного успіху.
                Щороку тисячі людей в усьому світі знаходять свою першу роботу 
                в МакДональдз.
            </p>
            <div className="h-[3px] rounded-md w-[65px] bg-yellow-400 
            mt-[3%] -ml-[3%]" />
            <p className="text-lg mt-[3%]">
                Усі директори наших закладів в Україні розпочали свій професійний 
                шлях у компанії зі звичайних працівників.
            </p>
            <p className="text-2xl font-extrabold mt-[3%]">
                І ти теж зможеш! Не зволікай!
            </p>
            <div className="h-[3px] rounded-md w-[180px] bg-yellow-400 
            mt-[1%] ml-[35%]" />
        </div>
    </div>
    <div className="flex flex-row gap-5 mt-16 mb-10 px-[10%]">
        <div className="w-1/4">
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center
                bg-yellow-400" 
                href="#">
                Заповнити анкету
            </Link>
        </div>
        <div className="w-1/4">
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center
                bg-yellow-400" 
                href={ FAQStore.WHY_MCD }>
                Чому МакДональдз
            </Link>
        </div>
        <div className="w-1/4">
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center 
            bg-yellow-400" 
            href={ ToKnowStore.WORK_CALC }>
                Розрахувати ЗП
            </Link>
        </div>
        <div className="w-1/4">
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center 
            bg-yellow-400" 
            href={ FAQStore.FAQ }>
                Маєш запитання?
            </Link>
        </div>
    </div>
</div>
)
}

