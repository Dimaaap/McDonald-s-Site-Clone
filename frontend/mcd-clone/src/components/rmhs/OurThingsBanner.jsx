import React from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'

export const OurThingsBanner = () => {
  return (
    <div className="bg-[url('https://rmhc.org.ua/wp-content/uploads/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA1-1.png?id=12439')] 
      bg-center bg-cover bg-no-repeat w-full h-[80vh] relative">
        <div className="flex flex-col max-w-[50%] absolute top-[25%] left-[40%]">
          <h1 className="text-3xl font-extrabold text-white text-left">
            Допоможіть нам підтримувати важкохворих дітей і їхні родини. 
            Будь-який внесок важливий!
          </h1>
          <Link className="flex flex-row gap-4 items-center 
          bg-red-600 hover:bg-red-700 font-bold rounded-md p-3 text-center
          max-w-[35%] mt-5
          text-white" href="#">
            Зробити внесок
            <Heart size={20} />
          </Link>
        </div>
      </div>
  )
}