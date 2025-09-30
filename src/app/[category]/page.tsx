import {categoryData, productsData} from "@/data/products.data";
import GalleryItem from "@/components/Gallery/GalleryItem";

interface CategoryPageProps {
    params: { category: string };
}

export default function CategoryPage({params}: CategoryPageProps) {
    const categoryId = params.category;
    const currentCategory = categoryData.find((c) => c.slug === categoryId);

    const productToShow = productsData.filter((p) => p.categoryId === currentCategory?.id)
    console.log(productToShow)
    return (
        <div>
            <h1 className={'text-4xl flex justify-center mb-4'}>{currentCategory?.name} — купить в Москве с гарантией</h1>
            <ul className={'gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container'}>
                {
                    productToShow.map((item, index) => (
                        <GalleryItem
                            key={item.id}
                            imgLink={item.image}
                            title={item.name}
                            price={item.price}
                            desc={item.description}
                            id={item.id}
                        />
                    ))
                }
            </ul>

        </div>
    );
}
