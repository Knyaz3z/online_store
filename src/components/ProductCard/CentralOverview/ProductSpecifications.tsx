interface ProductSpecificationsProps {
    classname?: string;
}

export default function ProductSpecifications({}:ProductSpecificationsProps){

    return(
        <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold mb-3">Основные
                характеристики</h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
                <div
                    className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-600">Процессор</span>
                    <span className="font-medium">Apple M2</span>
                </div>
                <div
                    className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-600">Экран</span>
                    <span className="font-medium">6.1&quot; OLED</span>
                </div>
                <div
                    className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-600">Память</span>
                    <span className="font-medium">8GB RAM</span>
                </div>
            </div>
        </div>
    )
}