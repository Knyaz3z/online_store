import Image from "next/image";
import {IProduct} from "@/data/products.types";

interface ImageBlockProps {
    product: IProduct;
}

export default function ImageBlock({product}: ImageBlockProps) {

    return (
        <div className="lg:w-2/5">
            <div
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
                <div className="flex justify-center items-center h-80">
                    <Image
                        src={product.image}
                        alt={`${product.name} — купить в магазине Apple`}
                        width={320}
                        height={320}
                        className="object-contain transition-transform hover:scale-105 duration-300"
                        priority
                    />
                </div>
                <div className="flex gap-2 mt-4 justify-center">
                    {[1, 2, 3, 4].map((num) => (
                        <div
                            key={num}
                            className="w-16 h-16 border-2 border-transparent hover:border-orange-500 rounded-lg bg-gray-100 cursor-pointer flex items-center justify-center z-0"
                        >
                            <Image
                                src={product.image}
                                alt={`Вариант ${num}`}
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}