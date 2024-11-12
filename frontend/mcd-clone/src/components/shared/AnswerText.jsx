import React from 'react'

export const AnswerText = ({ text, isShow=false }) => {
  return (
    <div className={`transition-all duration-100 ease-in-out overflow-hidden
      ${isShow ? "bg-white px-7 py-5" :
    "hover opacity-0 w-0 h-0"}`}>
      { text }
    </div>
  )
}
