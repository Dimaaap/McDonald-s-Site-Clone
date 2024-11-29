import Image from 'next/image'
import React from 'react'

export const StickersMainSection = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url('https://rmhc.org.ua/wp-content/uploads/xsticker_web_mac.png.pagespeed.ic.w5h9oci9rW.png')]
      bg-cover bg-center bg-no-repeat" />
      <div className="px-[5%] flex flex-col gap-[3%]">
        <div className="text-center text-blue-400 text-4xl font-extrabold 
        mt-[5%]">
            <h1>
                Благодійні різдвяні наліпки на підтримку дітей у лікарнях
            </h1>
        </div>
        <div className="flex flex-row gap-[5%] mt-[5%]">
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/RMcD_foundation_sticker_pack_148x210mm-2-700x997.png"
                alt="" width={400} height={400} className="h-full" />
            </div>
            <div className="w-1/2 text-xl text-left">
                <p>
                    Зимові свята — особливі. Коли хочеться вірити в дива і 
                    допомагати тим, хто цього найбільше потребує. Щоб підтримати 
                    дітей у лікарнях, ми запрошуємо вас придбати особливі 
                    благодійні наліпки. Адже вони продаватимуться тільки 
                    цієї зими і тільки в МакДональдз. У них є все — вони яскраві, 
                    стильні, і містять спеціальні наліпки з написами 
                    «ВІД» і «КОМУ», які дуже зручно використати для оформлення 
                    святкових подарунків. Рідним і друзям точно сподобається. 
                    А ще вони передають атмосферу зимової казки та надихають 
                    на теплі спогади про свята разом із близькими. Та 
                    найголовніше — купуючи ці благодійні наліпки, ви допоможете 
                    мамам і татам бути поруч з дітьми, які хворіють, у лікарнях. 
                    Адже Фундація Дім Рональда МакДональда будує Дім Рональда 
                    МакДональда на території НДСЛ «ОХМАТДИТ» для сімей з 
                    важкохворими дітьми. А також ми утримуємо Сімейні кімнати 
                    у 6 найбільших дитячих лікарнях країни.
                </p>
            </div>
        </div>
        <div className="flex flex-row gap-[5%] mt-[5%]">
            <div className="w-1/2 text-left text-xl">
                <p>
                    Завдяки вам ми побудуємо перший в Україні Дім Рональда МакДональда для родин 
                    важкохворих дітей на 50 окремих кімнат. Його збудують на території найбільшої 
                    національної дитячої лікарні України НДСЛ «ОХМАТДИТ». Тут сім’ї з усіх куточків
                    України зможуть безкоштовно мешкати стільки, скільки буде потрібно. Родини 
                    зможуть задовольнити всі базові потреби, щоб мати змогу зосередитися на головному — 
                    одужанні дитини.  Тут вони зможуть проживати у комфортабельних спальнях з 
                    окремими санвузлами та душовими, користуватися сучасною кухнею, ігровими 
                    кімнатами, бібліотекою. Все це в декількох кроках від лікарні. Дім Рональда 
                    Макдональда особливо допоможе сім’ям, які привезли хвору малечу з іншого міста 
                    чи села та не можуть дозволити собі дороговартісне тимчасове житло в Києві. 
                    Завдяки цьому під час лікування більше дітей будуть поруч із родинами, а батьки 
                    зможуть економити мільйони гривень на проживанні та харчуванні. 
                </p>
            </div>
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/5-1-1-2-2-700x875.jpg"
                alt="" width={400} height={400} className="h-full" />
            </div>
        </div>
        <div className="flex flex-row gap-[5%] mt-[5%]">
            <div className="w-1/2">
                <Image src="https://rmhc.org.ua/wp-content/uploads/%D0%A1%D0%9A-%D0%A1%D1%83%D0%BC%D0%B8-1536x1024.jpg"
                alt="" width={400} height={400} className="w-full" />
            </div>
            <div className="w-1/2 text-left text-xl">
                <p>
                    Щоб рідні не розлучалися під час тривалого лікування дітей, Фундація Дім 
                    Рональда МакДональда облаштовує Сімейні кімнати в дитячих державних лікарнях, 
                    де родини можуть відпочити й набратися сил, задовольнити базові гігієнічні потреби, 
                    приділити час спілкуванню та грі з дитиною, а також поїсти. У деяких кімнатах сім’ї 
                    можуть мешкати тижнями чи навіть місяцями в окремих спальнях, стільки, скільки 
                    буде потрібно для одужання дитини. Перебування в кімнатах для батьків хворих дітей 
                    безкоштовне. Ми облаштували й утримуємо Сімейні кімнати в 6 найбільших державних 
                    дитячих лікарнях: у Києві, Львові, Рівному, Вінниці, Сумах, Харкові.
                </p>
            </div>
        </div>
        <div className="text-xl text-left mt-[5%]">
            <p>
                Придбати благодійні наліпки можна у всіх відкритих ресторанах «МакДональдз» з 25 
                листопада до 31 грудня 2024 року або до повного розпродажу благодійних наліпок.
            </p>
        </div>
      </div>
    </div>
  )
}

