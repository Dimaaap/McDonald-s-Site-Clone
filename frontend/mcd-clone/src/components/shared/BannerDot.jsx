import React from 'react'

export const BannerDot = ({ onClick, isActive=false }) => {
  return (
    <div className={`w-[8px] h-[8px] rounded-full cursor-pointer
        ${isActive ? "bg-black": "bg-gray-300"}`} 
        onClick={onClick}/>
  )
}

