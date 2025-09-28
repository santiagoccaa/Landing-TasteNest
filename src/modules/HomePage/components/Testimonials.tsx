import { Flex, Heading, Text } from '@/components/UI'
import Image from 'next/image'
import React from 'react'

export const Testimonials = () => {
    return (
        <Flex direction='col' className='md:flex-row'>
            <div className="w-full md:w-1/2">
                <Flex direction='col'>
                    <div className='w-96'>
                        <Heading fs='sm' className='uppercase' color='red'>
                            Testimonials & Reviews
                        </Heading>
                        <Heading fs='xxl'>
                            Our Customar <br />
                            Feedbacks
                        </Heading>
                    </div>
                    <div className='border-2 border-yellow rounded-2xl p-4 w-96 relative mt-4'>
                        <div className='absolute bottom-2 right-2 w-10 h-10 rounded-full bg-yellow' />
                        <Text fs='lg' className='leading-5.5'>
                            A good restaurant is like a vacation; it
                            transports you, and it becomes a lot more
                            than just about the food. All great deeds
                            and all great thoughts
                        </Text>
                        <Text color='black' fs='lg' fw='bold' className='mt-4'>
                            Bratlee Hamint
                        </Text>
                    </div>
                    <Flex className='mt-12 w-96' justify='start'>
                        <div className="h-3 w-3 rounded-full border-4 border-red"></div>
                        <div className="h-2 w-2 rounded-full bg-gray"></div>
                        <div className="h-2 w-2 rounded-full bg-gray"></div>
                    </Flex>
                </Flex>
            </div>
            <div className="w-96 md:w-1/2 relative h-96 mt-12 md:mt-0">
                <div className='w-44 h-44 rounded-2xl bg-red absolute bottom-16 left-0 overflow-hidden' >
                    <Image src="/testimonial/carne.png" width={800} height={800} alt='carne' className='w-full h-full' />
                </div>
                <div className='w-44 h-44 rounded-2xl absolute top-0 left-32 overflow-hidden'>
                    <Image src="/testimonial/coffe.png" width={800} height={800} alt='carne' className='w-full h-full' />
                </div>
                <div className='w-44 h-44 rounded-2xl absolute right-0 lg:left-56 bottom-0 overflow-hidden'>
                    <Image src="/testimonial/helado.png" width={800} height={800} alt='carne' className='w-full h-full' />
                </div>
            </div>
        </Flex>
    )
}

