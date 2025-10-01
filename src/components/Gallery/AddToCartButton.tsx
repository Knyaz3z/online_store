import {IProduct} from "@/data/products.types";
import {CartItem, useCartStore} from "@/store/cart";
import {useCartModalStore} from "@/store/cardModal";
import styles from './Gallery.module.scss' // если экспортируешь

interface AddToCartButtonProps {
    product: IProduct;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
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
            className={styles.card__cart}
            onClick={handleClick}
        >
            В корзину
        </button>
    );
}
