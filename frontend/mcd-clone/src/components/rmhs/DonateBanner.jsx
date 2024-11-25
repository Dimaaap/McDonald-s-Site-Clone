import React from 'react'
import Link from 'next/link';
import { HowToJoinRouter } from '@/store';
import { Heart } from 'lucide-react';

export const DonateBanner = () => {
  return (
    <div className="h-[60vh] w-full bg-[url('https://rmhc.org.ua/wp-content/uploads/%D0%BF%D0%BB%D0%B0%D1%88%D0%BA%D0%B0-12.02.jpg?id=12352')]
      bg-no-repeat bg-cover bg-center relative mt-[5%] -mb-7 ">
        <div className="text-white text-left absolute flex flex-col gap-5 max-w-[50%] 
        top-[35%] left-[20%]">
            <h1 className="text-3xl font-bold">
                Долучайтеся до наших програм,  підтримуйте українські родини
            </h1>
            <Link href={ HowToJoinRouter.DONATE }
            className='text-white font-bold bg-red-500 flex flex-row gap-3 
            max-w-[28%] p-4 rounded-md items-center text-center hover:bg-red-600'>
                Долучайтесь
                <Heart size={25} />
            </Link>
        </div>
      </div>
  )
}

export default DonateBanner
