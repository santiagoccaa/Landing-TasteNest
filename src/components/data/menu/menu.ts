    export interface MenuItems {
    title: string;
    description: string;
    price: string;
    menu_category: string;
    ingredients: string[];
}

export const global_menu: MenuItems[] = [
    // Dessert
    {
        title: "Chocolate Lava Cake",
        description: "Bizcocho de chocolate suave con centro fundido de cacao puro.",
        price: "6.50",
        menu_category: "dessert",
        ingredients: ["Harina", "Azúcar", "Chocolate negro", "Huevos", "Mantequilla"],
    },
    {
        title: "Cheesecake de Fresa",
        description: "Tarta cremosa con cobertura de fresas frescas.",
        price: "5.90",
        menu_category: "dessert",
        ingredients: ["Queso crema", "Galletas", "Azúcar", "Nata", "Fresas"],
    },
    {
        title: "Tiramisú Clásico",
        description: "Postre italiano con café, cacao y mascarpone.",
        price: "6.20",
        menu_category: "dessert",
        ingredients: ["Mascarpone", "Café espresso", "Huevos", "Azúcar", "Cacao en polvo"],
    },
    {
        title: "Helado Artesanal",
        description: "Tres bolas de helado a elegir: vainilla, chocolate o pistacho.",
        price: "4.80",
        menu_category: "dessert",
        ingredients: ["Leche", "Nata", "Azúcar", "Sabores (vainilla/chocolate/pistacho)"],
    },

    // Steak
    {
        title: "Ribeye Steak",
        description: "Corte jugoso de res a la parrilla con mantequilla de ajo.",
        price: "18.90",
        menu_category: "steak",
        ingredients: ["Ribeye (corte de res)", "Mantequilla", "Ajo", "Sal gruesa", "Pimienta"],
    },
    {
        title: "Filete Mignon",
        description: "Corte premium envuelto en tocino con salsa de vino tinto.",
        price: "22.50",
        menu_category: "steak",
        ingredients: ["Filete mignon", "Tocino", "Salsa de vino tinto", "Mantequilla", "Sal y pimienta"],
    },
    {
        title: "T-Bone Steak",
        description: "Corte clásico con hueso, servido con papas rústicas.",
        price: "20.00",
        menu_category: "steak",
        ingredients: ["T-bone", "Aceite de oliva", "Papas", "Romero", "Sal gruesa"],
    },
    {
        title: "Steak a la Pimienta",
        description: "Filete sellado en salsa cremosa de pimienta negra.",
        price: "19.40",
        menu_category: "steak",
        ingredients: ["Filete", "Pimienta negra", "Nata", "Caldo de carne", "Mantequilla"],
    },

    // coffee
    {
        title: "Espresso Doble",
        description: "Café intenso de tueste medio con crema dorada.",
        price: "2.80",
        menu_category: "coffee",
        ingredients: ["Café molido (tueste medio)", "Agua filtrada"],
    },
    {
        title: "Capuccino",
        description: "Espresso con leche vaporizada y espuma cremosa.",
        price: "3.50",
        menu_category: "coffee",
        ingredients: ["Espresso", "Leche entera (o alternativa)", "Espuma de leche"],
    },
    {
        title: "Latte Vainilla",
        description: "Café suave con leche espumosa y un toque de vainilla.",
        price: "3.90",
        menu_category: "coffee",
        ingredients: ["Espresso", "Leche", "Sirope de vainilla"],
    },
    {
        title: "Mocha",
        description: "Combinación de café, leche y chocolate derretido.",
        price: "4.20",
        menu_category: "coffee",
        ingredients: ["Espresso", "Leche", "Chocolate", "Azúcar"],
    },

    // Burger
    {
        title: "Classic Cheeseburger",
        description: "Carne 100% res, queso cheddar, lechuga y tomate.",
        price: "8.50",
        menu_category: "burger",
        ingredients: ["Carne de res 100%", "Queso cheddar", "Pan brioche", "Lechuga", "Tomate", "Salsa"],
    },
    {
        title: "BBQ Bacon Burger",
        description: "Hamburguesa con tocino, cebolla caramelizada y salsa BBQ.",
        price: "9.80",
        menu_category: "burger",
        ingredients: ["Carne de res", "Tocino", "Cebolla caramelizada", "Queso", "Salsa BBQ", "Pan"],
    },
    {
        title: "Spicy Jalapeño Burger",
        description: "Carne jugosa con jalapeños, queso pepper jack y salsa picante.",
        price: "9.50",
        menu_category: "burger",
        ingredients: ["Carne de res", "Jalapeños", "Queso pepper jack", "Salsa picante", "Pan"],
    },
    {
        title: "Veggie Burger",
        description: "Hamburguesa vegetariana con garbanzos, aguacate y espinaca.",
        price: "8.20",
        menu_category: "burger",
        ingredients: ["Garbanzos", "Aguacate", "Espinaca", "Pan integral", "Especias"],
    },
]
