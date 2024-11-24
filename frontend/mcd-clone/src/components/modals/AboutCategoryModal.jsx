import { RMHCAboutRouter } from '@/store'
import Link from 'next/link'
import React from 'react'
import { RMHCHeaderLink } from '../shared'

export const AboutCategoryModal = ({ closeModal }) => {
  return (
    <div className="absolute top-[100px] z-50 bg-blue-400 text-white 
    font-semibold flex flex-col left-[300px]" onMouseLeave={() => closeModal(false)}>
      <RMHCHeaderLink text="Про Фундацію" href={ RMHCAboutRouter.ABOUT  } />
      <RMHCHeaderLink text="50 років у світі" href={ RMHCAboutRouter.YEARS_50 } />
      <RMHCHeaderLink text="Звіти" href={ RMHCAboutRouter.REPORTS  } />
      <RMHCHeaderLink text="Команда" href={ RMHCAboutRouter.TEAM  } />
      <RMHCHeaderLink text="Наші партнери" href={ RMHCAboutRouter.PARTNERS  } />
      <RMHCHeaderLink text="Наглядова рада" href={ RMHCAboutRouter.SUPERVISORY_BOARD  } />
    </div>
  )
}

