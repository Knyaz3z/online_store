import Image from "next/image";
import Nav from "@/components/Nav/Nav";
import {Gallery} from "@/components/Gallery/Gallery";
import {Suspense} from "react";
import {WhyUs} from "@/components/WhyUs";
import Link from "next/link";
import {productsData} from "@/data/products.data";

export default function Home() {

    const advantageProducts = [29, 30];
    const visibleProducts = productsData.filter(p => advantageProducts.includes(p.id));
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] max-h-[1200px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
                    <Image
                        src={'/hero_image_test_mobile.jpg'}
                        alt={'главное изображение'}
                        fill
                        className="object-cover object-center md:object-top lg:object-center opacity-60 md:hidden"
                        priority
                        sizes="100vw"
                        quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <Image
                        src={'/hero_image_test.jpg'}
                        alt={'главное изображение'}
                        fill
                        className="object-cover object-center md:object-top lg:object-center opacity-60 hidden md:block"
                        priority
                        sizes="100vw"
                        quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                </div>

                {/* Контент с адаптивными отступами */}
                <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-4 sm:mb-6 tracking-tight">
                        iPhone 17
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 mb-6 sm:mb-8 px-2 sm:px-0">
                        Уже в продаже — в магазине AJ.ru
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <Link href={'/product/1'} className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-light transition-colors w-full sm:w-auto sm:flex-1 text-center">
                            Купить
                        </Link>
                        <Link href={'/product/1'} className="border border-gray-400 hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-light transition-colors w-full sm:w-auto sm:flex-1 text-center">
                            Подробнее
                        </Link>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Card 1 */}
                    <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-8 transform group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={'/airpods_advantage.jpg'}
                                    alt={'AirPods 3'}
                                    width={280}
                                    height={300}
                                    className="w-48 h-auto md:w-56 lg:w-64"
                                />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                                    AirPods 3
                                </h3>
                                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-md">
                                    Максимальная тишина.
                                    <br />
                                    Минимальный размер.
                                </p>
                                <div className="space-y-3">
                                        <div className="text-2xl font-light text-gray-900">{visibleProducts[0].price.toLocaleString()}  руб.</div>
                                    <Link href={'/product/29'} className="bg-orange-600 hover:bg-orange-700 block text-white px-8 py-3 rounded-full text-base font-normal transition-colors w-full max-w-xs">
                                        Заказать
                                    </Link>
                                    <Link href={'/product/29'} className="text-blue-600 hover:text-blue-700 block text-base font-normal transition-colors">
                                        Подробнее ›
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-8 transform group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={'/airpods_advantage.jpg'}
                                    alt={'AirPods 3'}
                                    width={280}
                                    height={300}
                                    className="w-48 h-auto md:w-56 lg:w-64"
                                />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                                    AirPods Pro
                                </h3>
                                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-md">
                                    Максимальная тишина.
                                    <br />
                                    Минимальный размер.
                                </p>
                                <div className="space-y-3">
                                    <div className="text-2xl font-light text-gray-900">{visibleProducts[1].price.toLocaleString()}  руб.</div>
                                    <Link href={'/product/30'} className="bg-orange-600 hover:bg-orange-700 block text-white px-8 py-3 rounded-full text-base font-normal transition-colors w-full max-w-xs">
                                        Заказать
                                    </Link>
                                    <Link href={'/product/30'} className="text-blue-600 hover:text-blue-700 block text-base font-normal transition-colors">
                                        Подробнее ›
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-4">
                        Почему AirPods?
                    </h2>
                    <p className="text-xl text-gray-600 font-light mb-16 max-w-2xl mx-auto">
                        Инновационные технологии для безупречного звука
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Пространственный звук",
                                description: "Объемный звук с отслеживанием движений головы"
                            },
                            {
                                title: "Активное шумоподавление",
                                description: "Полное погружение в музыку без помех"
                            },
                            {
                                title: "До 30 часов",
                                description: "Работа от одного заряда с кейсом"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-light text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 font-light">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation and Other Sections */}
            <Suspense fallback={
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            }>
                <Nav/>
            </Suspense>

            <Suspense fallback={
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            }>
                <Gallery/>
            </Suspense>

            <WhyUs/>
        </div>
    );
}