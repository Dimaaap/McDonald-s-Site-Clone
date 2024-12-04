import React from 'react'

export const HelpMainSection = () => {
  return (
    <div className="bg-[url('https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/bgs/bg-donate.svg')]
    bg-cover bg-center bg-no-repeat h-screen w-full justify-center px-[5%] py-[5%]">
      <div className="flex flex-col gap-5 w-[50%] mx-auto">
        <h1 className="text-center text-4xl font-extrabold">
            Час ставати доброголіком!
        </h1>
        <div className="text-left flex flex-col gap-1 text-[1.1rem]">
            <p>Як підтримати дітей у Сімейних Кімнатах?</p>
            <p>1. Введіть комфортну для вас суму допомоги</p>
            <p>2. Натисніть «подарувати»</p>
            <p>3. Сплатіть</p>
        </div>
        <form className="flex flex-col gap-5">
            <div className="flex flew-row justify-between gap-10">
                <input className="w-[70%] shadow-lg rounded-lg h-[45px] 
                px-7 border-none outline-none font-extrabold text[1.2rem]"
                placeholder="Введіть суму" />
                <button type="submit" className="w-[30%] bg-yellow-400 
                hover:bg-yellow-500 text-white font-extrabold px-4 py-2 text-center 
                rounded-lg">
                    Подарувати
                </button>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <input type="checkbox" className="rounded-sm w-[20px]
                h-[20px] cursor-pointer" id="want-help" name="want-help"/>
                <label className="text-[1.1rem] cursor-pointer" htmlFor='want-help'>
                    Хочу допомагати регулярно
                </label>
            </div>
        </form>
      </div>
    </div>
  )
}
