'use client'
import styles from "@/components/Faq/Faq.module.scss";
import {useState} from "react";

interface Faq_itemProps {
    head: string,
    description: string
}

export default function Faq_item({head, description}: Faq_itemProps) {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles.faq__item} ${isOpen ? styles.faq__item__open : ''}`}
        >
            <div className={styles.faq__header}>
                <li>{head}</li>
                <span className={`${styles.faq__icon} ${isOpen ? styles.faq__icon__open : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M8 1V15M1 8H15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
            </div>
            <p>{description}</p>
        </div>
    )
}