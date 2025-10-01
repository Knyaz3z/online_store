import {IProduct} from "@/data/products.types";
import Reviews from "@/components/ProductCard/CentralOverview/Reviews";
import ProductDescription
    from "@/components/ProductCard/CentralOverview/ProductDescription";
import ProductSpecifications
    from "@/components/ProductCard/CentralOverview/ProductSpecifications";
import PriceProvider
    from "@/components/ProductCard/CentralOverview/PriceProvider/PriceProvider";

interface CentralProductBlockProps {
    product: IProduct;
}

export default function CentralProductBlock({
                                                product,
                                            }: CentralProductBlockProps) {


    return (
        <div className="lg:w-2/5">
            <div
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {product.name}
                </h1>
                <Reviews/>

                {/* Опции товара */}
                <PriceProvider product={product}/>
                {/* Описание сервер */}
                <ProductDescription product={product}/>
                {/* Характеристики */}
                <ProductSpecifications/>
            </div>
        </div>
    )
}