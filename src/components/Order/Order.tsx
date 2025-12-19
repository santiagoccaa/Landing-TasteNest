"use client"

import { useGlobal } from "@/hook/useGlobal"
import { FaX } from "react-icons/fa6"

export const Order = () => {
    const { openOrder, handleOpenOrder } = useGlobal()
    if (!openOrder) return
    return (
        <>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-40" />
            <div className={`fixed right-0 top-0 h-dvh bg-white shadow-2xl w-full md:w-5/6 lg:w-2/6 z-50 p-2`}>
                <div className="">
                    <button onClick={handleOpenOrder} className="cursor-pointer p-1 rounded-full">
                        <FaX size={20} />
                    </button>
                </div>
            </div>
        </>
    )
}
