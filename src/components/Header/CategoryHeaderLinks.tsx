'use client'

import {categoryData} from "@/data/products.data";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function CategoryHeaderLinks() {
    const pathname = usePathname();

    return (
        <nav className="
            grid
            grid-cols-2
            
            md:grid-cols-4


            2xl:grid-cols-8
            gap-3
            container
            py-4
            auto-rows-auto
            ">
            {categoryData.map((c) => {
                const isActive = pathname === `/${c.slug}`;
                return (
                    <Link
                        key={c.id}
                        href={c.slug}
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
