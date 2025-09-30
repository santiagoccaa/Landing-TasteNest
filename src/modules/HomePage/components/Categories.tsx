"use client"
import { Flex, Text } from '@/components/UI'
import { useGlobal } from '@/hook/useGlobal'
import Image from 'next/image'

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
        name: 'coffee',
        icon: 'coffee'
    },
    {
        id: 4,
        name: 'Burger',
        icon: 'burger'
    },
]

export const Categories = () => {
    const { category, handleChangeCategory } = useGlobal()

    return (
        <Flex className='my-16'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    categoriesList.map((item) => (
                        <button className='cursor-pointer' key={item.id} onClick={() => handleChangeCategory(item.icon)}>
                            <Flex
                                direction='col'
                                className={`w-28 h-32 bg-red border-2 border-red rounded-lg ${category === item.icon ? 'rounded-br-[50%] rounded-bl-[50%] shadow-lg scale-105' : 'scale-95'} transition-all duration-500`}
                            >
                                <Image src={`/categories/${item.icon}.svg`} width={400} height={400} alt='dessert category' className='w-10 h-10' />
                                <Text className='text-white' fs='lg' fw='bold'>
                                    {item.name}
                                </Text>
                            </Flex>
                        </button>
                    ))
                }
            </div>
        </Flex>
    )
}
