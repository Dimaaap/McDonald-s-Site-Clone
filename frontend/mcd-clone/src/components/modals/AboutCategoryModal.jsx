import Link from 'next/link'
import React from 'react'

export const AboutCategoryModal = ({ closeModal }) => {
  return (
    <div className="absolute top-[100px] z-50 bg-blue-400 text-white 
    font-semibold flex flex-col left-[300px]" onMouseLeave={() => closeModal(false)}>
      <Link className="py-2 px-4 border-b border-white text-white 
      transition-all duration-300
      hover:text-yellow-300" href="rmhc/about">
        Про Фундацію
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
      hover:text-yellow-300" href="rmhc/50-years">
        50 років у світі
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
      hover:text-yellow-300" href="rmhc/reports">
        Звіти
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
      hover:text-yellow-300" href="rmhc/about/team">
        Команда
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
      hover:text-yellow-300" href="rmhc/partners">
        Наші партнери
      </Link>
      <Link className="py-2 px-4 text-white 
      hover:text-yellow-300" href="rmhc/supervisory-board">
        Наглядова рада
      </Link>
    </div>
  )
}

