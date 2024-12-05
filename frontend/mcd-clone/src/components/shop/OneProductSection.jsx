"use client"
import { getUniqueProduct } from '@/fetch'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Feedbacks } from '.'

export const OneProductSection = ({ product_id }) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async() => {
      try{
        const prod = await getUniqueProduct(product_id);
        setProduct(prod)  
      } catch(err){
        console.error(err)
        console.error("Error fetching product")
      }
    }
    fetchProduct()
  }, [])

  return (
    <div>
      <div className="w-full h-screen 
      bg-[url('https://shop.rmhc.org.ua/wp-content/themes/shop-rmhc/img/bgs/bg-product.svg')]
      bg-center bg-no-repeat bg-cover px-[5%] py-[7%] flex flex-row gap-7">
        <div className="w-1/2">
          <Image src={ product.image } alt={ product.title } width={500} height={500} 
          className="rounded-md w-full h-full" />
        </div>
        <div className="w-1/2 flex flex-col gap-5 text-left">
          <h1 className="text-4xl font-extrabold">
            { product.title }
          </h1>
          <h1 className="text-3xl font-extrabold text-red-600">
            { product.price } грн.
          </h1>
          <p className="text-[1.2rem]">
            { product.description }
          </p>
          <div className="flex flex-row gap-7 items-center">
            <button type="submit" className="w-[40%] rounded-md bg-yellow-400 
            hover:bg-yellow-500 text-white font-extrabold text-center px-4
            py-3">
              Подарувати  
            </button>
            <p className="text-[1rem] font-extrabold">
              Час у наявності: безлімітний
            </p>
          </div>
        </div>
      </div>
      <Feedbacks />
    </div>
  )
}