import { Flex, Heading, Text } from '@/components/UI'
import Image from 'next/image'
import { IoBag } from "react-icons/io5";

interface DishesProps {
    id: number,
    title: string,
    price: string,
    discount: string
    image: string
}

const dishes: DishesProps[] = [
    {
        id: 1,
        title: 'Crispy Fried Chicken',
        price: '10.85',
        discount: '14.85',
        image: 'pollo'
    },
    {
        id: 2,
        title: 'Shroom Bacon Burger',
        price: '11.76',
        discount: '20.46',
        image: 'pizza'
    },
    {
        id: 3,
        title: 'Shroom Bacon Burger',
        price: '24.42',
        discount: '54.31',
        image: 'coffee'
    }
]

export const FeatureDishes = () => {
    return (

        <Flex direction='col' className='w-full'>
            <Heading fs='xxl' color='black'>
                Featured Dishes
            </Heading>
            <div className="w-40 h-1 rounded-full bg-yellow mb-12" />

            <Flex gap='10' direction='col' className='lg:flex-row w-full'>
                {
                    dishes.map((dis) => (
                        <div key={dis.id} className='w-80 h-fit pt-20 rounded-xl p-4 border-2 border-yellow relative'>
                            <div className='absolute top-2 left-2 rounded-full bg-yellow flex items-center justify-center w-10 h-10 text-xs font-bold'>
                                SALE
                            </div>
                            <button className='w-8 h-8 flex justify-center items-center bg-yellow rounded-lg cursor-pointer absolute bottom-2 right-2'>
                                <IoBag />
                            </button>
                            <Flex direction='col' className='w-full h-full' gap='10'>
                                <Flex className='w-52 h-20 rounded-full bg-red mb-8'>
                                    <Image src={`/features/${dis.image}.png`} width={800} height={800} alt={dis.title} className='w-52 h-52' />
                                </Flex>

                                <div className='w-full'>
                                    <Heading fs='lg'>
                                        {dis.title}
                                    </Heading>
                                    <Flex justify='start'>
                                        <Text fs='sm' fw='bold' className='line-through'>
                                            ${dis.discount}
                                        </Text>
                                        <Text fs='lg' color='red' fw='bold'>
                                            ${dis.price}
                                        </Text>
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                    ))
                }
            </Flex>

            <Flex className='mt-12'>
                <div className="h-3 w-3 rounded-full border-4 border-red"></div>
                <div className="h-2 w-2 rounded-full bg-gray"></div>
                <div className="h-2 w-2 rounded-full bg-gray"></div>
                <div className="h-2 w-2 rounded-full bg-gray"></div>
            </Flex>
        </Flex>

    )
}

