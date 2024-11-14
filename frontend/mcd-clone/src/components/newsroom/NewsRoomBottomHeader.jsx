import React from 'react'
import Link from 'next/link';
import { NewsRoomRouter } from '@/store';

export const NewsRoomBottomHeader = () => {
  return (
    <div className="w-full bg-yellow-400 px-5 py-5 
    flex flex-row gap-10">
      <Link href="/newsroom" className="hover:underline font-extrabold">
        Прескімната "МакДональдз"
      </Link>
      <Link href={ NewsRoomRouter.NEWS } className="hover:underline">
        Новини
      </Link>
      <Link href={ NewsRoomRouter.VISUAL_MATERIALS } 
      className="hover:underline">
        Візуальні матеріали
      </Link>
      <Link href={ NewsRoomRouter.PRESS_CONTACTS } className="hover:underline">
        Контакти для ЗМІ
      </Link>
    </div>
  )
}

