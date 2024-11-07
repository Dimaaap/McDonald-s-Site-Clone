import React from 'react'

import { FAQCart } from './shared'
import { CartsRoute } from '@/store'

export const FAQSection = () => {
  return (
    <div className="w-[90%] ml-[5%] flex flex-row gap-5 mt-20 mb-5">
        <FAQCart imageSrc="/work_in_mcd.jpeg" 
        header="Робота в МакДональдз" 
        text="У нас ти зможеш поєднувати навчання й роботу, 
        зустрічатися із друзями та мати вдосталь часу для 
        родини!" 
        btnHref={CartsRoute.WORK}
        isNeedMargin={false} />


        <FAQCart imageSrc="/open_restaurants.jpeg" 
        header="Завітати чи замовити?Ось у чому питання!"
        text="Тут відповідь, який заклад зараз працює для 
        відвідування і на доставку!"
        btnHref={CartsRoute.RESTAUTANT_CHECK} />

        <FAQCart imageSrc="/foundation.jpeg" 
        header="Фундація дім Рональда МакДональда в Україні"
        text="Фундація працює в Україні з 2016 року й 
        утілює програми, що покращують здоров’я дітей."
        btnHref={CartsRoute.FOUNDATION}
        />
    </div>
  )
}