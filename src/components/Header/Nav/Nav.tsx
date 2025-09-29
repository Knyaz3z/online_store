'use client'
import {categoryData} from "@/data/products.data";
import styles from './Nav.module.scss'
import {useState} from "react";

export default function Nav(){
    const [activeBtn, setActiveBtn] = useState(0)
    return (
        <nav className={styles.nav}>
            {
                categoryData.map((category, index) => (
                    <button onClick={() => setActiveBtn(index)}
                            className={`${activeBtn === index ? styles.active : ''} ${styles.nav__item}`}
                            key={index}>{category.name}</button>
                ))
            }
        </nav>

    )
}