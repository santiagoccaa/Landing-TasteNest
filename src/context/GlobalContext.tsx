"use client"

import { global_menu, MenuItems } from "@/components/data";
import { createContext, ReactNode, useEffect, useState } from "react";

interface GlobalContextTypes {
    category: string
    handleChangeCategory: (category: string) => void
    menuSelected: MenuItems[]
}

const GlobalContext = createContext<GlobalContextTypes>({
    category: "",
    handleChangeCategory: () => { },
    menuSelected: []
});

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [category, setCategory] = useState("dessert")
    const [menuSelected, setMenuSelected] = useState<MenuItems[]>([])

    const handleChangeCategory = (category: string) => {
        setCategory(category)
    }

    useEffect(() => {
        const menu = global_menu.filter((item) => item.menu_category === category)
        setMenuSelected(menu)
    }, [category])

    return (
        <GlobalContext.Provider
            value={{
                category,
                handleChangeCategory,
                menuSelected
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider };
export default GlobalContext;
