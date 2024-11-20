"use client";

import { MainFooter, MenuCategory } from "@/components";
import { usePathname } from "next/navigation";


export default function CategoryPage(){
    const currentPage = usePathname();
    const categoryId = currentPage.split('/')

    return(
        <div>
            { console.log(categoryId[categoryId.length - 1]) }
            <MenuCategory category_id={ categoryId[categoryId.length - 1] } />
            <MainFooter />
        </div>
    )
}