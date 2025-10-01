'use client'
import {useState} from "react";

interface RightBlockProps {

}

export default function RightBlock({}:RightBlockProps){
    const [quantity, setQuantity] = useState(1);
    return(
    <div className="lg:w-1/5">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
            {/*<div className="mb-4">*/}
            {/*    <div className="text-2xl font-bold text-gray-900 mb-2">*/}
            {/*        {selectedPrice.toLocaleString()} ₽*/}
            {/*    </div>*/}
            {/*    <div className="text-sm text-gray-500 line-through mb-1">*/}
            {/*        {(selectedPrice * 1.2).toLocaleString()} ₽*/}
            {/*    </div>*/}
            {/*    <div className="text-green-600 text-sm font-medium">*/}
            {/*        Вы*/}
            {/*        экономите {(selectedPrice * 0.2).toLocaleString()} ₽*/}
            {/*    </div>*/}
            {/*</div>*/}

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
                <button className="w-full border border-zinc-800 hover:bg-orange-600 hover:border-0 hover:text-white cursor-pointer text-black font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2">
                    Добавить в корзину
                </button>
                <button className="w-full bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2">
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
    )
}