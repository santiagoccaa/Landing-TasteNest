"use client"

import { global_menu, MenuItems } from "@/components/data";
import { RenderModal } from "@/components/Modal";
import { createContext, ReactNode, useEffect, useState } from "react";

interface GlobalContextTypes {
    category: string
    handleChangeCategory: (category: string) => void
    menuSelected: MenuItems[]
    openModal: boolean
    handleModal: () => void
    productMenu: MenuItems | null
    handleAddProductModal: (product: MenuItems) => void
    contentModalRender: RenderModal
    handleModalRender: (modal: RenderModal) => void
}

const GlobalContext = createContext<GlobalContextTypes>({
    category: "",
    handleChangeCategory: () => { },
    menuSelected: [],
    openModal: false,
    handleModal: () => { },
    productMenu: null,
    handleAddProductModal: () => { },
    contentModalRender: 'product',
    handleModalRender: () => { }
});

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [category, setCategory] = useState("dessert")
    const [menuSelected, setMenuSelected] = useState<MenuItems[]>([])
    const [openModal, setOpenModal] = useState(false)
    const [productMenu, setProductMenu] = useState<MenuItems | null>(null)
    const [contentModalRender, setContentModalRender] = useState<RenderModal>('product')

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

    const handleModalRender = (modal: RenderModal) => {
        setContentModalRender(modal)
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
                handleAddProductModal,
                contentModalRender,
                handleModalRender
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider };
export default GlobalContext;
