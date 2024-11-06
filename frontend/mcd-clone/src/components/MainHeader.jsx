import React from 'react'
import { TopHeader, BottomHeader } from './shared'

export const MainHeader = () => {
  return (
    <div className="flex flex-col gap-0 px-10 py-5 border-b 
    border-gray-300/50 shadow-sm">
      <TopHeader />
      <BottomHeader />
    </div>
  )
}
