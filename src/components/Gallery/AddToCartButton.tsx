import {IProduct} from "@/data/products.types";
import {CartItem, useCartStore} from "@/store/cart";
import {useCartModalStore} from "@/store/cardModal";

interface AddToCartButtonProps {
    product: IProduct;
    classname?: string;
}

export default function AddToCartButton({ product, classname}: AddToCartButtonProps) {
    const addToCart = useCartStore((state) => state.addToCart);
    const openModal = useCartModalStore((state) => state.openModal);

    function handleClick() {
        if (!product) return;

        // создаём CartItem
        const item: CartItem = { ...product, quantity: 1 };
        addToCart(item);
        openModal();
    }

    return (
        <button
            className={`${classname}`}
            onClick={handleClick}
        >
            В корзину
        </button>
    );
}
