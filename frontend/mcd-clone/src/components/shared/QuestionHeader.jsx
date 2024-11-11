import React from 'react'
import { Plus } from "lucide-react"

export const QuestionHeader = ({ text, onClick=false, isEven=true }) => {
  return (
    <div className={`${isEven ? "border-l-4 border-yellow-400 bg-gray-100" : 
    "border-l-4 border-gray-100 bg-yellow-400"} 
    flex flex-row justify-between font-extrabold
    px-7 py-5 cursor-pointer`}>
      <h1 className="text-xl">{ text }</h1>
      <Plus size={30} />
    </div>
  )
}
