import Image from 'next/image'
import React from 'react'

export const UsePromo = () => {
  return (
    <div className="flex flex-col gap-5 mt-[5%] px-[5%]">
      <div className="text-center">
        <h1 className="text-2xl font-extrabold">
            Пропозиціями можна скористатися
        </h1>
        <h1 className="text-2xl mt-3">
            (за одну покупку ви можете використати до 3 
            пропозицій):
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
          <div className="flex flex-col gap-5">
            <Image src="/use-promo-1.jpeg" alt="Use Promo"
            width={400} height={400} />
            <div className="text-center">
                <p>
                    Натисніть кнопку «В мене є ваучер».
                    Відскануйте пропозицію на зчитувачі або 
                    введіть код самостійно
                </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Image src="/use-promo-2.jpeg" alt="Use Promo"
            width={400} height={400} />
             <div className="text-center">
                <p>
                    Покажіть ваучер працівнику МакДональдз
                </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Image src="/use-promo-3.jpeg" alt="Use Promo"
            width={400} height={400} />
            <div className="text-center">
                <p>
                    Покажіть ваучер працівнику МакДональдз
                </p>
            </div>
          </div>
      </div>
    </div>
  )
}
