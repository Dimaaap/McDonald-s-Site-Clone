"use client";

import { MainFooter, UniqueProduct } from "@/components";
import { usePathname } from "next/navigation";


export default function CategoryPage(){
    const currentPage = usePathname();
    const productId = currentPage.split('/')

    return(
        <div>
            <UniqueProduct productId={ productId[productId.length - 1] } />
            <MainFooter />
        </div>
    )
}