import { Flex, Heading, Text } from '@/components/UI'
import React from 'react'

export const RestauranFamily = () => {
    return (
        <div className='w-full h-96 relative'>
            <div className='absolute top-0 left-0 right-0 opacity-40 bg-[url(/general/restaurant_Family.jpg)] bg-cover bg-center h-96 z-0' />
            <Flex className='w-full h-96 relative' direction='col'>
                <Heading className='uppercase text-center' fs='xxl' color='white'>
                    create real stories of memorable <br /> <span className='text-red'>meals and experiences</span>
                </Heading>
                <Text color='white' className='w-full md:w-3/6 text-center mt-8'>
                    We believe that every meal has the power to create lasting memories. Through carefully crafted dishes, authentic flavors, and a welcoming atmosphere, we transform dining into meaningful moments worth sharing and remembering.
                </Text>
            </Flex>
        </div>
    )
}

