'use client';
import Image from 'next/image';
import {useState} from 'react';
import {IProduct} from '@/data/products.types';

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [selectedPrice, setSelectedPrice] = useState(product.price);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const previewLength = 200;
    const previewText = product.bigDescription?.slice(0, previewLength) + (product.bigDescription && product.bigDescription.length > previewLength ? '...' : '');

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Левая колонка - изображение */}
                <div className="lg:w-2/5">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
                        <div className="flex justify-center items-center h-80">
                            <Image
                                src={product.image}
                                alt={`${product.name} — купить в магазине Apple`}
                                width={320}
                                height={320}
                                className="object-contain transition-transform hover:scale-105 duration-300"
                                priority
                            />
                        </div>
                        <div className="flex gap-2 mt-4 justify-center">
                            {[1, 2, 3, 4].map((num) => (
                                <div
                                    key={num}
                                    className="w-16 h-16 border-2 border-transparent hover:border-orange-500 rounded-lg bg-gray-100 cursor-pointer flex items-center justify-center z-0"
                                >
                                    <Image
                                        src={product.image}
                                        alt={`Вариант ${num}`}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Центральная колонка - информация о товаре */}
                <div className="lg:w-2/5">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        {/* Хлебные крошки */}
                        <div className="text-sm text-gray-500 mb-4">
                            <span className="hover:text-orange-500 cursor-pointer">Главная</span>
                            <span className="mx-2">/</span>
                            <span className="hover:text-orange-500 cursor-pointer">Apple</span>
                            <span className="mx-2">/</span>
                            <span className="text-gray-700">{product.name}</span>
                        </div>

                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            {product.name}
                        </h1>

                        {/* Рейтинг и отзывы */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <div
                                        key={star}
                                        className="text-yellow-400 text-lg"
                                    >
                                        ★
                                    </div>
                                ))}
                                <span className="text-blue-600 text-sm font-medium ml-1">4.8</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                                247 отзывов
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-green-600 text-sm font-medium">
                                ✓ В наличии
                            </span>
                        </div>

                        {/* Опции товара */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-gray-700 font-medium">Память:</span>
                                <div className="flex gap-2">
                                    {['128GB', '256GB', '512GB', '1TB'].map((size) => (
                                        <button
                                            key={size}
                                            className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors font-medium"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-700 font-medium">Цвет:</span>
                                <div className="flex gap-2">
                                    {['Черный', 'Белый', 'Серый', 'Синий'].map((color) => (
                                        <button
                                            key={color}
                                            className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors font-medium"
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Цена и скидка */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-3xl font-bold text-gray-900">
                                    {product.price.toLocaleString()} ₽
                                </span>
                                <span className="text-lg text-gray-500 line-through">
                                    {(product.price * 1.2).toLocaleString()} ₽
                                </span>
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-bold">
                                    -20%
                                </span>
                            </div>
                            <p className="text-green-600 font-medium">
                                ✓ Экономия {(product.price * 0.2).toLocaleString()} ₽
                            </p>
                        </div>

                        {/* Описание */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Описание</h3>
                            <div className="text-gray-700 leading-relaxed">
                                {showFullDescription ? product.bigDescription : previewText}
                                {product.bigDescription && product.bigDescription.length > previewLength && (
                                    <button
                                        className="ml-2 text-blue-600 hover:text-orange-500 font-medium transition-colors"
                                        onClick={() => setShowFullDescription(!showFullDescription)}
                                    >
                                        {showFullDescription ? 'Свернуть' : 'Развернуть'}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Характеристики */}
                        <div className="border-t border-gray-200 pt-4">
                            <h3 className="text-lg font-semibold mb-3">Основные характеристики</h3>
                            <div className="grid grid-cols-1 gap-2 text-sm">
                                <div className="flex justify-between py-1 border-b border-gray-100">
                                    <span className="text-gray-600">Процессор</span>
                                    <span className="font-medium">Apple M2</span>
                                </div>
                                <div className="flex justify-between py-1 border-b border-gray-100">
                                    <span className="text-gray-600">Экран</span>
                                    <span className="font-medium">6.1" OLED</span>
                                </div>
                                <div className="flex justify-between py-1 border-b border-gray-100">
                                    <span className="text-gray-600">Память</span>
                                    <span className="font-medium">8GB RAM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая колонка - покупка */}
                <div className="lg:w-1/5">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
                        <div className="mb-4">
                            <div className="text-2xl font-bold text-gray-900 mb-2">
                                {product.price.toLocaleString()} ₽
                            </div>
                            <div className="text-sm text-gray-500 line-through mb-1">
                                {(product.price * 1.2).toLocaleString()} ₽
                            </div>
                            <div className="text-green-600 text-sm font-medium">
                                Вы экономите {(product.price * 0.2).toLocaleString()} ₽
                            </div>
                        </div>

                        {/* Доставка */}
                        <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-center gap-2 text-green-700 mb-1">
                                <span className="text-lg">🚚</span>
                                <span className="font-medium">Доставка сегодня</span>
                            </div>
                            <div className="text-xs text-green-600">
                                При заказе в течение 2 часов
                            </div>
                        </div>

                        {/* Количество */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Количество
                            </label>
                            <div className="flex justify-around border border-gray-300 rounded-lg">
                                <button
                                    className="px-3 py-2 w-full text-gray-600 hover:bg-gray-100 transition-colors"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    −
                                </button>
                                <span className="px-4 py-2 border-l border-r border-gray-300 font-medium">
                                    {quantity}
                                </span>
                                <button
                                    className="px-3 py-2 w-full text-gray-600 hover:bg-gray-100 transition-colors"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Кнопки действий */}
                        <div className="space-y-3">
                            <button className="w-full bg-zinc-800 hover:bg-orange-600 cursor-pointer text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2">
                                Добавить в корзину
                            </button>
                            <button className="w-full bg-blue-800 hover:bg-orange-600 cursor-pointer text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2">
                                <span>⚡</span>
                                Купить сейчас
                            </button>
                        </div>

                        {/* Гарантии */}
                        <div className="mt-4 space-y-2 text-xs text-gray-600">
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Гарантия 1 год</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Возврат в течение 14 дней</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Официальная гарантия Apple</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}