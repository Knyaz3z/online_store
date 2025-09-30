'use client'
import {useCartStore} from "@/store/cart";
import Image from "next/image";

export default function CartPage() {
    const {
        items,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice
    } = useCartStore();

    return (
        <div className="container py-6">
            <h1 className="text-3xl font-bold mb-6">Корзина</h1>

            {items.length === 0 ? (
                <p className="text-gray-500">Ваша корзина пуста</p>
            ) : (
                <div className="space-y-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4"
                        >
                            <div
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-contain p-1 rounded-md"
                                    height={100}
                                    width={100}
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    {/*ЗДЕСЬ ВЫВОД OPTIONS, пока что не настроен*/}
                                    {/*{item.options && item.options.length > 0 && (*/}
                                    {/*    <div*/}
                                    {/*        className="text-sm text-gray-600 mt-1">*/}
                                    {/*        {item.options.map((opt) => (*/}
                                    {/*            <div key={opt.name}>*/}
                                    {/*                {opt.name}:{" "}*/}
                                    {/*                {opt.values*/}
                                    {/*                    .filter((v) => v.available)*/}
                                    {/*                    .map((v) => v.value)*/}
                                    {/*                    .join(", ")}*/}
                                    {/*            </div>*/}
                                    {/*        ))}*/}
                                    {/*    </div>*/}
                                    {/*)}*/}
                                </div>
                            </div>

                            <div
                                className="flex items-center gap-3 mt-2 sm:mt-0">
                                <div
                                    className="flex items-center border rounded-md overflow-hidden">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="px-3 py-1 hover:bg-gray-200 transition"
                                    >
                                        -
                                    </button>
                                    <span
                                        className="px-4">{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="px-3 py-1 hover:bg-gray-200 transition"
                                    >
                                        +
                                    </button>
                                </div>
                                <span
                                    className="font-medium">{(item.price * item.quantity).toLocaleString()} ₽</span>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:underline transition"
                                >
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="text-right font-bold text-xl">
                        Итого: {totalPrice().toLocaleString()} ₽
                    </div>
                </div>
            )}
        </div>
    );
}
