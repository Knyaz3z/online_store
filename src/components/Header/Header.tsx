import Nav from "@/components/Header/Nav/Nav";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header>
            <div className={styles.topInfo}>
                <p className="flex flex-col gap-0">
                    <span>+7 (495) 540 49 00</span>
                    <span>ежедневно с 10:00 до 22:00</span>
                </p>
                <Image src={'AJ_logo.svg'} alt={'logo'} width={112} height={117}/>
                <div className='flex gap-1'>
                    <Image src={'search.svg'} alt={'search'} width={30} height={30}/>
                    <Image src={'shopping_cart.svg'} alt={'shopping cart'} width={30} height={30}/>
                    <input className='border rounded-xl p-1 ' type="text" placeholder={'поиск'}/>
                </div>
            </div>

        </header>
    )
}