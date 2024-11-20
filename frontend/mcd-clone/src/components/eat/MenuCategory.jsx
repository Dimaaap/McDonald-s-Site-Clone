"use client";

import { getProductsByCategory } from '@/fetch';
import React, { useState, useEffect } from 'react'
import { CategoriesSidebar } from '../shared';
import Link from 'next/link';
import Image from 'next/image'

const ONE_HOUR = 3600 * 1000;

export const MenuCategory = ({ category_id }) => {

    const [products, setProducts] = useState({ category: {}, products: [] })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const fetchProducts = async () => {

            setIsLoading(true)
            try{
                const cachedData = localStorage.getItem(`categoryProducts_${category_id}`);
                const cacheTimestamp = localStorage.getItem(`categoryProducts_${category_id}_Timestamp`);

                if (cachedData && cacheTimestamp) {
                    const isCacheValid = Date.now() - parseInt(cacheTimestamp, 10) < ONE_HOUR;

                    if (isCacheValid) {
                        const data = JSON.parse(cachedData);
                        setProducts(data);
                        return;
                    }
                }
                const prod = await getProductsByCategory(category_id);
                setProducts(prod);

                localStorage.setItem(`categoryProducts_${category_id}`, JSON.stringify(prod));
                localStorage.setItem(`categoryProducts_${category_id}_Timestamp`, Date.now().toString());
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally{
                setIsLoading(false)
            }
    };
        if (category_id) fetchProducts();
    }, [])
  return (
    <div className="flex flex-row gap-12 px-5 py-12">
        <CategoriesSidebar activeCategory={ products.category.title } />
        <div className="flex flex-col gap-7 w-4/5 text-center">
            <h1 className="text-4xl font-extrabold">
                { products.category.title }
            </h1>
            <div className="grid grid-cols-3 gap-7 gap-y-20">
            {!isLoading && products.products.map((product) => (
                <Link href={`/eat/product/${ product.id }/`} 
                key={ product.id } className="flex flex-col 
                gap-4 justify-center">
                    <Image src={ product.image } alt={ product.title }
                    width={ 200 } height={ 200 } />
                    <p className="max-w-[60%] text-center ml-[6%] text-[1.1rem]">
                        { product.title }
                    </p>
                </Link>
            )) }
        </div>
        </div>
    </div>
  )
}
