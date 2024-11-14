import Image from 'next/image'
import React from 'react'

export const McCafeSection = () => {
  return (
    <div className="flex flex-col gap-7 px-[5%] mt-[5%]">
      <div className="w-full">
        <Image src="/maccafe-banner.jpeg" alt="Maccafe"
        width={800} height={800} className="w-full" />
      </div>
      <div className="text-center font-extrabold flex flex-col gap-3">
        <h1 className="text-2xl">
          Твій час із McCafe
        </h1>
        <p>
          Ви любите мріяти, а ми — втілювати ваші мрії 
          в реальність. Уявіть: ви, кава McCafe та 
          час для себе із жовтим стаканчиком, 
          наповненим запашною 100 % арабікою. 
          Велика чи маленька — вибирати вам, але 
          головне залишається незмінним: McCafe — 
          справді смачна кава. Просто!
        </p>
      </div>
      <div className="w-full">
        <Image src="/mccafe2.jpeg" alt="MacCafe"  
        width={800} height={800} className="w-full" />
      </div>
      <div className="text-center font-extrabold flex 
      flex-col gap-3">
        <h1 className='text-2xl'>
          Усе, як ви любите
        </h1>
        <p>
          Ми дослідили ваші уподобання й змішали декілька 
          сортів кавових зерен. Так народився бленд McCafe. 
          Це зустріч зерен 100 % арабіки з Колумбії, Бразилії, 
          Перу та Гондурасу. А для тих, хто любить «білу» 
          каву, ми додаємо лише органічне молоко з більшою 
          жирністю — 3,2 %.
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-[3%]">
        <div className="w-1/2">
          <Image src="/coffee.jpeg" alt="Coffee" width={400} 
          height={400} className="w-full" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-extrabold mb-[3%]">
            То яка вона на смак?
          </h1>
          <p>
            У жовтому стаканчику на тебе чекає кава середнього 
            ступеня обсмаження, з приємним і тривалим 
            післясмаком солодких червоних фруктів, шоколаду 
            й карамелі.
          </p>
        </div>
      </div>
      <div className="text-center font-extrabold text-3xl">
        <h1>
          Ані слова більше — час смакувати!
        </h1>
      </div>
    </div>
  )
}

