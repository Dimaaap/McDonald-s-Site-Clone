import React from 'react'
import Link from 'next/link'

export const HowToBeInsideModal = ({ closeModal }) => {
  return (
    <div className="absolute top-[100px] z-50 bg-blue-400 text-white 
    font-semibold flex flex-col left-[600px]"
    onMouseLeave={ closeModal }>
       <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
      hover:text-yellow-300" href="rmhc/donate">
            Як долучитись
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
      hover:text-yellow-300" href="rmhc/join/become-partner">
            Стати партнером
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
      hover:text-yellow-300" href="rmhc/join/shop">
            Крамниця добрих покупок
      </Link>
      <Link className="py-2 px-4 border-b border-white text-white 
        transition-all duration-300
      hover:text-yellow-300" href="rmhc/join/pajamas-day">
            День піжам
      </Link>
    </div>
  )
}

