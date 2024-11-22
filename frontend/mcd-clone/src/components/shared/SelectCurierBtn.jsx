"use client"

import { useDeliveryService, useSelectedCity } from '@/store'
import React, { useEffect } from 'react'

export const SelectCurierBtn = ({ hasBoltDelivery=true }) => {

  const {chosenCourier, setChosenCourier} = useDeliveryService()
  const { selectedCity } = useSelectedCity();

  useEffect(() => {
    if(!selectedCity.has_bolt_delivery & chosenCourier === "bolt"){
      setChosenCourier("glovo")
    }
  }, [selectedCity])

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
          "text-gray-500 bg-white"} 
        ${ !hasBoltDelivery ? "cursor-not-allowed": "cursor-pointer" } 
        font-medium`}
          onClick={() => setChosenCourier("bolt")}
          disabled={ !hasBoltDelivery }>
            Bolt Food
        </button>
    </div>
  )
}
