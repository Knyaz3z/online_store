import React from "react";
import {productsData} from '@/data/products.data'
import Gallery from "@/app/[category]/Gallery";

interface pageProps {
  categoryId: number;
  className?: string;
}


export default function CategoryPage({className, categoryId}: pageProps){
  return (
    <div className={className}>
      <Gallery/>
      <p>
        ALO
      </p>
    </div>
  );
};
