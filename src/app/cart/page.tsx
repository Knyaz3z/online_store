'use client'
import {useCartStore} from "@/store/cart";
import Image from "next/image";
import {Minus, Plus, ShoppingBag, Trash2} from "lucide-react";

export default function CartPage() {
    const { items, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCartStore();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-orange-500 rounded-xl shadow-lg">
                        <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">Корзина</h1>
                        <p className="text-gray-600 mt-1">Товары, которые вы выбрали</p>
                    </div>
                </div>

                {items.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <ShoppingBag className="w-10 h-10 text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-xl mb-4">Ваша корзина пуста</p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Начать покупки
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Список товаров */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Изображение */}
                                        <div className="flex-shrink-0">
                                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 shadow-inner">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 112px) 100vw, 112px"
                                                />
                                            </div>
                                        </div>

                                        {/* Информация о товаре */}
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>

                                            {/* Опции товара */}
                                            {item.options && item.options.length > 0 && (
                                                <div className="space-y-1 mb-4">
                                                    {item.options.map((opt) => (
                                                        <div key={opt.name} className="flex items-center gap-2">
                                                            <span className="text-sm text-gray-500 font-medium">{opt.name}:</span>
                                                            <div className="flex flex-wrap gap-1">
                                                                {opt.values.filter((v) => v.available).map((v) => (
                                                                    <span
                                                                        key={v.value}
                                                                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                                                                    >
                                                                        {v.value}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Управление количеством и цена */}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                                                <div className="flex items-center gap-4">
                                                    {/* Счетчик */}
                                                    <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                                                        <button
                                                            onClick={() => decreaseQuantity(item.id)}
                                                            className="p-2 hover:bg-gray-50 transition-colors text-gray-600 hover:text-orange-500"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="px-4 font-bold text-gray-900 min-w-[3rem] text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => increaseQuantity(item.id)}
                                                            className="p-2 hover:bg-gray-50 transition-colors text-gray-600 hover:text-orange-500"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    {/* Удалить */}
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>

                                                {/* Цена */}
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-gray-900">
                                                        {(item.price * item.quantity).toLocaleString()} ₽
                                                    </div>
                                                    {item.quantity > 1 && (
                                                        <div className="text-sm text-gray-500">
                                                            {item.price.toLocaleString()} ₽ за шт.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Панель итогов */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Детали заказа</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center text-lg">
                                        <span className="text-gray-600">Товары ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                                        <span className="font-semibold">{totalPrice().toLocaleString()} ₽</span>
                                    </div>
                                    <div className="flex justify-between items-center text-lg">
                                        <span className="text-gray-600">Доставка</span>
                                        <span className="font-semibold text-green-500">Бесплатно</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex justify-between items-center text-xl font-bold">
                                            <span>Итого</span>
                                            <span className="text-orange-500">{totalPrice().toLocaleString()} ₽</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                                    Оформить заказ
                                </button>

                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-500">
                                        или <button className="text-orange-500 hover:text-orange-600 font-medium">продолжить покупки</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}