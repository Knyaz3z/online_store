export interface IOption {
    name: string; // например, "Память"
    values: { value: string; price: number }[];
}

export interface IProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    bigDescription?: string
    price: number;
    categoryId: number;
    options?: IOption[];
}

export interface ICategory {
    id: number
    name: string
    slug: string
}

