'use client'


import {useCartModalStore} from "@/store/cardModal";

export default function AddToCartModal() {
    const { isOpen, closeModal } = useCartModalStore();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-xl font-bold mb-2">Товар добавлен в корзину!</h2>
                <button
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                    onClick={closeModal}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
}
