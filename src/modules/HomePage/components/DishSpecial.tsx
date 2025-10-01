"use client"

import { Flex, Heading, Text } from "@/components/UI"
import { useGlobal } from "@/hook/useGlobal"

export const DishSpecial = () => {
    const { menuSelected, category } = useGlobal()

    return (
        <Flex gap="0" direction="col" className="md:flex-row relative">

            <div className="bg-secondary w-full rounded-2xl px-6 md:px-0">
                <Flex justify="start" aling="center" className="py-12 px-4 md:px-8 w-full">
                    <Flex direction="col" aling="start" className="w-full">
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
