"use client"
import React, {useState, useEffect} from 'react'
import { ServiceCard } from '../shared'
import { getShopProducts } from '@/fetch';


export const TimeForFamilies = () => {

    const [ products, setProducts ] = useState([])
    const [ showAll, setShowAll ] = useState(false)

    useEffect(() => {
       const fetchProducts = async() => {
            try{
                const prod = await getShopProducts();
                setProducts(prod)   
            } catch(err){
                console.error(err)
            }
       }
    fetchProducts();
    }, [])

  return (
    <div className="p-[5%] bg-gray-100 flex flex-col gap-7 -mt-[5%]">
      <h1 className="text-4xl font-extrabold text-center">
        Подаруйте безцінний час родинам
      </h1>
      <div className="grid grid-cols-4 gap-x-5 gap-y-10">
        { products.map(product => (
            <ServiceCard key={ product.id } imageSrc={ product.image }
            title={ product.title } price={ product.price } link={`/shop/${ product.id }`} />    
        )) }
       
      </div>
    </div>
  )
}
