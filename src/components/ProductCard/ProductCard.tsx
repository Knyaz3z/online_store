/* eslint-disable react/no-unescaped-entities */
import {IProduct} from '@/data/products.types';
import ImageBlock from "@/components/ProductCard/ImageBlock";
import CentralProductBlock
    from "@/components/ProductCard/CentralOverview/CentralProductBlock";
import RightBlock from "@/components/ProductCard/RightBlock";

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {



    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Левая колонка - изображение */}
                <ImageBlock product={product}/>

                {/* Центральная колонка - информация о товаре */}
                <CentralProductBlock product={product}
                />

                {/* Правая колонка - информация о цене и кнопки */}
                <RightBlock
                />

            </div>
        </section>
    );
}