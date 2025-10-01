interface ProductPriceProps {
    price: number;
    basePrice: number;
}

export default function ProductPrice({price, basePrice}: ProductPriceProps) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">
                    {price.toLocaleString()} ₽
                </span>
                <span className="text-lg text-gray-500 line-through">
                    {(price * 1.2).toLocaleString()} ₽
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-bold">
                    -20%
                </span>
            </div>
            <p className="text-green-600 font-medium">
                ✓ Экономия {(basePrice * 0.2).toLocaleString()} ₽
            </p>
        </div>
    )
}
