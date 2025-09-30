import Image from "next/image";
import styles from "./Header.module.scss";
import {SearchIcon} from "@/components/icons/SearchIcon";
import {CartIcon} from "@/components/icons/CarsIcon";
import Link from "next/link";
import CategoryHeaderLinks from "@/components/Header/CategoryHeaderLinks";

export default function Header() {
    return (
        <header>
            <div className={styles.topInfo}>
                <p className="flex flex-col gap-0">
                    <span>+7 (495) 540 49 00</span>
                    <span>ежедневно с 10:00 до 22:00</span>
                </p>
                <Link href={'/'}><Image src={'/AJ_logo.svg'} alt={'logo'} width={112} height={117}/></Link>
                <div className='flex gap-1'>
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <SearchIcon className="w-10 h-10 cursor-pointer text-gray-700" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded">
                        <CartIcon className="w-10 h-10 cursor-pointer text-gray-700" />
                    </button>
                    <input className='border rounded-xl p-1 ' type="text" placeholder={'поиск'}/>
                </div>
            </div>
            <CategoryHeaderLinks/>
        </header>
    )
}