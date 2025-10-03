'use client'
import Image from "next/image";
import styles from './Application.module.scss';
import {useState} from "react";

export default function Application() {
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Тут можешь подключить API отправки формы (Telegram, email, CRM и т.п.)
        console.log("Отправка номера:", phone);
        setPhone("");
    };

    return (
        <section className={`${styles.application} container`}>
            <div className={styles.application__content}>
                <h2 className={styles.application__title}>
                    Нужна консультация? <br/>
                    Оставьте свой номер, мы вам перезвоним!
                </h2>

                <form onSubmit={handleSubmit} className={styles.application__form}>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                        className={styles.application__input}
                    />
                    <button type="submit" className={styles.application__btn}>
                        Отправить
                    </button>
                </form>
            </div>

            <div className={styles.application__image}>
                <Image
                    src="/aplicat_iphone.png"
                    alt="iPhone"
                    width={300}
                    height={400}
                />
            </div>
        </section>
    );
}
