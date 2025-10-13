import { MenuItems } from "@/components/data"
import { Heading, Text } from "@/components/UI"
import { useGlobal } from "@/hook/useGlobal"
import Image from "next/image"
import { TbListDetails } from "react-icons/tb";

export const ProductCard = (product: MenuItems) => {
    const { handleModal, handleAddProductModal, handleModalRender } = useGlobal()
    const { title, description, price, } = product
    return (
        <div
            className="w-60 h-72 flex justify-end items-end relative"
        >
            <div className="w-48 h-48 rounded-full absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden z-20">
                <Image
                    src={`/general/pollo.png`}
                    width="400"
                    height="400"
                    alt="Imagen del producto"
                    className="w-full h-full"
                    priority
                />
            </div>
            {/* Descripcion del producto */}
            <div className="text-center bg-white rounded-xl rounded-b-4xl h-[70%] p-1 flex flex-col justify-end">
                <div className="h-1/2 flex justify-between flex-col px-1 relative">
                    <button 
                    onClick={() => { handleAddProductModal(product); handleModal(); handleModalRender('product') }} 
                    className="p-1 rounded-full shadow-lg absolute -top-8 left-0 text-slate-600 text-lg">
                        <TbListDetails />
                    </button>
                    <Heading fs="lg" color="black">{title}</Heading>
                    <Text fw="light" color="black" className="leading-4">
                        {description}
                    </Text>
                    <Text fs="lg" fw="bold">${price}</Text>
                </div>
            </div>
        </div>
    )
}

