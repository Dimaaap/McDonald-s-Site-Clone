import Image from 'next/image'
import React from 'react'

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
      <div className="p-[5%] grid grid-cols-3 gap-12 mt-[5%]">
        
      </div>
    </div>
  )
}