import { productsData } from '@/data/products.data';
import { categoryData } from '@/data/products.data'; // <-- импортируем categoryData
import fs from 'fs';
import path from 'path';

interface IProduct {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    image: string;
    description: string;
    bigDescription?: string;
}

interface ICategory {
    id: number;
    name: string;
    slug: string;
}

function generateBigDescription(product: IProduct, categoryName: string) {
    return `
${product.name} — современное устройство Apple из категории "${categoryName}". 
Модель отличается надежностью, стильным дизайном и высокой производительностью. 
Характеристики: ${product.description}. Цена в нашем магазине — ${product.price.toLocaleString()} ₽. 

${product.name} создан для тех, кто ценит качество и хочет купить оригинальную продукцию Apple 
с официальной гарантией. Мы предлагаем проверку устройства перед покупкой, установку нужных программ, 
а также возможность быстрой доставки в день заказа. 

Заказывая ${product.name} у нас, вы получаете:
— Проверенный товар без дефектов  
— Официальную гарантию 1 год  
— Быструю доставку по городу  
— Персональную установку софта и настройку  

Если вы ищете ${categoryName.toLowerCase()}, то ${product.name} станет отличным выбором. 
Оформите заказ прямо сейчас и убедитесь в качестве Apple.
  `.trim();
}

const productsWithDescriptions: IProduct[] = productsData.map((product) => {
    const category: ICategory | undefined = categoryData.find((c) => c.id === product.categoryId);
    return {
        ...product,
        bigDescription: generateBigDescription(product, category?.name || 'Техника Apple'),
    };
});

// Указываем путь для записи нового файла с продуктами
const outputPath = path.join(__dirname, '../data/productsWithDescriptions.data.ts');

// Формируем контент файла
const fileContent = `import { IProduct } from './products.types';

export const productsData: IProduct[] = ${JSON.stringify(productsWithDescriptions, null, 2)};
`;

// Записываем файл
fs.writeFileSync(outputPath, fileContent, 'utf-8');

console.log('✅ productsWithDescriptions.data.ts сгенерирован!');
