"use client"

import { Container, Flex, Heading } from "@/components/UI"
import { useGlobal } from "@/hook/useGlobal"
import { Categories, Products } from "./components";
import ModalProduct from "@/components/Modal/Modal";

export const MenuPage = () => {

    const { menuSelected } = useGlobal()

    return (
        <div className="bg-secondary">
            <ModalProduct />
            <Container>
                <Flex
                    className="w-full pt-4 min-h-screen overflow-hidden relative "
                    direction="col"
                >
                    <Categories />

                    {/* Products */}
                    <Flex direction="col" justify="center" aling="center" className=" py-4 ">
                        <div className="w-full py-2 my-6 border-slate-400 border-b-2 border-dashed">
                            <Heading>
                                Chef&apos;s <span className="text-red">Recommendations</span>
                            </Heading>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10 pb-4 px-4">
                            {menuSelected.map((product, idx) => (
                                <Products key={idx} {...product} />
                            ))}
                        </div>
                        <div className="w-full py-2 my-6 border-slate-400 border-b-2 border-dashed">
                            <Heading>
                                Best <span className="text-red">Sellers</span>
                            </Heading>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10 pb-4 px-4">
                            {menuSelected.map((product, idx) => (
                                <Products key={idx} {...product} />
                            ))}
                        </div>
                        <div className="w-full py-2 my-6 border-slate-400 border-b-2 border-dashed">
                            <Heading>
                                On <span className="text-red">Offer</span>
                            </Heading>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10 pb-4 px-4">
                            {menuSelected.map((product, idx) => (
                                <Products key={idx} {...product} />
                            ))}
                        </div>
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}
