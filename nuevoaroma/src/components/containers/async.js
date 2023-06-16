const productos = [
    {
        "id": "SASD4",
        "nombre": "Cafetera de Filtro",
        "precio": 70,
        "imagen": "../../../public/images/maquina-de-cafe-de-filtro (2).png",
        "categoria": "cafeteras",
        "stock": 10
    },

    {
        "id": "SDSE6",
        "nombre": "Cafetera Express",
        "precio": 100,
        "imagen": "../../../public/images/maquina-de-cafe-express.png",
        "categoria": "cafeteras",
        "stock": 50
    },

    {
        "id": "YGHD7",
        "nombre": "Cafetera Molinillo",
        "precio": 85,
        "imagen": "../../../public/images/maquinade-de-cafe-molinillo.png",
        "categoria": "cafeteras",
        "stock": 5
    },

    {
        "id": "KIOP6",
        "nombre": "Café Molido",
        "precio": 25,
        "imagen": "../../../public/images/cafe-molido.png",
        "categoria": "tipoDeCafe",
        "stock": 15
    },

    {
        "id": "OPSY2",
        "nombre": "Granos de Café",
        "precio": 30,
        "imagen": "../../../public/images/Sin título-1.png",
        "categoria": "tipoDeCafe",
        "stock": 3
    },
    {
        "id": "ODYV5",
        "nombre": "Cápsulas",
        "precio": 40,
        "imagen": "../../../public/images/capsulas-nespresso.png",
        "categoria": "tipoDeCafe",
        "stock": 40
    },
    {
        "id": "OTFC7",
        "nombre": "Vasos Reutilizables",
        "precio": 20,
        "imagen": "../../../public/images/vasos-reutilizables.png",
        "categoria": "extra",
        "stock": 150
    },
    {
        "id": "YUCH0",
        "nombre": "Tazas Personalizables",
        "precio": 30,
        "imagen": "../../../public/images/taza-reutilizable.png",
        "categoria": "extra",
        "stock": 10
    },
    {
        "id": "JFUC4",
        "nombre": "Almacén",
        "precio": 15,
        "imagen": "../../../public/images/dulce-de-leche.png",
        "categoria": "extra",
        "stock": 42
    }
];

export const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    });
};

export const obtenerProductosId = (productoId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500)
    })
}
export const obtenerProductosPorCategoria = (productoCategoria) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === productoCategoria))
        }, 500)
    })
}