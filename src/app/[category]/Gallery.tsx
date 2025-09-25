'use client'
import React from "react";
import {categoryData, productsData} from '@/data/products.data'
import {usePathname} from "next/navigation";


export default function Gallery(){
    const pathname = usePathname()

    const currentCategory = pathname ? (categoryData.find((c)=> c.slug === pathname.substring(1))) : (categoryData.find((c)=> c.slug === 'iphone'))

    const products = productsData.filter((p)=>p.categoryId === currentCategory?.id)
    console.log(products)
    return (
        <div className='flex gap-2'>
                {
                products.map((p, index)=>(
                    <div key={index} className="product-card border-1">
                        <p>{p.name}</p>
                        <p>{p.price}</p>
                        <p>{p.description}</p>
                    </div>
                ))
                }
        </div>
    );
};
