'use client'

import clsx from 'clsx';
import Image from "next/image";
import styles from './Gallery.module.scss'
import Link from "next/link";
import {useCartStore} from "@/store/cart";
import {IProduct} from "@/data/products.types";
import AddToCartButton from "@/components/Gallery/AddToCartButton";

interface GalleryItemProps {
    className?: string;
    imgLink: string,
    title: string,
    price: number,
    desc: string,
    id: number,
    product?: IProduct;
}

export default function GalleryItem({
                                        className,
                                        imgLink,
                                        title,
                                        price,
                                        desc,
                                        id,
                                        product
                                    }: GalleryItemProps) {
    const addToCart = useCartStore((state) => state.addToCart);
    return (
        <li  className={clsx(`opacity-0 animate-fadeIn m-3 md:m-0 ${styles.card}`,className)}>
            <Link href={`/product/${id}`} className={styles.card__imgWrapper}>
                <Image
                    className={styles.card__img}
                    src={imgLink}
                    alt={`${title} — купить в магазине Apple`}
                    width={180}
                    height={220}
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </Link>
            <h4 className={styles.card__title}>{title}</h4>
            <p className={styles.card__desc}>{desc}</p>
            <p className={styles.card__price}>{price.toLocaleString()} ₽</p>
            <div className={styles.card__buttons}>
                <Link href={`/product/${id}`}
                      className={styles.card__more}>Подробнее</Link>
                <AddToCartButton product={{
                    id,
                    name: title,
                    image: imgLink,
                    price,
                    description: desc,
                    categoryId: id
                }}/>
            </div>
        </li >
    );
}
