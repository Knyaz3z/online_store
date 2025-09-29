'use client'
import {categoryData} from "@/data/products.data";
import styles from './Nav.module.scss'
import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function Nav(){
    const router = useRouter()
    const params = useSearchParams()
    const [activeBtn, setActiveBtn] = useState(0)

    const handleURLChange = (slug: string, index: number) => {
        setActiveBtn(index)

        const newParams = new URLSearchParams(params.toString())
        newParams.set("category", slug)
        router.replace(`/?${newParams.toString()}`, {scroll: false})
    }

    useEffect(() => {
        router.replace(`/?category=iphone`, {scroll: false})
    }, [])
    return (
        <nav className={styles.nav}>
            {
                categoryData.map((category, index) => (
                    <button onClick={() => handleURLChange(category.slug, index)}
                            className={`${activeBtn === index ? styles.active : ''} ${styles.nav__item}`}
                            key={index}>{category.name}</button>
                ))
            }
        </nav>

    )
}