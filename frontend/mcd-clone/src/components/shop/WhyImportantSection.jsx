import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AnimationTriangles } from '../shared'

export const WhyImportantSection = () => {
  return (
     <div className="p-[5%] bg-gray-100 
     -mt-[5%] relative overflow-hidden">
        <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/04/photo-screen-4-2.png"
        alt="" width={400} height={400} className="absolute" />
        <div className="flex flex-row gap-7">
            <div className="w-1/2">
                <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/04/photo-screen-4-2.png"
                alt="" width={500} height={500} className="w-full h-full scale-100" />
            </div>
            <div className="w-1/2 flex flex-col gap-5 text-left relative z-20">
                <AnimationTriangles firstPage={false} />
                <h1 className="text-4xl font-extrabold z-20">
                    Чому #ГодиниДляРодини такі важливі
                </h1>
                <p className="z-20">
                    В усьому світі Фундація Дім Рональда МакДональда допомагає 
                    батькам та дітям бути разом у лікарнях. Бо, як і 
                    найпрогресивніші медики, ми переконані: для дитини родина — 
                    головний ресурс у боротьбі з хворобою.
                </p>
                <p className="z-20">
                    Сьогодні в Україні розвивають сімейно-орієнтований підхід 
                    до медицини. Це означає, що батьки та лікарі мають стати 
                    справжніми партнерами заради швидшого одужання малюків. 
                    Тож наші Сімейні Кімнати дуже потрібні в кожній дитячій 
                    лікарні.
                </p>
                <p className="z-20">
                    Родини завжди користуються Кімнатами безкоштовно. Однак 
                    їх утримання в п’яти лікарнях (оренда, комунальні платежі, 
                    зарплата адміністраторів, що піклуються про зручність, ч
                    истоту і безпеку 24/7) коштує понад 18000 гривень на добу. 
                    Якщо простіше: близько 12 гривень за хвилину.
                </p>
                <p className="z-20">
                    Купуючи цей віртуальний час, ви конвертуєте його в реальну 
                    допомогу — даєте можливість батькам набратися сил і, що 
                    найцінніше, бути поруч зі своїми дітьми.
                </p>
                <div className="flex flex-row gap-10 items-center">
                    <Link href="#" className="bg-yellow-400 hover:bg-yellow-500 
                    text-white font-bold rounded-lg text-center p-3 w-[30%]">
                        Подарувати
                    </Link>
                    <Link href="#" className="text-red-600
                    hover:underline font-extrabold text-[1.2rem]">
                        Дізнатись більше про Фундацію
                    </Link>
                </div>
            </div>
        </div>
     </div>
  )
}
