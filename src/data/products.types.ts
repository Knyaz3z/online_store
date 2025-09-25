export interface IProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    categoryId: number;
}

export interface ICategory {
    id: number
    name: string
    slug: string
}

