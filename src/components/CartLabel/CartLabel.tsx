import {CartIcon} from "@/components/icons/CarsIcon";
import Link from "next/link";
import styles from './CartLabel.module.scss'

interface CartLabelProps {
    classname?: string;
}

export default function CartLabel({}:CartLabelProps){

    return(
        <div className={''}>
            <Link className={`${styles.label} fixed w-25 h-25 bottom-0 right-0 bg-emerald-700 rounded-full p-4 text-white mb-4 mr-4`} href={'/cart'}>
                <CartIcon/>
            </Link>
        </div>
    )
}