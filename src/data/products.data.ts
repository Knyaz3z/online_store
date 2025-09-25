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
    {id: 1, name: 'iPhone 15', price: 100, categoryId: 1, image: '/', description: 'fake desc'},
    {id: 2, name: 'iPhone 17', price: 100, categoryId: 1, image: '/', description: 'fake desc'},
    {id: 3, name: 'MacBook', price: 200, categoryId: 2, image: '/', description: 'fake desc'},
    {id: 4, name: 'iPhone', price: 100, categoryId: 1, image: '/', description: 'fake desc'},
    {id: 5, name: 'iPhone', price: 100, categoryId: 1, image: '/', description: 'fake desc'},
    {id: 6, name: 'iPhone', price: 100, categoryId: 1, image: '/', description: 'fake desc'},
    {id: 7, name: 'iPhone', price: 100, categoryId: 1, image: '/', description: 'fake desc'},
    {id: 8, name: 'iPhone', price: 100, categoryId: 1, image: '/', description: 'fake desc'},
    {id: 9, name: 'iPhone', price: 100, categoryId: 1, image: '/', description: 'fake desc'},
]