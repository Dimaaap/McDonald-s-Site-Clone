import Image from 'next/image'
import React from 'react'

export const DonateMainSection = () => {
  return (
    <div className="bg-blue-400 flex flex-row gap-7 w-full py-[5%]">
        <div className="w-1/2 flex flex-col gap-5 px-[10%]">
            <div className="text-4xl font-extrabold text-white text-left">
                <h1>Ваша небайдужість підтримує родини у найважчі часи</h1>
            </div>
            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%BC%D0%B0%D0%BC%D0%B0-%D1%86%D1%96%D0%BB%D1%83%D1%94-%D0%B4%D0%B8%D1%82%D0%B8%D0%BD%D1%83.jpg"
            alt="" width={400} height={800} className="w-full h-[full]" />
        </div>
        <div className="w-[40%] bg-white flex flex-col gap-5 p-[1%]">
            <div className="flex flex-col gap-5">
                <h1 className="text-lg font-extrabold text-left uppercase">
                    Оберіть періодичність допомоги
                </h1>
                <div className="flex flex-row gap-3">
                    <button className="max-w-1/2 border-2 border-blue-400 
                    rounded-sm px-3 py-1 text-center bg-blue-400 hover:border-blue-500
                    hover:bg-blue-500 text-white text-lg font   -extrabold 
                    uppercase">
                        Разово
                    </button>
                    <button className="max-w-1/2 border-2 border-blue-400 
                    rounded-sm px-3 py-1 text-center bg-white hover:border-blue-500
                    hover:bg-white/80 text-blue-400 text-lg font-extrabold 
                    uppercase">
                        Щомісяця
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-lg font-extrabold text-left uppercase">
                    Оберіть суму допомоги
                </h1>
                <div className="grid grid-cols-4 gap-3">
                    <button className="w-full border-2 border-blue-400 
                    rounded-sm px-3 py-1 text-center bg-blue-400 hover:border-blue-500
                    hover:bg-blue-500 text-white text-md font-extrabold 
                    uppercase">
                        100 грн
                    </button>
                    <button className="border-2 border-blue-400 
                    rounded-sm px-3 py-1 text-center bg-white hover:border-blue-500
                    hover:bg-white/80 text-blue-400 text-md font-extrabold 
                    uppercase">
                        500 грн
                    </button>
                    <button className="border-2 border-blue-400 
                    rounded-sm px-3 py-1 text-center bg-white hover:border-blue-500
                    hover:bg-white/80 text-blue-400 text-md font-extrabold 
                    uppercase">
                        1000 грн
                    </button>
                    <button className="border-2 border-blue-400 
                    rounded-sm px-3 py-1 text-center bg-white hover:border-blue-500
                    hover:bg-white/80 text-blue-400 text-md font-extrabold 
                    uppercase">
                        5000 грн
                    </button>
                </div>
            </div>
            <input type="text" className="max-w-[30%] mx-auto h-[50px] 
            border-b-2 border-blue-400 outline-none mt-3 
            text-4xl font-extrabold text-center text-blue-400 py-0" 
            defaultValue={100} />
            <button className="w-full rounded-md text-white font-extrabold 
            text-lg text-center py-3 px-5 bg-red-500 hover:bg-red-600 mt-7">
                Зробити внесок
            </button>
            <div className="mt-3">
                <p>
                    Якщо ви хочете залишити інформацію, щоб ми знали, кому дякувати 
                    (не обов'язково):
                </p>
            </div>
            <form className="w-[80%] mx-auto flex flex-col gap-5">
                <input className="border border-black border-dashed 
                rounded-3xl text-center outline-none
                py-5 h-[40px] w-full" 
                type='text' placeholder="Ім'я" />
                <input className="border border-black border-dashed 
                rounded-3xl text-center outline-none
                py-5 h-[40px] w-full" 
                type='text' placeholder="E-mail" />
                <input className="border border-black border-dashed 
                rounded-3xl text-center outline-none
                py-5 h-[40px] w-full" 
                type='text' placeholder="Телефон" />
            </form>
            <div className="text-xl font-extrabold mt-3">
                У 140+ криптовалютах з будь-яких гаманців:
            </div>
            <button className="text-xl font-extrabold text-white bg-blue-800 
            hover:bg-gray-500 rounded-md p-4 w-[35%]">
                Допомогти
            </button>
            <div className="text-gray-500 text-[0.7rem]">
                Пожертвування будуть скеровані на реалізацію програм БО 
                «Фундація Дім Рональда МакДональда в Україні» задля 
                підтримки дітей і їхніх родин, а саме на програми 
                «Сімейна кімната Рональда МакДональда» і «Дім Рональда 
                МакДональда». Для функціонування програми «Сімейна 
                кімната Рональда МакДональда» у державних дитячих лікарнях 
                України ініційовано збір на суму 1 000 000 грн. Для реалізації 
                будівництва «Дому Рональда МакДональда» збір ініційовано 
                на суму 5 000 000 грн. Збір коштів триває протягом періоду 
                січень 2024 - грудень 2025 року. Сплачуючи благодійний 
                внесок на цьому сайті, особа, яка здійснює пожертвування на 
                вищезазначені програми, дає згоду на їхній перерозподіл/
                використання в інших програмах БО «Фундація Дім Рональда 
                МакДональда в Україні», у разі якщо вищезазначені програми 
                не буде реалізовано або за наявності залишків пожертвувань. 
                Також пожертвувач погоджується з тим, що сума пожертвування не 
                підлягає поверненню.
            </div>
        </div>
    </div>
  )
}
