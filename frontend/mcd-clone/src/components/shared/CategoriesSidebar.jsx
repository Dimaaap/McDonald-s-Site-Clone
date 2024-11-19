"use client"

import React, { useState, useEffect } from 'react'
import { getMenuCategories } from "@/fetch"
import Link from 'next/link';
import Image from 'next/image';

const ONE_HOUR = 3600 * 1000;

export const CategoriesSidebar = () => {

    const [menuCategories, setMenuCategories] = useState([])
    
    useEffect(() => {
        const fetchCategories = async() => {
            try {
                const cachedData = localStorage.getItem("menuCategories");
                const cacheTimestamp = localStorage.getItem("menuCategoriesTimestamp");

                if (cachedData && cacheTimestamp){
                    const isCacheValid = Date.now() - parseInt(cacheTimestamp, 10) < ONE_HOUR;
                    
                    if(isCacheValid){
                        setMenuCategories(JSON.parse(cachedData));
                        return;
                    }
                }

                const categories = await getMenuCategories() 
                setMenuCategories(categories)

                localStorage.setItem("menuCategories", JSON.stringify(categories));
                localStorage.setItem("menuCategoriesTimestamp", Date.now().toString());
            } catch (err) {
                console.error(err)
            }
        }
        fetchCategories()
    }, [])
  return (
    <div className="flex flex-col gap-5 max-w-1/5">
        <div className="border border-black px-7 py-3 rounded-md">
            <Link className='flex flex-row gap-5 items-center'
            href="/eat/fullmenu/">
                <Image src="https://s7d1.scene7.com/is/image/mcdonalds/nav_allmenu_v2:category-panel-left-desktop" 
                alt="" width={80} height={80} />
                <h1 className="font-extrabold">
                    Меню
                </h1>
            </Link>
        </div>
        <div className="flex flex-col rounded-md border border-black justify-end
        px-7 py-3 ">
        { menuCategories.map((category) => (
            <Link href={`/eat/fullmenu/${category.id}`} key={ category.id } 
            className="flex flex-row gap-5 items-center">
                <Image src={category.image} alt="category" width={80} height={80} />
                <h1>{ category.title }</h1>
            </Link>
        )) }
        </div>
    </div>
  )
}

