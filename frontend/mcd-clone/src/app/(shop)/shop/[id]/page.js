"use client";
import { usePathname } from "next/navigation";

import { OneProductSection } from "@/components";

export default function NewsPage(){
    const pathname = usePathname()
    const productId = pathname.split("/")[2]
    return(
        <div className="mt-[13%]">
            <OneProductSection product_id={ productId } />
        </div>
    )
}