"use client"

import { getCitiesWithDelivery } from '@/fetch'
import React, { useState, useEffect } from 'react'
import { useCitiesList, useSelectedCity } from '@/store'

export const CitiesWithDeliveryModal = () => {

    const ONE_HOUR = 3600 * 1000;
    const { setSelectedCity, selectedCity } = useSelectedCity();
    const { cities, setCities } = useCitiesList()

    useEffect(() => {
        const fetchCities = async() => {
            try{
                const cachedData = localStorage.getItem("citiesList");
                const cacheTimestamp = localStorage.getItem("citiesListTimestamp");
    
                if (cachedData && cacheTimestamp) {
                    const isCacheValid = Date.now() - parseInt(cacheTimestamp, 10) < ONE_HOUR;
    
                    if (isCacheValid) {
                        const data = JSON.parse(cachedData);
                        setCities(data);
                        return;
                    }
                }
                const citiesList = await getCitiesWithDelivery();
                setCities(citiesList);
    
                localStorage.setItem("citiesList", JSON.stringify(citiesList));
                localStorage.setItem("citiesListTimestamp", Date.now().toString());
            } catch (err) {
                console.error("Error fetching products:", err);
            }
          }
          fetchCities();
    }, [])

  return (
    <div className="absolute rounded-b-lg rounded-md 
    border-2 border-t-0 border-yellow-500 h-[240px]
    overflow-y-scroll w-[100%] -bottom-[273%] z-50 bg-white">
      { cities.map((city) => (
        <div className="py-2 px-2 cursor-pointer hover:bg-yellow-400" 
        key={ city.id }
        onClick={() => setSelectedCity(city)}>
            { city.title }
        </div>
      )) }
    </div>
  )
}