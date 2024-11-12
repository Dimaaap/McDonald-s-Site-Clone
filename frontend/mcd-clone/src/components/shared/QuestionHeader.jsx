import React from 'react'
import { Minus, Plus } from "lucide-react"

export const QuestionHeader = ({ text, isEven=true, isTextShow=false }) => {
  return (
    <div className={`${isEven ? "border-l-4 border-yellow-400 bg-gray-100" : 
    "border-l-4 border-gray-100 bg-yellow-400"} 
    flex flex-row justify-between font-extrabold
    px-7 py-5 cursor-pointer relative`}>
      <h1 className="text-xl max-w-[90%]">{ text }</h1>
      {
        isTextShow ? (
          <Minus size={30} className="w-[15%] absolute right-0 top-5 
          transition-all duration-100 ease-in-out" />
        ) : (
          <Plus size={30} className="w-[15%] absolute right-0 top-5 
          transition-all duration-100 ease-in-out" />
        )
      }
    </div>
  )
}
