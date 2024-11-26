import React from 'react'
import Image from 'next/image';
import { PersonalCard } from '../shared';

export const TeamMainSection = () => {
  return (
    <div>
      <div className="p-[5%] flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-extrabold text-blue-400">
            Команда Фундації Дім Рональда МакДональда в Україні
        </h1>
        <h1 className="text-2xl font-bold text-blue-400">
            Кожна дитина заслуговує на здорове життя та щасливе майбутнє
        </h1>
      </div>
      <div className="flex flex-row justify-between gap-12 mt-[5%]
      p-[5%]">
        <div className="w-1/2">
            <Image src="https://rmhc.org.ua/wp-content/uploads/239A2157-1-1-1-1.jpg"
            alt="" width={400} height={400} className="w-full" />
        </div>
        <div className="text-2xl w-1/2">
            <p>      
                Наша команда — це люди різних професій з різних куточків 
                України, об’єднані спільною метою — підтримати дітей і 
                їхні родини у найважчі часи. Щира посмішка малечі та її 
                батьків — те, що окриляє й надихає кожного з нас.
            </p>
        </div>
      </div>
      <div className="p-[5%] grid grid-cols-3 gap-3 mt-[3%] gap-y-10">
        <PersonalCard imageSrc="galyna-solovey.jpg" name="Галина Соловей"
        position="Директорка" />

        <PersonalCard imageSrc="olena-halchak.jpg" name="Олена Гальчак"
        position="Менеджерка програм" />

        <PersonalCard imageSrc="anna_vlasenko.jpg" name="Анна Власенко"
        position="Менеджерка з фандрейзингу" />

        <PersonalCard imageSrc="elnara_imanova.jpg" name="Ельнара Іманова"
        position="Керівниця напрямку комунікацій" />

        <PersonalCard imageSrc="olena_markova.jpg" name="Олена Маркова" 
        position="Асистентка відділу комунікацій" />

        <PersonalCard imageSrc="iryna_danylovska.jpg" name="Ірина Даниловська"
        position="Головна бухгалтерка" />
      </div>
      <div className="p-[5%] flex flex-col gap-10">
        <h1 className="text-4xl font-extrabold text-blue-300 text-center">
          Для запитань і пропозицій:
        </h1>
        <form className="w-[35%] m-auto bg-blue-50 px-5 py-10 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label>
              Ім'я (обов'язково)
            </label>
            <input type="text" className="h-[45px] w-full px-5 border border-black" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              Телефон (обов'язково)
            </label>
            <input type="text" className="h-[45px] w-full px-5 border border-black" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              Емейл (обов'язково)
            </label>
            <input type="text" className="h-[45px] w-full px-5 border border-black" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              Ваше повідомлення (обов'язково)
            </label>
            <textarea cols={10} rows={5} className="border border-black 
            px-5 py-3 resize-none" />
          </div>
          <button type="submit" className="bg-blue-800 hover:bg-gray-500 
          max-w-[35%] px-5 py-3 text-white font-bold text-center rounded-md">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  )
}