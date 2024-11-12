"use client"

import { useDeliveryService } from '@/store'
import React from 'react'

export const SelectCurierBtn = () => {

  const {chosenCourier, setChosenCourier} = useDeliveryService()

  return (
    <div className="flex w-48 rounded-lg overflow-hidden 
        h-[50px] border-2 border-yellow-400">
        <button className={`w-1/2 py-2 text-center 
        ${chosenCourier === "glovo" ? 
        "text-black bg-yellow-400": 
        "text-gray-500 bg-white"} font-medium `}
        onClick={() => setChosenCourier("glovo")}>
            Glovo
        </button>
        <button className={`w-1/2 py-2 text-center 
        ${ chosenCourier === "bolt" ? "text-black bg-yellow-400" :
          "text-gray-500 bg-white"} font-medium`}
          onClick={() => setChosenCourier("bolt")}>
            Bolt Food
        </button>
    </div>
  )
}
