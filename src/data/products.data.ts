import {ICategory, IProduct} from "@/data/products.types";

const categoryData: ICategory[] = [
    {
        id: 1,
        name: 'iPhone'
    },
    {
        id: 2,
        name: 'MacBook'
    },
    {
        id: 3,
        name: 'MacMini'
    },
    {
        id: 4,
        name: 'AirPods'
    },
    {
        id: 5,
        name: 'MacStudio'
    },
    {
        id: 6,
        name: 'iPad'
    },
    {
        id: 7,
        name: 'Watch'
    },
    {
        id: 8,
        name: 'Аксессуары'
    },
]

const productsData: IProduct[] = [
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