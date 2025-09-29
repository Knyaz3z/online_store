import { ICategory, IProduct } from "@/data/products.types";

export const categoryData: ICategory[] = [
    { id: 1, name: 'iPhone', slug: 'iphone' },
    { id: 2, name: 'MacBook', slug: 'macbook' },
    { id: 3, name: 'MacMini', slug: 'macmini' },
    { id: 4, name: 'AirPods', slug: 'airpods' },
    { id: 5, name: 'MacStudio', slug: 'macstudio' },
    { id: 6, name: 'iPad', slug: 'ipad' },
    { id: 7, name: 'Watch', slug: 'watch' },
    { id: 8, name: 'Аксессуары', slug: 'accessories' },
];

export const productsData: IProduct[] = [
    // iPhone
    { id: 1, name: 'iPhone 17 Black', price: 150000, categoryId: 1, image: '/iphone.png', description: '256Gb, Черный' },
    { id: 2, name: 'iPhone 17 White', price: 150000, categoryId: 1, image: '/iphone_white.png', description: '256Gb, Белый' },
    { id: 3, name: 'iPhone 16 Pro', price: 140000, categoryId: 1, image: '/iphone.png', description: '128Gb, Черный' },
    { id: 4, name: 'iPhone 16 Pro Max', price: 145000, categoryId: 1, image: '/iphone_white.png', description: '128Gb, Белый' },
    { id: 5, name: 'iPhone SE 2024', price: 90000, categoryId: 1, image: '/iphone.png', description: '64Gb, Красный' },
    { id: 6, name: 'iPhone 15', price: 120000, categoryId: 1, image: '/iphone.png', description: '128Gb, Черный' },
    { id: 7, name: 'iPhone 15 Plus', price: 125000, categoryId: 1, image: '/iphone_white.png', description: '128Gb, Белый' },
    { id: 8, name: 'iPhone 14', price: 110000, categoryId: 1, image: '/iphone.png', description: '64Gb, Черный' },
    { id: 9, name: 'iPhone 14 Pro', price: 130000, categoryId: 1, image: '/iphone_white.png', description: '256Gb, Белый' },

    // MacBook
    { id: 10, name: 'MacBook Air 2025 M4', price: 150000, categoryId: 2, image: '/macbook.png', description: '8Gb RAM, 256Gb SSD, Серебристый' },
    { id: 11, name: 'MacBook Air 2024 M4', price: 145000, categoryId: 2, image: '/macbook.png', description: '8Gb RAM, 512Gb SSD, Серый' },
    { id: 12, name: 'MacBook Pro 2025 M4', price: 180000, categoryId: 2, image: '/macbook.png', description: '16Gb RAM, 512Gb SSD, Серебристый' },
    { id: 13, name: 'MacBook Pro 2024 M3', price: 170000, categoryId: 2, image: '/macbook.png', description: '16Gb RAM, 256Gb SSD, Серый' },
    { id: 14, name: 'MacBook Air 2023 M3', price: 140000, categoryId: 2, image: '/macbook.png', description: '8Gb RAM, 256Gb SSD, Серебристый' },
    { id: 15, name: 'MacBook Pro 2023 M3', price: 160000, categoryId: 2, image: '/macbook.png', description: '16Gb RAM, 512Gb SSD, Серый' },
    { id: 16, name: 'MacBook Air 2022 M2', price: 130000, categoryId: 2, image: '/macbook.png', description: '8Gb RAM, 128Gb SSD, Серебристый' },
    { id: 17, name: 'MacBook Pro 2022 M2', price: 155000, categoryId: 2, image: '/macbook.png', description: '16Gb RAM, 256Gb SSD, Серый' },
    { id: 18, name: 'MacBook Air 2021 M1', price: 120000, categoryId: 2, image: '/macbook.png', description: '8Gb RAM, 256Gb SSD, Серебристый' },

    // MacMini
    { id: 19, name: 'MacMini 2025 M4', price: 120000, categoryId: 3, image: '/macmini.png', description: '16Gb RAM, 512Gb SSD, Серый' },
    { id: 20, name: 'MacMini 2024 M3', price: 110000, categoryId: 3, image: '/macmini.png', description: '8Gb RAM, 256Gb SSD, Серый' },
    { id: 21, name: 'MacMini 2023 M2', price: 100000, categoryId: 3, image: '/macmini.png', description: '8Gb RAM, 128Gb SSD, Серебристый' },
    { id: 22, name: 'MacMini 2022 M1', price: 95000, categoryId: 3, image: '/macmini.png', description: '8Gb RAM, 256Gb SSD, Серый' },
    { id: 23, name: 'MacMini 2021 M1', price: 90000, categoryId: 3, image: '/macmini.png', description: '8Gb RAM, 128Gb SSD, Серебристый' },
    { id: 24, name: 'MacMini 2020 Intel', price: 85000, categoryId: 3, image: '/macmini.png', description: '8Gb RAM, 256Gb SSD, Серый' },
    { id: 25, name: 'MacMini 2019 Intel', price: 80000, categoryId: 3, image: '/macmini.png', description: '8Gb RAM, 128Gb SSD, Серебристый' },
    { id: 26, name: 'MacMini 2018 Intel', price: 75000, categoryId: 3, image: '/macmini.png', description: '8Gb RAM, 128Gb SSD, Серый' },
    { id: 27, name: 'MacMini 2017 Intel', price: 70000, categoryId: 3, image: '/macmini.png', description: '4Gb RAM, 128Gb SSD, Серебристый' },

    // AirPods
    { id: 28, name: 'AirPods 2', price: 12000, categoryId: 4, image: '/airpods.png', description: 'Белый, Bluetooth 5.0' },
    { id: 29, name: 'AirPods 3', price: 14000, categoryId: 4, image: '/airpods.png', description: 'Белый, Bluetooth 5.0, шумоподавление' },
    { id: 30, name: 'AirPods Pro', price: 18000, categoryId: 4, image: '/airpods.png', description: 'Белый, Bluetooth 5.0, активное шумоподавление' },
    { id: 31, name: 'AirPods Max', price: 35000, categoryId: 4, image: '/airpods.png', description: 'Серый, Bluetooth 5.0, активное шумоподавление' },
    { id: 32, name: 'AirPods 2 Mini', price: 12000, categoryId: 4, image: '/airpods.png', description: 'Белый, Bluetooth 5.0' },
    { id: 33, name: 'AirPods 3 Mini', price: 14000, categoryId: 4, image: '/airpods.png', description: 'Белый, Bluetooth 5.0' },
    { id: 34, name: 'AirPods Pro Mini', price: 18000, categoryId: 4, image: '/airpods.png', description: 'Белый, Bluetooth 5.0, шумоподавление' },
    { id: 35, name: 'AirPods Max Mini', price: 35000, categoryId: 4, image: '/airpods.png', description: 'Серый, Bluetooth 5.0, активное шумоподавление' },
    { id: 36, name: 'AirPods 2 Black', price: 12000, categoryId: 4, image: '/airpods.png', description: 'Черный, Bluetooth 5.0' },

    // MacStudio
    { id: 37, name: 'MacStudio M1', price: 200000, categoryId: 5, image: '/macstudio.png', description: '32Gb RAM, 512Gb SSD, Серый' },
    { id: 38, name: 'MacStudio M1 Max', price: 250000, categoryId: 5, image: '/macstudio.png', description: '64Gb RAM, 1Tb SSD, Серый' },
    { id: 39, name: 'MacStudio M2', price: 270000, categoryId: 5, image: '/macstudio.png', description: '64Gb RAM, 2Tb SSD, Серый' },
    { id: 40, name: 'MacStudio M2 Ultra', price: 350000, categoryId: 5, image: '/macstudio.png', description: '128Gb RAM, 4Tb SSD, Серый' },
    { id: 41, name: 'MacStudio M1 Mini', price: 180000, categoryId: 5, image: '/macstudio.png', description: '32Gb RAM, 256Gb SSD, Серый' },
    { id: 42, name: 'MacStudio M1 Pro', price: 220000, categoryId: 5, image: '/macstudio.png', description: '64Gb RAM, 512Gb SSD, Серый' },
    { id: 43, name: 'MacStudio M2 Mini', price: 240000, categoryId: 5, image: '/macstudio.png', description: '64Gb RAM, 1Tb SSD, Серый' },
    { id: 44, name: 'MacStudio M1 Ultra', price: 300000, categoryId: 5, image: '/macstudio.png', description: '128Gb RAM, 2Tb SSD, Серый' },
    { id: 45, name: 'MacStudio M2 Pro', price: 320000, categoryId: 5, image: '/macstudio.png', description: '128Gb RAM, 4Tb SSD, Серый' },

    // iPad
    { id: 46, name: 'iPad Pro 12.9"', price: 120000, categoryId: 6, image: '/ipad.png', description: '256Gb, Серый' },
    { id: 47, name: 'iPad Pro 11"', price: 110000, categoryId: 6, image: '/ipad.png', description: '256Gb, Серый' },
    { id: 48, name: 'iPad Air', price: 90000, categoryId: 6, image: '/ipad.png', description: '128Gb, Белый' },
    { id: 49, name: 'iPad 10"', price: 80000, categoryId: 6, image: '/ipad.png', description: '64Gb, Серый' },
    { id: 50, name: 'iPad Mini', price: 75000, categoryId: 6, image: '/ipad.png', description: '64Gb, Белый' },
    { id: 51, name: 'iPad 9"', price: 70000, categoryId: 6, image: '/ipad.png', description: '64Gb, Серый' },
    { id: 52, name: 'iPad Air 2024', price: 95000, categoryId: 6, image: '/ipad.png', description: '128Gb, Серый' },
    { id: 53, name: 'iPad Pro 2024', price: 125000, categoryId: 6, image: '/ipad.png', description: '256Gb, Белый' },
    { id: 54, name: 'iPad Mini 2024', price: 80000, categoryId: 6, image: '/ipad.png', description: '64Gb, Черный' },

    // Watch
    { id: 55, name: 'Watch 30', price: 50000, categoryId: 7, image: '/watch.png', description: 'Черный, GPS, 44мм' },
    { id: 56, name: 'Watch 20', price: 45000, categoryId: 7, image: '/watch.png', description: 'Белый, GPS, 40мм' },
    { id: 57, name: 'Watch 19', price: 40000, categoryId: 7, image: '/watch.png', description: 'Серый, GPS, 40мм' },
    { id: 58, name: 'Watch SE', price: 35000, categoryId: 7, image: '/watch.png', description: 'Серебристый, GPS, 40мм' },
    { id: 59, name: 'Watch 18', price: 38000, categoryId: 7, image: '/watch.png', description: 'Черный, GPS, 40мм' },
    { id: 60, name: 'Watch 17', price: 36000, categoryId: 7, image: '/watch.png', description: 'Белый, GPS, 44мм' },
    { id: 61, name: 'Watch 16', price: 34000, categoryId: 7, image: '/watch.png', description: 'Серый, GPS, 44мм' },
    { id: 62, name: 'Watch 15', price: 32000, categoryId: 7, image: '/watch.png', description: 'Черный, GPS, 44мм' },
    { id: 63, name: 'Watch 14', price: 30000, categoryId: 7, image: '/watch.png', description: 'Серебристый, GPS, 40мм' },

    // Аксессуары
    { id: 64, name: 'Чехол для iPhone', price: 2000, categoryId: 8, image: '/accessories.png', description: 'Силиконовый, Черный' },
    { id: 65, name: 'Чехол для iPad', price: 2500, categoryId: 8, image: '/accessories.png', description: 'Силиконовый, Серый' },
    { id: 66, name: 'Зарядка USB-C', price: 1500, categoryId: 8, image: '/accessories.png', description: '20W, Белая' },
    { id: 67, name: 'Кабель Lightning', price: 1000, categoryId: 8, image: '/accessories.png', description: '1м, Белый' },
    { id: 68, name: 'Кабель USB-C', price: 1000, categoryId: 8, image: '/accessories.png', description: '1м, Белый' },
    { id: 69, name: 'Наушники Bluetooth', price: 3500, categoryId: 8, image: '/accessories.png', description: 'Черные, Bluetooth 5.0' },
    { id: 70, name: 'Подставка для MacBook', price: 3000, categoryId: 8, image: '/accessories.png', description: 'Алюминий, Серый' },
    { id: 71, name: 'Подставка для iPad', price: 2500, categoryId: 8, image: '/accessories.png', description: 'Пластик, Черный' },
    { id: 72, name: 'Защитное стекло iPhone', price: 1000, categoryId: 8, image: '/accessories.png', description: 'Закаленное, Прозрачное' },
];
