import Image from "next/image";
import styles from "./Header.module.scss";
import {SearchIcon} from "@/components/icons/SearchIcon";
import {CartIcon} from "@/components/icons/CarsIcon";
import Link from "next/link";
import CategoryHeaderLinks from "@/components/Header/CategoryHeaderLinks";

export default function Header() {
    return (
        <header className="w-full">
            <div className={`${styles.topInfo} flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 p-4 md:p-6 max-w-7xl mx-auto`}>
                {/* Телефон и время - скрываем на мобильных, показываем на десктопе */}
                <div className="hidden lg:flex flex-col gap-1 text-sm text-center lg:text-left">
                    <span className="font-medium">+7 (495) 540 49 00</span>
                    <span className="text-xs text-gray-600">ежедневно с 10:00 до 22:00</span>
                </div>

                {/* Логотип */}
                <Link href={'/'} className="flex-shrink-0">
                    <Image
                        src={'/AJ_logo.svg'}
                        alt={'logo'}
                        width={112}
                        height={117}
                        className="w-16 h-auto md:w-20 lg:w-24 xl:w-28"
                    />
                </Link>

                {/* Поиск и корзина */}
                <div className="flex items-center gap-2 md:gap-3 w-full lg:w-auto justify-center">
                    {/* Поисковая строка - скрыта на мобильных, видна на планшетах+ */}
                    <div className="hidden md:flex items-center gap-2 flex-1 lg:flex-initial max-w-xs">
                        <input
                            className='border rounded-xl md:rounded-2xl p-2 md:p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                            type="text"
                            placeholder={'Поиск...'}
                        />
                    </div>

                    {/* Иконки действий */}
                    <div className="flex items-center gap-1 md:gap-2">
                        {/* Иконка поиска для мобильных */}
                        <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
                            <SearchIcon className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-gray-700" />
                        </button>

                        {/* Иконка корзины */}
                        <Link href={'/cart'} className="p-2 hover:bg-gray-100 rounded-full relative">
                            <CartIcon className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-gray-700" />
                            {/* Бейдж корзины (если нужен) */}
                            {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">3</span> */}
                        </Link>
                    </div>
                </div>

                {/* Телефон для мобильных - показываем под логотипом */}
                <div className="lg:hidden flex flex-col gap-1 text-sm text-center mt-2">
                    <span className="font-medium">+7 (495) 540 49 00</span>
                    <span className="text-xs text-gray-600">ежедневно с 10:00 до 22:00</span>
                </div>
            </div>

            <CategoryHeaderLinks/>
        </header>
    )
}