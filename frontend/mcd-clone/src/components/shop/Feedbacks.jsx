import React from 'react'
import Image from 'next/image'

export const Feedbacks = () => {
  return (
    <div className="flex flex-col gap-7 px-[3%] w-[90%] mx-auto 
    my-[5%] h-[110%] mt-[3%]
    bg-[url('https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/bgs/bg-testimonials.svg')]
    bg-cover bg-center bg-no-repeat" id="reviews">
        <div className="text-center text-4xl font-extrabold text-red-600 
        mt-[15%]">
            Відгуки
        </div>
        <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-5 bg-white shadow-md rounded-md">
                <div className="w-full">
                    <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/04/natalya-2.png"
                    alt="" width={200} height={200} className="w-full" />
                </div>
                <div className="px-5 pb-3 text-left w-full flex flex-col gap-5">
                    <p className="text[1.1rem]">
                        <b>Наталя, мама Ярослави</b><br />
                        боролись за життя в реанімації київського "Охматдиту"
                    </p>    
                    <p>
                        "Коли стикаєшся з таким випробуванням, дуже важливо дозволяти 
                        собі хоча б раз на тиждень відволіктися, інакше в тебе просто 
                        не буде сил боротись. Кожного дня я засинаю о пів на першу 
                        ночі - після зціджування і готування їжі на завтра. 
                        Якби не Сімейна Кімната, нам би довелось весь день тулитись 
                        у коридорах"
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5 bg-white shadow-md rounded-md">
                <div className="w-full">
                    <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/04/yana-2.png"
                    alt="" width={200} height={200} className="w-full" />
                </div>
                <div className="px-5 pb-3 text-left w-full flex flex-col gap-5">
                    <p className="text[1.1rem]">
                        <b>Яна, мама Єви</b><br />
                        щороку живуть у Вінницькій обласній дитячій лікарні
                    </p>    
                    <p>
                        "У Сімейній Кімнаті дитина відчуває, що все нормально, 
                        що батьки разом із нею. Це справжнє диво. Ми проводимо 
                        там час кожного дня, коли знаходимось у лікарні. Особливо 
                        тато - в палаті ж переважно жінки, для них присутність
                        чоловіка дискормфортна. А в Кімнаті вони з донечкою 
                        можуть бути разом скільки завгодно"
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5 bg-white shadow-md rounded-md">
                <div className="w-full">
                    <Image src="https://shop.rmhc.org.ua/wp-content/uploads/2020/04/sefgiy.png"
                    alt="" width={200} height={200} className="w-full" />
                </div>
                <div className="px-5 pb-3 text-left w-full flex flex-col gap-5">
                    <p className="text[1.1rem]">
                        <b>Сергій, тато Аліни</b><br />
                        після пологового потрапили до 
                        Сумської обласної дитячної лікарні
                    </p>    
                    <p>
                        "Мою дружину Марію з донькою, якій було лише 5 днів, розмістили 
                        у відділенні анестезіології та інтенсивної терапії новонароджених. 
                        Я розгубився, хотілось бути поруч із ними. Коли вперше зайшов до 
                        Сімейної Кімнати, був шокований тим, що у звичайній лікарні 
                        є таке комфортне, домашнє місце. Проводив тут увесь час до 
                        виписки"
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

