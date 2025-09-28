"use client"
import { Flex, Text } from '@/components/UI'
import Image from 'next/image'
import { useState } from 'react'

const categoriesList = [
    {
        id: 1,
        name: 'Dessert',
        icon: 'dessert'
    },
    {
        id: 2,
        name: 'Steak',
        icon: 'steak'
    },
    {
        id: 3,
        name: 'Coffe',
        icon: 'coffe'
    },
    {
        id: 4,
        name: 'Burger',
        icon: 'burger'
    },
]

export const Categories = () => {
    const [selectCategory, setSelectCategory] = useState(1)
    return (
        <Flex className='my-16'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {
                categoriesList.map((category) => (
                    <button className='cursor-pointer' key={category.id} onClick={() => setSelectCategory(category.id)}>
                        <Flex
                            direction='col'
                            className={`w-28 h-32 bg-red border-2 border-red rounded-lg ${selectCategory === category.id ? 'rounded-br-[50%] rounded-bl-[50%] shadow-lg scale-105' : 'scale-95'} transition-all duration-500`}
                        >
                            <Image src={`/categories/${category.icon}.svg`} width={400} height={400} alt='dessert category' className='w-10 h-10' />
                            <Text className='text-white' fs='lg' fw='bold'>
                                {category.name}
                            </Text>
                        </Flex>
                    </button>
                ))
            }
            </div>
        </Flex>
    )
}
