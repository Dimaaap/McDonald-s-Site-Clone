"use client"

import React, { useState } from 'react'
import Link from "next/link";
import { AnswerQuestion, FAQHeader } from '../shared'
import { faqElements, FAQStore, ToKnowStore, useFAQHandler } from '@/store'


export const FAQContainer = () => {
    
    const { activeHeader, setActiveHeader } = useFAQHandler()
    
    const [openAnswerId, setOpenAnswerId] = useState(null);

    const handleToggleAnswer = (id) => {
        setOpenAnswerId(openAnswerId === id ? null : id);
    }

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
        <div className="flex flex-col gap-3 mb-[5%]">
            { faqElements.map((element) => (
                element.section === activeHeader ? (
                    <AnswerQuestion
                    key={ element.id }
                    headerText={ element.ans_text }  
                    isEven={ element.isEven }         
                    textContainer={ element.innerText }
                    isShow={ openAnswerId === element.id }
                    isTextShow={ openAnswerId === element.id }
                    onClick={ () => handleToggleAnswer(element.id) }
                />
                ): null
            )) }
        </div>
        <div className="mt-3 flex flex-row gap-5 mb-[5%]">
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center
            bg-yellow-400" 
            href={ FAQStore.WHY_MCD }>
                Чому МакДональдз
            </Link>
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center 
            bg-yellow-400" 
            href={ ToKnowStore.WORK_CALC }>
                Розрахувати ЗП
            </Link>
            <Link className="rounded-sm text-[1.3rem] p-4 w-1/3 text-center 
            bg-yellow-400" 
            href={ FAQStore.FAQ }>
                Маєш запитання?
            </Link>
        </div>
    </div>
  ) 
}