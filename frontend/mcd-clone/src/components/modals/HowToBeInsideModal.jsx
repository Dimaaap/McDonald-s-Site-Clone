import React from 'react'
import { HowToJoinRouter } from '@/store'
import { RMHCHeaderLink } from '../shared'

export const HowToBeInsideModal = ({ closeModal }) => {
  return (
    <div className="absolute top-[100px] z-50 bg-blue-400 text-white 
    font-semibold flex flex-col left-[600px]"
    onMouseLeave={ closeModal }>
      <RMHCHeaderLink text="Зробити внесок" href={ HowToJoinRouter.DONATE  } />
      <RMHCHeaderLink text="Стати партнером" href={ HowToJoinRouter.BECOME_PARTNER  } />
      <RMHCHeaderLink text="Різдвяні наліпки" href={ HowToJoinRouter.STICKERS  } />
      <RMHCHeaderLink text="Крамниця добрих покупок" href={ HowToJoinRouter.SHOP  } />
      <RMHCHeaderLink text="День піжам" href={ HowToJoinRouter.PAJAMAS_DAY  } />
    </div>
  )
}

