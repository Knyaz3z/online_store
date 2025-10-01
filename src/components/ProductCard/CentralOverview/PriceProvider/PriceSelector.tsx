'use client'
import {useState} from "react";
import {IProduct} from "@/data/products.types";
import ProductOptions from "./ProductOptions";
import ProductPrice from "./ProductPrice";

interface PriceSelectorProps {
    product: IProduct;
}

export default function PriceSelector({product}: PriceSelectorProps) {
    const [selectedPrice, setSelectedPrice] = useState(product.price);

    return (
        <div>
            <ProductOptions product={product} setSelectedPrice={setSelectedPrice}/>
            <ProductPrice price={selectedPrice} basePrice={product.price}/>
        </div>
    )
}
