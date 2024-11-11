"use client"

import React, { useState } from 'react'
import { AnswerText, FAQHeader, QuestionHeader } from '../shared'
import { faqElements, useFAQHandler } from '@/store'
import Link from 'next/link'


export const FAQContainer = () => {
    
    const { activeHeader, setActiveHeader } = useFAQHandler()

  return (
    <div className="w-[84%] ml-[8%] flex flex-col gap-3 mt-5">
        <div className="bg-gray-200 flex flex-row gap-0">
            <FAQHeader text="Працевлаштування" 
            isActive={ activeHeader === 1 } 
            onClick={ () => setActiveHeader(1) } />  

            <FAQHeader text="Загальні запитання" 
            isActive={ activeHeader === 2 }
            onClick={ () => setActiveHeader(2) } />
            
            <FAQHeader text="Особливості роботи" 
            isActive={ activeHeader === 3 }
            onClick={ () => setActiveHeader(3) } />
            
            <FAQHeader text="Оплата праці" 
            isActive={ activeHeader === 4 }
            onClick={ () => setActiveHeader(4) } />
            
            <FAQHeader text="Інше" 
            isActive={ activeHeader === 5 }
            onClick={ () => setActiveHeader(5) } />
        </div>
        <div className="flex flex-col gap-3">
            <QuestionHeader text="Як влаштуватись на роботу 
            в Макдональдз?" isEven={ true } />
            <AnswerText text={
                <>
                    <p className="text-xl">
                        Для цього Вам необхідно заповнити анкету 
                        для працевлаштування. Ви можете подати 
                        її двома способами: заповнити онлайн-анкету
                        на {" "}
                        <Link href="#" className="text-blue-500">
                            нашому сайті
                        </Link> {" "}
                        або заповнити паперову анкету безпосередньо у закладі, 
                        який Вас цікавить, і віддати її менеджеру закладу.
                    </p>
                    <p className="text-xl">
                        Після заповнення анкету розглянуть менеджери закладу.
                    </p>
                </>
            } />
            <QuestionHeader 
            text="Як довго триває процес 
            працевлаштування до Макдональдз?" 
            isEven={ false } />
            <QuestionHeader 
            text="Чи можу я заповнити паперову анкету замість 
            електронної?" isEven={ true } />
            <QuestionHeader 
            text="Чи можна влаштуватись на роботу, 
            якшо мені немає 18 років?" isEven={ false } />
            <QuestionHeader 
            text="Я можу заповнити більше ніж 1 анкету?" 
            isEven={ true }/>
        </div>
    </div>
  ) 
}