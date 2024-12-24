import Image from 'next/image'
import React from 'react'


export const FeedbackFormContainer = () => {
  return (
    <div className="px-[5%] py-[5%] flex flex-col gap-8">
        <h1 className='text-center text-5xl font-extrabold'>
            Залиште свій відгук
        </h1>
        <div className="w-full h-[90vh] flex flex-row justify-between px-[5%] 
        relative bg-[url('https://ukraine.mcdonalds.ua/macdonalds/macResponse/img/response-head-bg.png')]
        bg-cover bg-center bg-no-repeat">
            <div className="max-w-[40%] flex flex-col gap-2 absolute 
            font-extrabold text-5xl top-[40%] left-[20%]">
                <h1>Є запитання?</h1>
                <h1>Є відповідь!</h1>
            </div>
            <Image src="https://ukraine.mcdonalds.ua/macdonalds/macResponse/img/response-head-img.png" alt="" 
            className="absolute bottom-0 right-10" width={350} height={350} />
        </div>
        <div className="text-center flex flex-col gap-2">
            <h1 className="font-extrabold text-4xl">
                Заповніть форму
            </h1>
            <h1 className="text-3xl font">
                Зірочкою (<span className="text-red-500">*</span>) позначено поля
                для обов'язкового заповнення
            </h1>
        </div>
        <form className="flex flex-col gap-5 w-full">
            <div className="flex flex-row justify-between gap-7 w-full">
                <div className="flex flex-col gap-2 w-1/3">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Ім'я
                        <span className="text-red-500">*</span>
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full" type="text" placeholder='Іван'/>    
                </div>

                <div className="flex flex-col gap-2 w-1/3">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Ваш номер телефону
                        <span className="text-red-500">*</span>
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full" type="phone" placeholder="+380(__)___-__-__"/>    
                </div>

                <div className="flex flex-col gap-2 w-1/3">
                    <label className="flex flex-row items-center gap-0 text-left">
                        Ваш e-mail
                        <span className="text-red-500">*</span>
                    </label>
                    <input className="border-2 border-yellow-400 outline-none rounded-md 
                    h-[50px] px-5 w-full" type="email" placeholder="______@___"/>    
                </div>
            </div>
        </form>
    </div>
  )
}

