import Image from 'next/image'
import React from 'react'
import { CredoItem } from '../shared'
import { FAQContainer } from '.'

export const FAQMainSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mt-5 bg-[#ffbc0d] w-full 
      px-8 py-5 relative h-[52vh] flex flex-row">
        <div className="w-1/2">
          <Image src="/head_houses.png" alt="houses" 
          width={400} height={400}/>
        </div>
       <div className="w-1/2">
          <CredoItem />
       </div>
      </div>
      <FAQContainer />
    </div>
  )
}
