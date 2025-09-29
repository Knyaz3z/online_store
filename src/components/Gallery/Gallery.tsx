'use client'
import clsx from 'clsx';
import {useSearchParams} from "next/navigation";
import {categoryData, productsData} from "@/data/products.data";
import GalleryItem from "@/components/Gallery/GalleryItem";
import {useState} from "react";

interface GalleryProps {
    className?: string;
}

export function Gallery({ className }: GalleryProps) {
    const searchParams = useSearchParams();
    const searchCategoryData = searchParams.get('category');
    const currentCategory = categoryData.find((c) => c.slug === searchCategoryData);
    const [currentPage, setCurrentPage] = useState(1);

    const currentProductsSet = productsData.filter(
        (p) => p.categoryId === currentCategory?.id
    );

    if (!currentProductsSet.length) {
        return <p className="text-center text-gray-500">Товары не найдены</p>;
    }

    const numberOfPages = Math.ceil(currentProductsSet.length / 6)
    const pageNumbers = Array.from({length: numberOfPages}, (_, i) => i + 1)

    const start = (currentPage - 1) * 6;
    const end = start + 6
    const productsToShow = currentProductsSet.slice(start, end)

    return (
        <section>
            <ul className={clsx("gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container", className)}>
                {productsToShow.map((item) => (
                        <GalleryItem
                            imgLink={item.image}
                            title={item.name}
                            price={item.price}
                            desc={item.description}
                            key={item.id}
                        />
                ))}
            </ul>
            <div className="flex justify-center mt-4 gap-2">
                {
                    pageNumbers.map((pageNumber) => (
                        <button
                            className={clsx("px-3 py-1 border rounded cursor-pointer transition-all ease-out duration-300", currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-white text-black")}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))
                }
            </div>
        </section>

    );
}
