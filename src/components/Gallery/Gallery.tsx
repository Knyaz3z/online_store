'use client'
import clsx from 'clsx';
import {useSearchParams} from "next/navigation";
import {categoryData, productsData} from "@/data/products.data";
import GalleryItem from "@/components/Gallery/GalleryItem";

interface GalleryProps {
    className?: string;
}

export function Gallery({className}: GalleryProps) {
    const searchParams = useSearchParams()
    const searchCategoryData = searchParams.get('category')
    const currentCategory = categoryData.find((c) => c.slug === searchCategoryData)

    const currentProductsSet = productsData.filter((p) => p.categoryId === currentCategory?.id)

    return (
        <div className={clsx("gallery flex justify-center items-center gap-5", className)}>
            {
                currentProductsSet.map((item, index) => (
                    <GalleryItem key={index} imgLink={item.image} title={item.name} price={item.price} desc={item.description}/>
                ))
            }
        </div>
    );
}
