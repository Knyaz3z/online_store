import {categoryData} from "@/data/products.data";
import Link from "next/link";
import styles from './Nav.module.scss'

export default function Nav(){
    return (
        <nav className={styles.nav}>
            {
                categoryData.map((category, index) => (
                    <Link className={styles.nav__item} href={category.slug} key={index}>{category.name}</Link>
                ))
            }
        </nav>

    )
}