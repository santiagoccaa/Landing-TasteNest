"use client"

import { Flex, Heading, Text } from "@/components/UI"
import { useGlobal } from "@/hook/useGlobal"
import Image from "next/image"

export const DishSpecial = () => {
    const { menuSelected, category } = useGlobal()

    return (
        <Flex gap="0" direction="col" className="md:flex-row relative">
            <div className="md:h-full w-full md:w-1/2 absolute top-0 md:top-8 left-0 flex justify-center items-center ">
                <Image width={800} height={800} alt="Dash special" src={`/categories/section/${category}.jpg`} className="w-[450px] h-[450px] rounded-full" />
            </div>
            <div className="w-full md:w-1/6 h-64 md:h-full" />
            <div className="bg-secondary w-full md:w-5/6 rounded-2xl px-6 md:px-0">
                <Flex justify="start" aling="center" className="py-12 md:pr-12 w-full">
                    <div className="hidden md:block w-full md:w-2/5 h-full relative" />
                    <Flex direction="col" aling="start" className="w-full md:w-3/5">
                        <Heading fs="xxl" className="capitalize">
                            {category}
                        </Heading>

                        {menuSelected.map(({ title, description, price }, idx) => (
                            <div
                                key={idx}
                                className="w-full mt-6 border-b-2 border-dashed pb-4"
                            >
                                <Flex className="w-full" justify="between">
                                    <Heading fs="lg">{title}</Heading>
                                    <Heading fs="lg" color="red">
                                        {price}
                                    </Heading>
                                </Flex>
                                <Text>{description}</Text>
                            </div>
                        ))}
                    </Flex>
                </Flex>
            </div>
        </Flex>
    )
}
