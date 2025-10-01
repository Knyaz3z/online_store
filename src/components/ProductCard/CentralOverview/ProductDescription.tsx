// ProductDescription.tsx (server)
import {IProduct} from "@/data/products.types";
import DescriptionToggle from "./DescriptionToggle";

interface ProductDescriptionProps {
    product: IProduct;
}

export default function ProductDescription({product}: ProductDescriptionProps) {
    const previewLength = 200;
    const previewText = product.bigDescription?.slice(0, previewLength) +
        (product.bigDescription && product.bigDescription.length > previewLength ? '...' : '');

    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Описание</h3>
            <div className="text-gray-700 leading-relaxed">
                <DescriptionToggle
                    fullText={product.bigDescription || ""}
                    previewText={previewText}
                />
            </div>
        </div>
    );
}
