'use client'

import {categoryData} from "@/data/products.data";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

export default function CategoryHeaderLinks() {
    const pathname = usePathname();

    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)

        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [width])

    const [isOpen, setIsOpen] = useState(false)

    if (width < 768) {
        return (
            <nav
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={'flex cursor-pointer justify-center hover:bg-orange-600 items-center self-center ' +
                        'border border-gray-200 hover:border-gray-50 rounded-2xl p-2 my-2 mx-auto hover:text-white! transition-all ease-in 03'}
                >
                    {
                        isOpen ? 'Закрыть меню' : 'Открыть меню'
                    }
                </button>
                {
                    isOpen ? (
                        <div
                            className="
            grid
            grid-cols-2
            md:grid-cols-4
            2xl:grid-cols-8
            gap-3
            max-w-350
            mr-auto
            ml-auto
            pr-4
            pl-4
            py-4
            auto-rows-auto
            "
                        >
                            {categoryData.map((c) => {
                                const isActive = pathname === `/${c.slug}`;
                                return (
                                    <Link
                                        key={c.id}
                                        href={`/${c.slug}`}
                                        onClick={()=> setIsOpen(false)}
                                        className={`
              flex justify-center items-center px-4 py-2 rounded-xl border 
              text-sm font-medium transition-all duration-200
              ${isActive
                                            ? "bg-black text-white border-black shadow-md"
                                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                                        }
            `}
                                    >
                                        {c.name}
                                    </Link>
                                );
                            })}
                        </div>
                    ) : ''
                }

            </nav>

        )
    }

    return (
        <nav className="
            grid
            grid-cols-2
            md:grid-cols-4
            2xl:grid-cols-8
            gap-3
            max-w-350
            mr-auto
            ml-auto
            pr-4
            pl-4
            py-4
            auto-rows-auto
            ">
            {categoryData.map((c) => {
                const isActive = pathname === `/${c.slug}`;
                return (
                    <Link
                        key={c.id}
                        href={`/${c.slug}`}
                        className={`
              flex justify-center items-center px-4 py-2 rounded-xl border 
              text-sm font-medium transition-all duration-200
              ${isActive
                            ? "bg-black text-white border-black shadow-md"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                        }
            `}
                    >
                        {c.name}
                    </Link>
                );
            })}
        </nav>
    );
}
