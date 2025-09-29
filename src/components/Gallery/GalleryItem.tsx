import clsx from 'clsx';
import Image from "next/image";
import styles from './Gallery.module.scss'

interface GalleryItemProps {
    className?: string;
    imgLink: string,
    title: string,
    price: number,
    desc: string
}

export default function GalleryItem({ className, imgLink, title, price, desc }: GalleryItemProps) {
    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.card__imgWrapper}>
                <Image
                    className={styles.card__img}
                    src={imgLink}
                    alt={`${title} — купить в магазине Apple`}
                    width={180}
                    height={220}
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>
            <h4 className={styles.card__title}>{title}</h4>
            <p className={styles.card__desc}>{desc}</p>
            <p className={styles.card__price}>{price.toLocaleString()} ₽</p>
            <div className={styles.card__buttons}>
                <button className={styles.card__more}>Подробнее</button>
                <button className={styles.card__cart}>В корзину</button>
            </div>
        </div>
    );
}
