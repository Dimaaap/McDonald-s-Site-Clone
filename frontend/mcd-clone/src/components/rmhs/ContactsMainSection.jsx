import React from 'react'
import Image from 'next/image'

export const ContactsMainSection = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url('https://rmhc.org.ua/wp-content/uploads/%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0-1.jpg')]
      bg-center bg-cover bg-no-repeat" />
      <div className="flex flex-col gap-7 px-[5%]">
        <div className="text-center mt-5 flex flex-col gap-[3%]">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Контакти 
            </h1>
            <h1 className="text-2xl font-bold text-blue-300 mt-[2%] max-w-[30%]
            mx-auto">
                Благодійна організація “Фундація Дім Рональда 
                МакДональда в Україні”
            </h1>
        </div>
        <div className="mt-[5%] flex flex-col gap-5 max-w-[40%] mx-auto">
            <div className="flex flex-col gap-3">
                <Image src="https://rmhc.org.ua/wp-content/uploads/Companionship.jpg" 
                alt="" width={100} height={100} className="mx-auto" />
                <p className="text-2xl font-bold text-center text-blue-300">
                    info@rmhc.org.ua
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <Image src="https://rmhc.org.ua/wp-content/uploads/families-new.jpg" 
                alt="" width={100} height={100} className="mx-auto" />
                <p className="text-2xl font-bold text-center text-blue-300">
                    +380686122615
                </p>
            </div>
        </div>

        <div className="text-center mt-5 flex flex-col gap-[3%]">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Для запитань і пропозицій:
            </h1>
        </div>
        <form className="w-[35%] mx-auto mt-[3%] bg-blue-50 px-5 py-8 
        rounded-md flex flex-col gap-7">
            <div className="flex flex-col gap-2 w-full">
                <label>
                    Ім'я (обов'язково):
                </label>
                <input className="h-[50px] outline-none border border-black 
                rounded-md w-full px-5" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>
                    Телефон (обов'язково):
                </label>
                <input className="h-[50px] outline-none border border-black 
                rounded-md w-full px-5" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>
                    Емейл (обов'язково):
                </label>
                <input className="h-[50px] outline-none border border-black 
                rounded-md w-full px-5" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>
                    Ваше повідомлення (обов'язково):
                </label>
                <textarea className="resize-none w-full border border-1 
                border-black outline-none
                px-5 py-2" rows={7} />
            </div>
            <button type="submit" className="bg-yellow-300 rounded-md px-5 py-2 
            text-center w-[40%] text-xl text-blue-600 hover:bg-yellow-400 
            font-bold">
                Надіслати
            </button> 
        </form>
      </div>
    </div>
  )
}
