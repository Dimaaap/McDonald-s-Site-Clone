import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PartnersMainSection = () => {
  return (
    <div>
      <div className='flex flex-col gap-3 p-[5%] text-center'>
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-blue-300">
                Партнери Фундації Дім Рональда МакДональда в Україні
            </h1>
            <p className="text-2xl font-bold text-blue-300">
                Дякуємо кожному за турботу про дітей України!
            </p>
        </div>
        <p className="text-2xl font-bold text-left mt-5">         
            Діяльність Фундації Дім Рональда МакДональда в Україні була б неможливою без підтримки 
            наших партнерів. Час і зусилля, якими вони щедро діляться, фінансова допомога або підтримка 
            товарами чи послугами допомагають нам запалити вогник щастя в очах тисячі дітей і їхніх сімей.
        </p>
        <div className="text-center mt-[2%] text-4xl font-extrabold text-blue-300">
            Генеральні партнери
        </div>
        <div className="bg-blue-50 rounded-md px-5 py-10 flex flex-col gap-7 mt-5">
            <div className="flex flex-row gap-7">
                <div className="w-1/3">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%BB%D0%BE%D0%B3%D0%BE_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1.jpg" 
                    alt="" width={300} height={300} className='w-full' />
                </div>
                <div className="text-xl w-2/3 text-left">
                    2016-го року МакДональдз став ініціатором заснування Фундації Дім Рональда
                    МакДональда в Україні. З того часу мережа є найбільшим корпоративним партнером 
                    Фундації. Щороку МакДональдз проводить благодійну акцію “Долонька щастя” для 
                    збору коштів на підтримку Сімейних кімнат у дитячих лікарнях. 
                    За весь час партнер підтримав програми Фундації на суму понад 60 
                    мільйонів гривень. З початку війни волонтери МакДональдз разом із 
                    Фундацією реалізують життєво важливі гуманітарні програми для потерпілих 
                    від війни українців.
                </div>    
            </div>
            <div className="flex flex-row gap-7">
                <div className="w-1/3">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%BB%D0%BE%D0%B3%D0%BE_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg" 
                    alt="" width={300} height={300} className='w-full' />
                </div>
                <div className="text-xl w-2/3 text-left">
                    Агентство США з міжнародного розвитку (USAID) і Фундація Дім Рональда 
                    Макдональда оголосили про чотирирічну програму партнерства на суму 12 млн дол. 
                    США. Метою партнерства є підтримка розвитку сімейно орієнтованого підходу до 
                    лікування дітей в Україні. Співпраця покликана підвищити знання та розуміння 
                    важливості принципів сімейно орієнтованого медичного догляду в системі охорони 
                    здоров’я Україні. Це також дозволить Фундації збільшити підтримку родин, діти 
                    яких перебувають на лікуванні, і заощадити їм десятки мільйонів гривень на 
                    харчуванні та проживанні.
                </div>    
            </div>
            <div className="flex flex-row gap-7">
                <div className="w-1/3">
                    <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%BB%D0%BE%D0%B3%D0%BE_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-2.jpg" 
                    alt="" width={300} height={300} className='w-full' />
                </div>
                <div className="text-xl w-2/3 text-left">
                    Церква Ісуса Христа Святих Останніх Днів в Україні надала фінансову підтримку 
                    на облаштування Сімейної кімнати Рональда МакДональда у Рівненській обласній 
                    дитячій лікарні. Також підтримала гуманітарні програми Продуктові набори та 
                    Медичне обладнання. Загальна сума допомоги склала приблизно 40 000 000 грн.
                </div>    
            </div>
        </div>

        <div className="text-center mt-[2%] text-4xl font-extrabold text-blue-300">
            Головні партнери
        </div>

        <div className="bg-blue-50 rounded-md px-5 py-10 grid grid-cols-4 gap-7 mt-5">
            <Image src="https://rmhc.org.ua/wp-content/uploads/mastercard-2048x1417.png" alt=""
            width={300} height={300} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/optima-klassik-2048x1417.png" alt=""
            width={300} height={300} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/dragon-capital-1-2048x1417.png" alt=""
            width={300} height={300} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/agrotep-2048x1404.png" alt=""
            width={300} height={300} className="w-full" />            
        </div>

        <div className="text-center mt-[2%] text-4xl font-extrabold text-blue-300">
            Партнери
        </div>

        <div className="bg-blue-50 rounded-md px-5 py-10 grid grid-cols-5 gap-7 mt-5 gap-y-10">
            <Image src="https://rmhc.org.ua/wp-content/uploads/nova-poshta-3.png" alt=""
            width={250} height={250} className="w-full" />  

            <Image src="https://rmhc.org.ua/wp-content/uploads/biosphere-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/profi-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/farm-frites-poland-2-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/enargo-syla-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/aryzta-1-2048x1404.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/toyota-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/GROHE-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/carlsberg-1-1024x709.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/ukrpol-1-1024x709.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/brabrabra-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/farm-frites-1-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/optimum-media-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/havi-1-1024x709.png" alt=""
            width={250} height={250} className="w-full" /> 
            
            <Image src="https://rmhc.org.ua/wp-content/uploads/intercontinental-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%A0%D0%BE%D0%B1%D0%BE%D1%82%D0%B0.%D1%8E%D0%B0-1024x711.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/univest-1-1024x709.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/skoda-1024x702.png" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/askania-pack-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/ruta-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/huhtamaki-2-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/port-city-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/Biscotti-1024x709.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/avrora-1024x709.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/aliaska-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0-%D0%BA%D0%B0%D0%B2%D0%B8-2-1024x709.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/alpha-pack-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/Bimbo-1024x709.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/ergo-technical-partner-1024x709.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/espersen-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/same-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/one-health-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/jacobs-1024x702.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%A0%D0%B0%D0%BD%D0%BE%D0%BA-1024x709.png" alt=""
            width={250} height={250} className="w-full" />

            <Image src="https://rmhc.org.ua/wp-content/uploads/ukrtelecom-1024x702.png" alt=""
            width={250} height={250} className="w-full" />
        </div>

        <div className="text-center mt-[2%] text-4xl font-extrabold text-blue-300">
            Збір коштів можливий завдяки платформам
        </div>

        <div className="bg-blue-50 rounded-md px-5 py-10 grid grid-cols-5 gap-7 mt-5 gap-y-10">
            <Image src="https://rmhc.org.ua/wp-content/uploads/1_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-2-300x206.jpg" alt=""
            width={250} height={250} className="w-full" />  

            <Image src="https://rmhc.org.ua/wp-content/uploads/logo_PrivatBank-01-300x206.jpg" alt=""
            width={250} height={250} className="w-full" />     

            <Image src="https://rmhc.org.ua/wp-content/uploads/dobro.ua_-1024x702.png" alt=""
            width={250} height={250} className="w-full" />      

            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%B2%D0%B0%D0%B9%D1%82-%D0%BF%D0%B5%D0%B9-300x206.jpg" alt=""
            width={250} height={250} className="w-full" />    

            <Image src="https://rmhc.org.ua/wp-content/uploads/whitebit-300x206.jpg" alt=""
            width={250} height={250} className="w-full" />     
        </div>

        <div className="text-center mt-[2%] text-4xl font-extrabold text-blue-300">
            Дякуємо за постійну інформаційну підтримку
        </div>

        <div className="bg-blue-50 rounded-md px-5 py-10 grid grid-cols-6 gap-7 mt-5 gap-y-10">
            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-1_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-7-2.jpg" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%BC%D0%BE%D0%B9-%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BE%D0%BA1-1.jpg" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/%D1%81%D1%83%D1%81%D0%BF%D1%96%D0%BB%D1%8C%D0%BD%D0%B5.jpg" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-1_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-9-2.jpg" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-1_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-10-2.jpg" alt=""
            width={250} height={250} className="w-full" /> 

            <Image src="https://rmhc.org.ua/wp-content/uploads/EBA.jpg" alt=""
            width={250} height={250} className="w-full" /> 
        </div>

        <div className="bg-blue-600/60 px-5 py-10 flex flex-row gap-10 items-center mt-10">
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0-1.jpg"
                alt="" width={400} height={400} className="w-full" />
            </div>
            <div className="w-1/2 flex flex-col gap-10">
                <h1 className="text-4xl font-extrabold text-left text-white">
                    Будемо раді бачити вас серед наших партнерів
                </h1>
                <Link href="#" className="bg-white text-blue-600/60 text-[1.1rem] font-bold 
                px-5 py-3 text-center max-w-[40%] rounded-md hover:bg-white/80">
                    Дізнатись більше
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

