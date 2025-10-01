interface ReviewsProps {

}

export default function Reviews({}: ReviewsProps) {

    return (
        <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <div
                        key={star}
                        className="text-yellow-400 text-lg"
                    >
                        ★
                    </div>
                ))}
                <span
                    className="text-blue-600 text-sm font-medium ml-1">4.8</span>
            </div>
            <span className="text-gray-400">•</span>
            <span
                className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                                247 отзывов
                            </span>
            <span className="text-gray-400 hidden sm:block">•</span>
            <span className="text-green-600 text-sm font-medium hidden sm:block">
                                ✓ В наличии
                            </span>
        </div>
    )
}