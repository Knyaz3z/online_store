'use client';
import Image from 'next/image';
import { useState } from 'react';
import OptionSelector from './OptionSelector';
import { IProduct } from '@/data/products.types';

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [selectedPrice, setSelectedPrice] = useState(product.price);

    return (
        <section>

        </section>
    );
}
