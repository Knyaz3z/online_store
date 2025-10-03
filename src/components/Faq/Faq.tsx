import styles from './Faq.module.scss'
import Faq_item from "@/components/Faq/Faq_item";

export default function Faq() {

    const faqArray = [
        {
            head: 'Есть ли у вас гарантия?',
            description: 'Конечно! Гарантия на всю нашу продукцию - 1 год. Вы всегда сможете вернуть или обменять товар если проблема была в самом товаре, а не в  эксплуатации'
        },
        {
            head: 'Есть ли у вас гарантия?',
            description: 'Конечно! Гарантия на всю нашу продукцию - 1 год. Вы всегда сможете вернуть или обменять товар если проблема была в самом товаре, а не в  эксплуатации'
        },
        {
            head: 'Есть ли у вас гарантия?',
            description: 'Конечно! Гарантия на всю нашу продукцию - 1 год. Вы всегда сможете вернуть или обменять товар если проблема была в самом товаре, а не в  эксплуатации'
        },
        {
            head: 'Есть ли у вас гарантия?',
            description: 'Конечно! Гарантия на всю нашу продукцию - 1 год. Вы всегда сможете вернуть или обменять товар если проблема была в самом товаре, а не в  эксплуатации'
        },
    ]

    return (
        <div className={styles.faq__wrapper}>
            <div className={`${styles.faq__inner} container`}>
                <ul>
                    {
                        faqArray.map((item, index)=>(
                            <Faq_item
                                key={index}
                                head={item.head}
                                description={item.description}
                            />

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}