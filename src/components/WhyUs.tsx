'use client'

import clsx from "clsx";
import {CheckIcon} from "@/components/icons/СheckIcon";

interface WhyUsProps {
    className?: string;
}

export function WhyUs({ className }: WhyUsProps) {
    const benefits = [
        {
            title: "Быстрое оформление заказа",
            description:
                "Оформить заказ на нашем сайте занимает 5 минут. Мы свяжемся с вами для подтверждения заказа в течение 15 минут и зарезервируем товар на складе",
        },
        {
            title: "Проверка и учет всех ваших пожеланий",
            description:
                "Мы проверим товар на все внешние и внутренние дефекты, установим софт, который вам необходим, а также нанесем гравировку на клавиши вашего MacBook",
        },
        {
            title: "Доставка в день заказа",
            description:
                "Мы доставим товар в день заказа. Вы сможете быстро его получить, а также проверить все на месте до оплаты. Мы ценим наших клиентов, поэтому всегда готовы радовать вас новыми товарами как можно быстрее",
        },
        {
            title: "Гарантия - 1 год",
            description:
                "Мы верим, что наша продукция лучшая на рынке, поэтому всегда предоставляем гарантию 1 год на всю нашу продукцию",
        },
    ];

    return (
        <section className={clsx("py-16 bg-gray-50", className)} aria-label="Почему выбрать наш магазин">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Почему вам стоит выбрать AJ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <article key={index} className="flex gap-4" itemScope itemType="https://schema.org/Offer">
                            <div className="flex-shrink-0 mt-1">
                                <CheckIcon className="w-8 h-8 text-blue-500" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2" itemProp="name">{benefit.title}</h3>
                                <p className="text-gray-700" itemProp="description">{benefit.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Структурированные данные для поисковиков */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Почему выбрать наш магазин",
                    "mainEntity": benefits.map((b, i) => ({
                        "@type": "Offer",
                        "name": b.title,
                        "description": b.description
                    }))
                })}} />
        </section>
    );
}
