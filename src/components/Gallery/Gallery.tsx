'use client'
import clsx from 'clsx';
import { useSearchParams } from "next/navigation";
import { categoryData, productsData } from "@/data/products.data";
import GalleryItem from "@/components/Gallery/GalleryItem";

interface GalleryProps {
    className?: string;
}

export function Gallery({ className }: GalleryProps) {
    const searchParams = useSearchParams();
    const searchCategoryData = searchParams.get('category');
    const currentCategory = categoryData.find((c) => c.slug === searchCategoryData);

    const currentProductsSet = productsData.filter(
        (p) => p.categoryId === currentCategory?.id
    );

    if (!currentProductsSet.length) {
        return <p className="text-center text-gray-500">Товары не найдены</p>;
    }

    return (
        <ul className={clsx("gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container", className)}>
            {currentProductsSet.map((item) => (
                <li key={item.id}>
                    <GalleryItem
                        imgLink={item.image}
                        title={item.name}
                        price={item.price}
                        desc={item.description}
                    />
                </li>
            ))}
        </ul>
    );
}
