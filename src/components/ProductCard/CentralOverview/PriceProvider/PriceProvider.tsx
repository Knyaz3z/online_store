'use client'
// PriceProvider.tsx
import {IProduct} from "@/data/products.types";
import PriceSelector from "./PriceSelector";

interface PriceProviderProps {
    product: IProduct;
}

export default function PriceProvider({product}: PriceProviderProps) {
    return (
        <div>
            {/* Только клиентский компонент */}
            <PriceSelector product={product}/>
        </div>
    )
}