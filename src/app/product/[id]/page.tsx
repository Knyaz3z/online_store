import { notFound } from 'next/navigation';
import { productsData } from '@/data/products.data';
import ProductCard from '@/components/ProductCard';

interface PageProps {
    params: { id: string };
}

export default function ProductPage({ params }: PageProps) {
    const productId = Number(params.id);
    const product = productsData.find(p => p.id === productId);

    if (!product) return notFound();

    return <main><ProductCard product={product} /></main>;
}
