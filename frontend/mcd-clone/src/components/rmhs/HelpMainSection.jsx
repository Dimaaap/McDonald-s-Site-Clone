"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { CiHospital1 } from "react-icons/ci";
import { PiAmbulanceLight, PiBedBold } from "react-icons/pi";
import { FaShoppingBasket, FaStethoscope } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaRegHand, FaRegHeart } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { BsRouter } from "react-icons/bs";
import { RiTreasureMapFill } from "react-icons/ri";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { firstSliderImages, secondSliderImages } from '@/store';
import { thirdSliderImages } from '@/store/helpImages';
import { FullSliderImageModal } from '../modals';

export const HelpMainSection = () => {

    const [firstSlider, setFirstSlider] = useState(0)
    const [secondSlider, setSecondSlider] = useState(0)
    const [thirdSlider, setThirdSlider] = useState(0)

    const [modalOpen, setModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")

    const setPrevSlider = (slider) => {
        if(slider === "third"){
            if(thirdSlider === 0){
                setThirdSlider(7)
            } else {
                setThirdSlider(thirdSlider - 1)  
            }
        } else if(slider === "second"){
            if(secondSlider === 0){
                setSecondSlider(13)
            } else {
                setSecondSlider(secondSlider - 1)  
            }
            
        } else {
            if(firstSlider === 0){
                setFirstSlider(13)
            } else {
              setFirstSlider(firstSlider - 1)  
            }
            
        }
    }

    const setNextSlider = (slider) => {
        if(slider === "third"){
            if(thirdSlider === 7){
                setThirdSlider(0)
            } else {
                setThirdSlider(thirdSlider + 1)    
            }
           
        } else if(slider === "second"){
            if(secondSlider === 13){
                setSecondSlider(0)
            } else {
              setSecondSlider(secondSlider + 1)  
            }
        } else {
            if(firstSlider === 13){
                setFirstSlider(0)
            } else {
                setFirstSlider(firstSlider + 1) 
            }
            
        }
    }

    const handleModalOpen = (imageSrc) => {
        if(!modalOpen) {
            setModalOpen(true);
            setSelectedImage(imageSrc)
        } else {
            setModalOpen(false);
            setSelectedImage("")
        }
    }
 
  return (
    <div className="flex flex-col gap-10">
        <div className="w-full h-screen 
        bg-[url('https://rmhc.org.ua/wp-content/uploads/%D0%B3%D1%83%D0%BC%D0%B0%D0%BD%D1%96%D1%82%D0%B0%D1%80%D0%BD%D1%96-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8.png')]
        bg-center bg-cover bg-no-repeat" />

        <div className="px-[5%] text-xl font-bold text-left">
            <p>
                Мільйони українських родин з початком війни були змушені 
                покинути рідну домівку, багато хто залишився без даху над 
                головою. Ваша підтримка дозволила нам на початку війни 
                надати гуманітарну допомогу таким родинам: життєво важливі 
                ліки, продуктові набори чи одяг для тих, у кого більше 
                немає дому; спальні мішки, аптечки для людей, що рятуються 
                у бомбосховищах. А також підтримувати продуктовими 
                наборами родини у прифронтових районах та ВПО. А 
                лікарням – передавати важливе медичне обладнання.
            </p>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Напрямки гуманітарної допомоги
            </h1>
        </div>

        <div className="px-[5%] grid grid-cols-3 gap-5">
            <div className="flex flex-col gap-5 text-left text-xl relative">
                <p className="text-blue-300 text-xl font-semibold">
                    Програма «Медичне обладнання»
                </p>
                <Image src={ firstSliderImages[firstSlider].src } 
                alt="" width={200} height={200} className="w-full border-none cursor-pointer"
                onClick={ () => handleModalOpen(firstSliderImages[firstSlider].src) } />

                <ChevronLeft size={35} className="absolute text-white font-bold top-32 
                left-3 text-center justify-center
                cursor-pointer p-[1%] rounded-full border border-white hover:bg-white 
                hover:text-gray-500" onClick={ () => setPrevSlider("first") }/>
                <ChevronRight size={35} className="absolute text-white font-bold top-32 
                right-3 text-center justify-center
                cursor-pointer p-[1%] rounded-full border border-white hover:bg-white 
                hover:text-gray-500" onClick={ () => setNextSlider("first") } />
                <p className="mx-auto">
                    У лікарнях українських міст перебувають тисячі поранених, 
                    у тому числі й дітей, яким вкрай необхідна кваліфікована 
                    медична допомога. Тяжкі рани гояться якісніше та швидше 
                    із системою вакуумної терапії. Це медичне обладнання з 
                    початком війни було найчастішим замовленням лікарень 
                    на гуманітарну допомогу.
                </p>
                <p>
                    Також для операційних вкрай важливі вакуумні аспіратори, що дозволяють 
                    швидко видаляти чужорідні об’єкти та рідину у важкохворих.
                </p>
                <p>
                    Ми продовжуємо нашу програму підтримки українських лікарень та передаємо 
                    партнерським закладам важливе медичне обладнання за їхніми, 
                    найбільш затребуваними, запитами.
                </p>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <CiHospital1 size={30} />
                    <p>
                        100+ лікарень
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <PiAmbulanceLight size={30} />
                    <p>
                        420 вакуумних аспіраторів
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <PiAmbulanceLight size={30} />
                    <p>
                        200 апаратів вакуумної терапії
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <PiAmbulanceLight size={65} />
                    <p>
                        30+ одиниць важливого медобладнання для партнерських лікарень
                    </p>
                </div>
            </div>

            { modalOpen && <FullSliderImageModal imageSrc={selectedImage} />}
            
            <div className="flex flex-col gap-5 text-left text-xl relative">
                <p className="text-blue-300 text-xl font-semibold">
                    Програма «Продуктовий набір»
                </p>
                <Image src={ secondSliderImages[secondSlider].src } alt=""
                width={200} height={200} className="w-full" />
                <ChevronLeft size={35} className="absolute text-white font-bold top-32 
                left-3 text-center justify-center
                cursor-pointer p-[1%] rounded-full border border-white hover:bg-white 
                hover:text-gray-500" onClick={() => setPrevSlider("second") } />
                <ChevronRight size={35} className="absolute text-white font-bold top-32 
                right-3 text-center justify-center
                cursor-pointer p-[1%] rounded-full border border-white hover:bg-white 
                hover:text-gray-500" onClick={() => setNextSlider("second")} />

                <p className="mx-auto">
                    Через війну мільйони українських родин покинули свої домівки або 
                    залишилися без даху над головою. Багато хто, опинившись у чужому місті 
                    без засобів до існування або ховаючись у бомбосховищах, страждає від нестачі їжі.
                </p>
                <p>
                    Щоб підтримати такі родини, Фундація разом із волонтерами МакДональдз 
                    пакували життєво необхідні продукти харчування. Їх передавали 
                     постраждалим через місцевих волонтерів. До складу набору входили, 
                     наприклад, крупа, борошно, цукор, булки, олія рослинна, молоко, 
                     макарони, свинина тушкована, печиво, чай фасований, солодощі. 
                     Одного набору родині з 3-4 чоловік може вистачити на декілька днів.
                </p>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <FaShoppingBasket size={30} />
                    <p>
                        332 372 продуктові набори
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <LuMapPin size={30} />
                    <p>
                        23 регіони країни
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <FaRegHand size={45} />
                    <p>
                        300+ волонтерські організації задіяні при передачі
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <FaRegHeart size={45} />
                    <p>
                        300+ волонтерів МакДональдз пакували продуктові набори
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5 text-left text-xl relative">
                <p className="text-blue-300 text-xl font-semibold">
                    Гуманітарна допомога
                </p>
                <Image src={ thirdSliderImages[thirdSlider].src } 
                alt="" width={200} height={200} className="w-full" />
                <ChevronLeft size={35} className="absolute text-white font-bold top-32 
                left-3 text-center justify-center
                cursor-pointer p-[1%] rounded-full border border-white hover:bg-white 
                hover:text-gray-500" onClick={ () => setPrevSlider("third") } />
                <ChevronRight size={35} className="absolute text-white font-bold top-32 
                right-3 text-center justify-center
                cursor-pointer p-[1%] rounded-full border border-white hover:bg-white 
                hover:text-gray-500" onClick={ () => setNextSlider("third")} />

                <p className="mx-auto">
                    На початку війни надали гуманітарну допомогу родинам, що цього потребували: 
                    життєво важливі ліки, продуктові набори чи одяг для тих, у кого більше немає дому; 
                    спальні мішки, аптечки для людей, що рятуються у бомбосховищах. 
                    Також ми підтримували дитячі лікарні, де проходять лікування дітки, що 
                    стали заручниками війни: вони отримали медикаменти, медичне обладнання, 
                    хірургічні ліжка, продукти харчування чи засоби гігієни.
                </p>
                <p>
                    Ми отримували гуманітарну допомогу з різних куточків світу – продукти 
                    харчування, одяг, теплі речі для дому, засоби гігієни тощо. Особливо 
                    ми вдячні підрозділам Фундації Дім Рональда МакДональда та МакДональдз в 
                    інших країнах.
                </p>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <FaStethoscope size={30} />
                    <p>
                        36 706 одиниць медичних препаратів
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <PiBedBold size={50} />
                    <p>
                        5 351 баночок дитячого харчування та 150 спальних мішків
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <TiPlus size={50} />
                    <p>
                        3 782 одиниць гігієнічної продукції та 676 аптечок
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <BsRouter size={30} />
                    <p>
                        208 одиниць побутової техніки
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center text-blue-300 font-bold text-xl">
                    <RiTreasureMapFill size={50} />
                    <p>
                        12 тон гуманітарної допомоги від Фундацій у Європі
                    </p>
                </div>
            </div>
        </div>

        <div className="px-[5%] text-center">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Вдячні родини
            </h1>
        </div>
        
        <div className="p-[5%] grid grid-cols-4 gap-5">
            <div className="flex flex-col gap-5 text-xl text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/VAS_1303-1-1-300x200.jpg" alt="" 
                width={200} height={200} className="w-full" />
                <p>
                    Родина Наталії була вимушена бігти із Сєвєродонецька. Кілька тижнів 
                    вона переховувалася з дітками в шкільному підвалі в рідному місті. 
                    Було холодно й темно. Щоб якось нагодувати малечу, їжу готували на вулиці
                    в перервах між постійними обстрілами. Та коли задня стіна школи від 
                    чергового удару снарядів обвалилася, Наталія зрозуміла, що потрібно тікати. 
                    Тікали під кулями, що свистіли над головами. Зараз Наталя та її дітки в 
                    безпечному місці. Ця родина стала 100-тисячною, якій ми передали продуктовий набір.
                </p>
            </div>
            <div className="flex flex-col gap-5 text-xl text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/308071531_1500856270343551_4861657256678742208_n-300x200.jpg" alt="" 
                width={200} height={200} className="w-full" />
                <p>
                    У підвалі будинку від ворожих снарядів ховається родина з трьома дітками. 
                    Раніше вона жила щасливим життям у місті Снігурівка Миколаївської області, 
                    але з війною опинилася в окупації та близько місяця перебувала в постійному 
                    страху. Завдяки волонтерам вони змогли вибратися з рідного міста та поселитися 
                    у Кривому Розі. Тут небайдужі допомогли облаштуватися, а Фундація Дім Рональда 
                    МакДональда подбала про продукти для сім’ї.
                </p>
            </div>
            <div className="flex flex-col gap-5 text-xl text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/311572384_1522202734875571_4279589246829537684_n-1-e1676828618775-300x200.jpg" alt="" 
                width={200} height={200} className="w-full" />
                <p>
                    Над ліжком сина схилилася заплакана мама. Жінка дивиться на свого хлопчика 
                    та плаче від щастя, бо її Артем вижив. Ганна дуже боялася втратити синочка, 
                    разом із яким потрапила під обстріли у Харкові. В Артема було одне з 
                    найважчих поранень — мінно-вибухова травма. Зараз хлопчик перебуває на 
                    апараті вакуумної терапії. Завдяки цьому обладнанню великі складні рани 
                    хлопчика загоюються значно швидше та якісніше.
                </p>
            </div>
            <div className="flex flex-col gap-5 text-xl text-left">
                <Image src="https://rmhc.org.ua/wp-content/uploads/317249308_1550879975341180_3180018517189398135_n-e1676828895977-300x200.jpg" alt="" 
                width={200} height={200} className="w-full" />
                <p>
                    10-річний Кирило — з Бахмута. Переховуючись від обстрілів у підвалі, вони 
                    з братом ненароком зачепили каструлю з окропом. Опіки лишилися по всьому тілу, 
                    виникають проблеми при ходьбі. Кирилу зробили пластичну операцію, 
                    під час якої хірурги відновлювали рухомість кінцівок, і зараз триває процес 
                    реабілітації. Апарат вакуумної терапії допомагає травмам таких діток 
                    загоюватися швидше.
                </p>
            </div>
        </div>
    </div>
  )
}

