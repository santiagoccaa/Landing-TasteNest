import { Flex, Heading, Text } from '@/components/UI'
import Image from 'next/image'
import React from 'react'

export const About = () => {
    return (
        <Flex className='my-12 md:flex-row' direction='col'>
            <Flex direction='col' className='w-full md:w-1/2'>
                <div>
                    <Heading fs='sm' className='uppercase' color='red'>
                        About The Food Restaurant
                    </Heading>
                    <Heading fs='xxl'>
                        New Ground whit <br />
                        Dishes to be <br />
                        Enjoyed
                    </Heading>
                </div>
            </Flex>
            <Flex direction='col' className='w-full md:w-1/2 px-8 md:items-start mt-8 md:mt-0'>
                <Text className='w-96'>
                    Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci 
                    varius nat oque pena tibus et urient monte nascete ridiculus mus 
                    nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan 
                    ligula.
                </Text>
                <Flex className='mt-2'>
                    <Image src="/general/director.svg" width={400} height={400} alt='director restauran' className='w-16 h-16 rounded-full' />
                    <Flex direction='col' aling='start' gap='0'>
                        <Heading fs='lg'>
                            Willimes James
                        </Heading>
                        <Text>
                            Director and Chief Operations Officer
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
