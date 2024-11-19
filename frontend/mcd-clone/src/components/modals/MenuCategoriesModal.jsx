"use client";

import React, { useState, useEffect } from "react";
import { getMenuCategories } from "@/fetch"
import Link from "next/link";
import Image from "next/image";

const ONE_HOUR = 3600 * 1000;


export const MenuCategoriesModal = () => {

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
    <div className="w-[1260px] bg-white py-[62px] px-[70px] absolute
    top-16 bottom-0 -left-[203px] right-52 rounded-md border border-gray-500 
    shadow-sm z-50
    min-h-[110vh] flex flex-col gap-5">
      <div className="grid grid-cols-3
      gap-[3%]">
        { menuCategories.map((category) => (
        <Link href={`/eat/fullmenu/${category.id}`} 
        className="flex flex-row gap-3 items-center" 
        key={ category.id }>
            <Image src={ category.image } width={ 100 } height={ 100 } 
            alt="category image" />
            { category.title }
        </Link>
      )) }
      </div>
      <div className="justify-center mt-[5%] ml-[35%]">
        <Link href="/eat/fullmenu" className="border border-black rounded-md 
        shadow-sm text-center hover:shadow:md px-4 py-2 mt-[10%]">
          Переглянути повне меню 
        </Link>
      </div>
    </div>
  )
}
