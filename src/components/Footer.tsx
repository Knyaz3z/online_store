import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-6 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* ЛОГО + описание */}
                <div>
                    <h3 className="text-2xl font-bold mb-2">AJ Store</h3>
                    <p className="text-gray-400 text-sm">
                        Продажа техники Apple с гарантией и доставкой по всей России.
                    </p>
                </div>

                {/* Навигация */}
                <nav className="flex flex-col space-y-2 text-gray-300">
                    <Link href="/" className="hover:text-orange-500 transition">Главная</Link>
                    <Link href="/iphone" className="hover:text-orange-500 transition">Каталог</Link>
                </nav>

                {/* Контакты */}
                <div>
                    <p className="mb-2 text-gray-300">
                        Телефон: <a href="tel:+79998887766" className="text-blue-400 hover:text-blue-300">+7 (999) 888-77-66</a>
                    </p>
                    <p className="text-gray-300">
                        Email: <a href="mailto:info@apple-store.ru" className="text-blue-400 hover:text-blue-300">info@apple-store.ru</a>
                    </p>

                    {/* Соцсети */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" aria-label="Instagram" className="hover:text-orange-500 transition">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" aria-label="Telegram" className="hover:text-orange-500 transition">
                            <i className="fab fa-telegram text-xl"></i>
                        </a>
                        <a href="#" aria-label="WhatsApp" className="hover:text-orange-500 transition">
                            <i className="fab fa-whatsapp text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Нижняя часть */}
            <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-8 pt-4">
                © 2025 AJ.ru Все права защищены.
            </div>
        </footer>
    );
}
