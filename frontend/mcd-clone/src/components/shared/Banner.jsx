import React from 'react'
import { BannerNotice } from '.'

export const Banner = ({ 
    bgImage, 
    noticeTitle, 
    noticeText, 
    noticeHref="" }) => {
  return (
    <div className="w-[90%] ml-[5%] h-[90vh] mt-[5%] mb-[5%]
    bg-cover bg-no-repeat bg-center relative"
    style={{ backgroundImage: `url(${bgImage})` }}>
        <BannerNotice title={ noticeTitle } 
        text={ noticeText }
        btnHref={ noticeHref }  />
    </div>
  )
}
