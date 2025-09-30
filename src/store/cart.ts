// src/store/cart.ts
import {create} from "zustand";
import {persist} from "zustand/middleware";
import {IProduct} from "@/data/products.types";

interface CartItem extends IProduct {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
    totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addToCart: (product: IProduct) => {
                const items = get().items;
                const existing = items.find((item) => item.id === product.id);

                if (existing) {
                    set({
                        items: items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    // создаём CartItem из IProduct, точно сохраняя поля name, image, price
                    set({ items: [...items, { ...product, quantity: 1 }] });
                }
            },

            removeFromCart: (id) =>
                set({ items: get().items.filter((item) => item.id !== id) }),

            increaseQuantity: (id) =>
                set({
                    items: get().items.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                }),

            decreaseQuantity: (id) =>
                set({
                    items: get().items
                        .map((item) =>
                            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                        )
                        .filter((item) => item.quantity > 0),
                }),

            clearCart: () => set({ items: [] }),

            totalPrice: () =>
                get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }),
        {
            name: "cart-storage", // key в LocalStorage
        }
    )
);