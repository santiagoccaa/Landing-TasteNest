import { Button, Flex, Heading, Text } from '@/components/UI'
import React from 'react'

export const ReserveTable = () => {
    return (
        <div className='bg-red mx- w-full h-fit rounded-2xl'>
            <Flex justify='between' direction='col' className='md:flex-row p-12'>
                <div className='w-full md:w-2/6'>
                    <Heading className='uppercase' fs='xxl' color='white'>
                        Reserve <br />
                        A table
                    </Heading>
                    <div className="w-40 h-1 rounded-full bg-yellow mb-12" />

                    <Text color='white'>
                        Discover our New Menu !
                    </Text>
                </div>

                <div className='w-full'>
                    <Flex className='w-full md:flex-row' direction='col'>
                        <input type="text" className="px-6 py-4 rounded-lg bg-white text-sm font-medium outline-none w-full md:w-2/4" placeholder='No of Guest' />
                        <div className='flex w-full md:w-1/2 gap-2'>
                            <input type="text" className="px-6 py-4  rounded-lg bg-white text-sm font-medium outline-none w-full" placeholder='Date' />
                            <input type="text" className="px-6 py-4 rounded-lg bg-white text-sm font-medium outline-none w-full" placeholder='time' />
                        </div>
                    </Flex>
                    <Flex className='w-full mt-4'>
                        <input type="text" className="px-6 py-4  rounded-lg bg-white text-sm font-medium outline-none w-full md:w-1/2" placeholder='Full Name' />
                        <input type="text" className="px-6 py-4 rounded-lg bg-white text-sm font-medium outline-none w-full md:w-1/2" placeholder='Phone No' />
                    </Flex>

                    <Flex className='w-full mt-4' justify='end'>
                        <div className="w-28 h-14 rounded-xl border-2 border-yellow relative bg-transparent">
                            <Button color="yellow" className="h-12 w-28 absolute top-1/2 -translate-y-1/2 -left-4">
                                <Text color="black" fs="sm" fw="bold">Submit</Text>
                            </Button>
                        </div>
                    </Flex>
                </div>
            </Flex>
        </div>
    )
}
