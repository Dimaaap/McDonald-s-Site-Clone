import Image from 'next/image'
import React from 'react'

export const WishForm = () => {
  return (
    <div className="bg-blue-600/80 text-center px-[5%] py-[6%] w-full 
    flex flex-col gap-7 relative" id="contacts">
        <h1 className="text-4xl font-extrabold text-center text-white">
            Маєте питання чи ідеї, як допомогти?
        </h1>
        <h1 className="text-4xl font-extrabold text-center text-white">
            Напишіть!
        </h1>
        <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc//img/icons/icon-contact-yellow-left.svg"
        alt="" width={200} height={200} className="absolute z-10 top-[30%] 
        left-[20%]" />
        <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc//img/icons/icon-contact-red-right.svg"
        alt="" width={200} height={200} className="absolute z-10 top-[48%] 
        left-[60%]" />
        <Image src="https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc//img/icons/icon-contact-red-left.svg"
        alt="" width={150} height={150} className="absolute z-1 top-[30%] 
        left-[28%]" />

        <form className="w-[50%] mx-auto mt-[5%] z-20 flex flex-col gap-5">
            <input className="w-full rounded-lg border-none h-[45px] px-7 
            text-black text-extrabold" 
            placeholder="Ваше ім'я" type="text" />
            <input className="w-full rounded-lg border-none h-[45px] px-7 
            text-black text-extrabold" 
            placeholder="Ваш email" type="text" />
            <textarea className="resize-none border-none px-7 py-3 w-full rounded-md" 
            rows={10} placeholder='Ваше повідомлення' />
            <button type="submit" className="text-white font-extrabold
            text-center rounded-lg w-[40%] px-4 py-3 bg-red-600 hover:bg-red-700
            mx-auto">
                Відправити
            </button>
        </form>
    </div>
  )
}

