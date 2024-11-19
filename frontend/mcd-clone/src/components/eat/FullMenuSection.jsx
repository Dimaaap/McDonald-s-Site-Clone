"use client"

import React, { useState, useEffect } from 'react'
import { CategoriesSidebar } from '../shared'
import { getProducts } from '@/fetch';
import Link from 'next/link';
import Image from 'next/image';

const ONE_HOUR = 3600 * 1000;

export const FullMenuSection = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const cachedData = localStorage.getItem("products");
                const cacheTimestamp = localStorage.getItem("productsTimestamp");

                if (cachedData && cacheTimestamp){
                    const isCacheValid = Date.now() - parseInt(cacheTimestamp, 10) < ONE_HOUR;
                    
                    if(isCacheValid){
                        setProducts(JSON.parse(cachedData));
                        return;
                    }
                }

                const prod = await getProducts() 
                setProducts(prod)

                localStorage.setItem("products", JSON.stringify(prod));
                localStorage.setItem("menuCategoriesTimestamp", Date.now().toString());
            } catch (err) {
                console.error(err)
            }
        }
        fetchProducts()
    }, [])
  return (
    <div className="flex flex-row gap-12 px-5 py-12">
      <CategoriesSidebar />
      <div className="flex flex-col gap-7 w-4/5">
        <div className="flex flex-col gap-5 text-center font-extrabold">
            <h1 className="text-4xl">
                Меню
            </h1>
            <h1 className="text-2xl">
                Повне меню
            </h1>
        </div>
        <div className="grid grid-cols-3 gap-7 gap-y-20">
            { products.map((product) => (
                <Link href={`/eat/product/${product.id}`} key={product.id}
                className="flex flex-col gap-4 justify-center">
                    <Image src={ product.image } alt={ product.title } 
                    width={ 200 } height={ 200 }/>
                    <p className='max-w-[60%] text-center ml-[6%] text-[1.1rem]'>
                        { product.title }
                    </p> 
                </Link>
            )) }
        </div>
      </div>
    </div>
  )
}

