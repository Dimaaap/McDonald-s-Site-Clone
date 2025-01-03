import React from 'react'
import { FoundationBannerNotice } from '.'

export const FoundationBanner = ({ 
    bgImage, 
    noticeTitle, 
    noticeText }) => {
  return (
    <div className="w-[90%] ml-[5%] h-[90vh] mt-[5%] mb-[5%]
    bg-cover bg-no-repeat bg-center relative"
    style={{ backgroundImage: `url(${bgImage})` }}>
        <FoundationBannerNotice title={ noticeTitle } 
        text={ noticeText }/>
    </div>
  )
}
