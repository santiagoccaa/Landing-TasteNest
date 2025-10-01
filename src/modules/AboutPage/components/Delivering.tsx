"use client"

import { Flex, Heading, Text } from '@/components/UI'
import Image from 'next/image';
import { useState } from 'react';
import { TbPointFilled } from "react-icons/tb";

const ourMVV = [
    {
        title: "Our Mission",
        subtitle: "Crafting experiences with passion",
        content: "To craft exceptional dining experiences by harmonizing tradition and innovation, sourcing only the finest ingredients, and delivering excellence through refined service and an atmosphere of elegance."
    },
    {
        title: "Our Vision",
        subtitle: "Creating moments around flavor",
        content: "To be recognized as a distinguished culinary destination where gastronomy transcends the act of dining and becomes an art form. We aspire to create unforgettable experiences that delight the senses, celebrate culture and tradition, and inspire our guests to return time and again for moments of elegance, flavor, and connection."
    },
    {
        title: "Our Value",
        subtitle: "Guided by what we stand for",
        content: "Excellence, passion, authenticity, hospitality, and sustainability are the principles that shape everything we do, ensuring every guest enjoys a meaningful and memorable dining experience."
    }
]

export const Delivering = () => {
    const [our, setOur] = useState("Our Mission")

    const selectedOur = ourMVV.find(item => item.title === our)

    return (
        <Flex direction='col' className='my-8 py-8'>
            <Heading className='uppercase text-center' fs='xxl' color='white'>
                delivering memorable <br /> dining <span className='text-red'>experiences</span>
            </Heading>

            {/* Botones */}
            <Flex className='py-4 w-96 bg-gray rounded-full my-8' gap='6'>
                {
                    ourMVV.map(({ title }, index) => (
                        <button
                            key={index}
                            onClick={() => setOur(title)}
                            className='flex gap-1 items-center group cursor-pointer'
                        >
                            <TbPointFilled color='white' />
                            <Text color={our === title ? 'red' : 'white'} className="group-hover:text-red">
                                {title}
                            </Text>
                        </button>
                    ))
                }
            </Flex>

            {/* Contenido dinámico */}
            <Flex direction='col' className='md:flex-row'>
                <Flex className='w-full md:w-1/2 h-96' justify='start' aling='start' direction='col'>
                    <Heading as="h1" fw="light" color="white" fs="sm" className="flex items-center gap-1">
                        <TbPointFilled color='white' />{selectedOur?.title}
                    </Heading>

                    <Text className="uppercase" color="white" fs="xxl" fw="medium">
                        {selectedOur?.subtitle}
                    </Text>

                    <Text color="white" className='mt-4'>
                        {selectedOur?.content}
                    </Text>
                </Flex>

                <Flex className='w-full md:w-1/2'>
                    <Image
                        src={"/general/our.jpg"}
                        width={800}
                        height={800}
                        alt='values restaurant'
                        className='w-96 h-72 rounded-lg'
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}
