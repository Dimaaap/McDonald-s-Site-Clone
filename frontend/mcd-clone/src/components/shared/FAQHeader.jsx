import React from 'react'

export const FAQHeader = ({ text, onClick, isActive=false }) => {
  return (
    <div className={`p-4 hover:bg-[#ffbc0d] 
    border-b-1
    hover:border-black
    cursor-pointer w-1/5 text-center border-b-4 
    ${isActive ? "bg-[#ffbc0d] border-black": 
    "border-gray-500 "}`}
    onClick={ onClick }>
        { text }
    </div>
  )
}

