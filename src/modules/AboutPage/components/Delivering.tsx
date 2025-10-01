"use client"

import { Flex, Heading, Text } from '@/components/UI'
import Image from 'next/image';
import { useState } from 'react';
import { TbPointFilled } from "react-icons/tb";

const ourMVV = [
    {
        title: "Our Mission"
    },
    {
        title: "Our Vision"
    },
    {
        title: "Our Value"
    }
]

export const Delivering = () => {
    const [our, setOur] = useState("Our Mission")

    return (
        <Flex direction='col' className='my-8 py-8'>
            <Heading className='uppercase text-center' fs='xxl' color='white'>
                delivering memorable <br /> dining <span className='text-red'>experiences</span>
            </Heading>

            <Flex className='py-4 w-96 bg-gray rounded-full my-8' gap='6'>
                {
                    ourMVV.map(({ title }, index) => (
                        <button
                            key={index}
                            onClick={() => setOur(title)}
                            className='flex gap-1 items-center group cursor-pointer'>
                            <TbPointFilled color='white' />
                            <Text color={our === title ? 'red' : 'white'} className="group-hover:text-red">{title}</Text>
                        </button>
                    ))
                }
            </Flex>

            <Flex direction='col' className='md:flex-row'>
                <Flex className='w-full md:w-1/2 h-96' justify='start' aling='start' direction='col'>
                    <Heading as="h1" fw="light" color="white" fs="sm" className="flex items-center gap-1">
                        <TbPointFilled color='white' />{our}
                    </Heading>
                    <Text className="uppercase" color="white" fs="xxl" fw="medium">
                        creating moments arround flavor
                    </Text>

                    <Text color="white" className='mt-4'>
                        To be recognized as a distinguished culinary destination where gastronomy transcends the act of dining and becomes an art form. We aspire to create unforgettable experiences that delight the senses, celebrate culture and tradition, and inspire our guests to return time and again for moments of elegance, flavor, and connection.
                    </Text>
                </Flex>

                <Flex className='w-full md:w-1/2'>
                    <Image src={"/general/our.jpg"} width={800} height={800} alt='values restauran' className='w-96 h-72 rounded-lg' />
                </Flex>
            </Flex>
        </Flex>
    )
}
