import {IProduct} from "@/data/products.types";
import {Dispatch, SetStateAction, useState} from "react";

interface ProductOptionsProps {
    product: IProduct
    setSelectedPrice: Dispatch<SetStateAction<number>>
}

export default function ProductOptions({product, setSelectedPrice}:ProductOptionsProps){
    const [isActive, setIsActive] = useState(1)


    function setOption(setter: number, index: number) {
        setSelectedPrice(setter)
        setIsActive(index)
    }
    return(
        <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
                        <span
                            className="text-gray-700 font-medium w-15">Память:</span>
                <div
                    className="grid grid-cols-3 gap-0.5 md:grid-cols-4 ">
                    {product.options?.[0].values.map((size, index) => (
                        <button
                            key={index}
                            className={`p-2 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors 
                                            font-medium ${isActive === index ? 'border-orange-500' : ''}`}
                            onClick={() => setOption(size.price, index)}
                        >
                            {size.value}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-3">
                        <span
                            className="text-gray-700 font-medium w-15">Цвет:</span>
                <div
                    className="grid grid-cols-3 gap-0.5 lg:grid-cols-3 ">
                    {['Черный', 'Белый', 'Серый', 'Синий'].map((color) => (
                        <button
                            key={color}
                            className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors font-medium"
                        >
                            {color}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}