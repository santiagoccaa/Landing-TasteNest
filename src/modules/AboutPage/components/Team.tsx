import { Flex, Heading, Text } from '@/components/UI'
import Image from 'next/image'
import React from 'react'

export const Team = () => {
    return (
        <Flex direction='col' className='py-8'>
            <Heading className='uppercase text-center' fs='xxl' color='white'>
                the talented behind <br className='hidden md:block'/> every <span className='text-red'>flavourful dish</span>
            </Heading>

            <Flex gap='10' className='my-10 md:flex-row' direction='col'>
                <div className="relative w-52">
                    <Image src={"/chef/thomas.png"} width={800} height={800} alt='Chef thomas' className='w-full h-full' />
                    <div className='h-40 w-52 relative'>
                        <Flex direction='col' gap='0' className='absolute -top-20 w-52 h-52 rounded-full bg-white'>
                            <Text color='red' fw='medium'>
                                Dessert specialist
                            </Text>
                            <Heading >
                                Thomas walim
                            </Heading>
                        </Flex>
                    </div>
                </div>
                <div className="relative w-52">
                    <Image src={"/chef/james.png"} width={800} height={800} alt='Chef thomas' className='w-full h-full' />
                    <div className='h-40 w-52 relative'>
                        <Flex direction='col' gap='0' className='absolute -top-20 w-52 h-52 rounded-full bg-white'>
                            <Text color='red' fw='medium'>
                                Chef Master
                            </Text>
                            <Heading >
                                James Jhonson
                            </Heading>
                        </Flex>
                    </div>
                </div>
                <div className="relative w-52">
                    <Image src={"/chef/room.png"} width={800} height={800} alt='Chef thomas' className='w-full h-full' />
                    <div className='h-40 w-52 relative'>
                        <Flex direction='col' gap='0' className='absolute -top-20 w-52 h-52 rounded-full bg-white'>
                            <Text color='red' fw='medium'>
                                Dessert specialist
                            </Text>
                            <Heading >
                                Room Minal
                            </Heading>
                        </Flex>
                    </div>
                </div>
            </Flex>
        </Flex>
    )
}
