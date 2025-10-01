import { Button, Flex, Heading, Text } from '@/components/UI'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const aboutOption = [
    {
        title: 'Fredoka One'
    },
    {
        title: 'Special Dish'
    },
    {
        title: 'Reservation'
    },
    {
        title: 'Contact'
    }
]

const menuOption = [
    {
        title: 'Steaks'
    },
    {
        title: 'Burgers'
    },
    {
        title: 'Coctails'
    },
    {
        title: 'Bar B Q'
    },
    {
        title: 'Desserts'
    }
]
export const Footer = () => {
    return (
        <Flex direction='col' className='py-8'>
            <Flex aling='start' gap='10' direction='col' className='md:flex-row'>
                <Flex className='rounded-2xl bg-red p-8 relative' gap='4' direction='col' aling='start'>
                    <Image src={"/general/logo.svg"} width={800} height={800} alt='logo' className='absolute top-0 left-0 w-40 h-20' />
                    <Heading color='white' fs='sm' className='mt-20'>
                        Tuesday – Saturday: 12:00pm – 23:00pm
                    </Heading>
                    <Heading color='white' fs='sm'>
                        Closed on Sunday
                    </Heading>
                    <Heading color='white' fs='sm' className='mt-10'>
                        5 star rated on TripAdvisor
                    </Heading>
                </Flex>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <Flex direction='col' aling='start' justify='start'>
                        <Heading>
                            About
                        </Heading>
                        <div className="w-20 h-1 rounded-full bg-yellow mb-4 lg:mb-12" />

                        <ul className='flex flex-col gap-2'>
                            {
                                aboutOption.map((option, index) => (
                                    <li key={index} className='flex items-center gap-1'>
                                        <IoIosArrowForward />
                                        <Text color='black' fw='medium'>
                                            {option.title}
                                        </Text>
                                    </li>
                                ))
                            }
                        </ul>

                    </Flex>

                    <Flex direction='col' aling='start' justify='start'>
                        <Heading>
                            Menu
                        </Heading>
                        <div className="w-20 h-1 rounded-full bg-yellow mb-4 lg:mb-12" />

                        <ul className='flex flex-col gap-2'>
                            {
                                menuOption.map((option, index) => (
                                    <li key={index} className='flex items-center gap-1'>
                                        <IoIosArrowForward />
                                        <Text color='black' fw='medium'>
                                            {option.title}
                                        </Text>
                                    </li>
                                ))
                            }
                        </ul>
                    </Flex>

                    <Flex direction='col' aling='start' justify='start'>
                        <Heading>
                            Newsletter
                        </Heading>
                        <div className="w-20 h-1 rounded-full bg-yellow mb-4 lg:mb-12" />

                        <Text color='black' fw='medium'>
                            Get recent news and updates.
                        </Text>

                        <input type="text" className="w-72 px-6 py-4 rounded-lg bg-white text-sm font-medium outline-none" placeholder='Email Address' />

                        <Flex className='w-full mt-4' justify='end'>
                            <div className="w-28 h-14 rounded-xl border-2 border-red relative bg-transparent">
                                <Button color="red" className="h-12 w-28 absolute top-1/2 -translate-y-1/2 -left-4">
                                    <Text color="white" fs="sm" fw="bold">Subscribe</Text>
                                </Button>
                            </div>
                        </Flex>
                    </Flex>
                </div>
            </Flex>

            <div className="w-full h-1 rounded-full bg-yellow my-4" />

            <Flex justify='start' className='w-full'>
                <Text color='red' fw='bold'>
                    © 2025 copyright
                </Text>
            </Flex>
        </Flex>
    )
}
