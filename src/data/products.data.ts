import {ICategory, IProduct} from "@/data/products.types";

export const categoryData: ICategory[] = [
    {
        id: 1,
        name: 'iPhone',
        slug: 'iphone',
    },
    {
        id: 2,
        name: 'MacBook',
        slug: 'macbook',
    },
    {
        id: 3,
        name: 'MacMini',
        slug: 'macmini',
    },
    {
        id: 4,
        name: 'AirPods',
        slug: 'airpods',
    },
    {
        id: 5,
        name: 'MacStudio',
        slug: 'macstudio',
    },
    {
        id: 6,
        name: 'iPad',
        slug: 'ipad',
    },
    {
        id: 7,
        name: 'Watch',
        slug: 'watch',
    },
    {
        id: 8,
        name: 'Аксессуары',
        slug: 'accessories'
    },
]

export const productsData: IProduct[] = [
    {id: 1, name: 'iPhone 17 Black', price: 150000, categoryId: 1, image: '/iphone_17_black.png', description: 'fake desc'},
    {id: 2, name: 'iPhone 17 White', price: 150000, categoryId: 1, image: '/iphone_17_white.png', description: 'fake desc'},
    {id: 3, name: 'MacBook Air 2025 M4', price: 150000, categoryId: 2, image: '/', description: 'fake desc'},
    {id: 4, name: 'MacBook Air 2024 M4', price: 150000, categoryId: 2, image: '/', description: 'fake desc'},
    {id: 5, name: 'AirPods 2', price: 150000, categoryId: 3, image: '/', description: 'fake desc'},
    {id: 6, name: 'AirPods 3', price: 150000, categoryId: 3, image: '/', description: 'fake desc'},
    {id: 7, name: 'Watch 30', price: 150000, categoryId: 7, image: '/', description: 'fake desc'},
    {id: 8, name: 'Watch 20', price: 150000, categoryId: 7, image: '/', description: 'fake desc'},
    {id: 9, name: 'iPhone', price: 150000, categoryId: 1, image: '/iphone_17_black.png', description: 'fake desc'},
    {id: 10, name: 'iPhone 17 White', price: 150000, categoryId: 1, image: '/iphone_17_white.png', description: 'fake desc'},
]