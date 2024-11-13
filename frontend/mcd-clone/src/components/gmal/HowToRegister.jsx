import React from 'react'
import Image from 'next/image';

export const HowToRegister = () => {
  return (
    <div className="flex flex-col gap-7 mt-[5%]" 
    id="how-to-register">
      <div className="text-center">
        <h1 className="text-2xl font-extrabold">
            Як зареєструватись в застосунку?
        </h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className='flex flex-col gap-2 max-w-1/3'>
            <Image src="/how-to-register-1.jpeg" 
            alt="How To register" width={400} height={400} />
            <div className="text-center max-w-[50%] ml-[25%] 
            flex flex-col gap-3">
                <p className="font-extrabold">
                    Крок 1:
                </p>   
                <p>
                    Увійдіть в «Обліковий запис» та натисніть 
                    «Створити обліковий запис»
                </p>
            </div>
        </div>
        <div className='flex flex-col gap-2 max-w-1/3'>
            <Image src="/how-to-register-2.jpeg" 
            alt="How To register" width={400} height={400} />
            <div className="text-center max-w-[50%] ml-[25%] 
            flex flex-col gap-3">
                <p className="font-extrabold">
                    Крок 2:
                </p>   
                <p>
                    Введіть інформацію про себе та натисніть 
                    «Створити обліковий запис»
                </p>
            </div>
        </div>
        <div className='flex flex-col gap-2 max-w-1/3'>
            <Image src="/how-to-register-3.jpeg" 
            alt="How To register" width={400} height={400} />
            <div className="text-center max-w-[50%] ml-[25%] 
            flex flex-col gap-3 mt-[18%]">
                <p className="font-extrabold">
                    Крок 3:
                </p>   
                <p>
                    Вітаємо! Ви успішно зареєструвалися!
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

