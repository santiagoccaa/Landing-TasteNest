"use client"

import { global_menu, MenuItems } from "@/components/data";
import { createContext, ReactNode, useEffect, useState } from "react";

interface GlobalContextTypes {
    category: string
    handleChangeCategory: (category: string) => void
    menuSelected: MenuItems[]
    openModal: boolean
    handleModal: () => void
    productMenu: MenuItems | null
    handleAddProductModal: (product: MenuItems) => void
}

const GlobalContext = createContext<GlobalContextTypes>({
    category: "",
    handleChangeCategory: () => { },
    menuSelected: [],
    openModal: false,
    handleModal: () => { },
    productMenu: null,
    handleAddProductModal: () => { }
});

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [category, setCategory] = useState("dessert")
    const [menuSelected, setMenuSelected] = useState<MenuItems[]>([])
    const [openModal, setOpenModal] = useState(false)
    const [productMenu, setProductMenu] = useState<MenuItems | null>(null)

    const handleChangeCategory = (category: string) => {
        setCategory(category)
    }

    useEffect(() => {
        if (!category) {
            setMenuSelected(global_menu)
            return
        }
        const menu = global_menu.filter((item) => item.menu_category === category)
        setMenuSelected(menu)
    }, [category])

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    const handleAddProductModal = (product: MenuItems) => {
        setProductMenu(product)
    }

    return (
        <GlobalContext.Provider
            value={{
                category,
                handleChangeCategory,
                menuSelected,
                openModal,
                handleModal,
                productMenu,
                handleAddProductModal
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider };
export default GlobalContext;
