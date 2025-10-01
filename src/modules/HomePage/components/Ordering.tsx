import { Button, Container, Flex, Heading, Text } from '@/components/UI'
import Image from 'next/image';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const features = [
    {
        text: "Higher Reach - Minimal Effort"
    },
    {
        text: "Showcase your Brand"
    },
    {
        text: "Exclusive offers & discounts"
    }
]

export const Ordering = () => {
    return (
        <div className='bg-secondary relative pt-16 my-16 h-fit'>
            <div className='absolute h-72 w-full md:w-1/2 bg-red bottom-8 md:top-1/2 md:-translate-y-1/2 right-0 md:rounded-l-full' />
            <Container>
                <Flex justify='start' aling='start' direction='col' className='md:flex-row'>
                    <div className="w-full md:w-1/2">
                        <div >
                            <Heading fs='sm' className='uppercase' color='red'>
                                Best App For Foods Ordering
                            </Heading>
                            <Heading fs='xxl'>
                                Manage Your Restaurant <br />
                                Anytime! Anywhere!
                            </Heading>
                        </div>
                        <div className='my-6'>
                            {
                                features.map((feat, index) => (
                                    <Flex key={index} justify='start'>
                                        <div className='w-2 h-2 border-yellow rounded-full border-2' />
                                        <Text>
                                            {feat.text}
                                        </Text>
                                    </Flex>
                                ))
                            }

                        </div>

                        <Flex justify='start' gap='6'>
                            <Button color='red' className='w-40 h-10'>
                                <BiLogoPlayStore color='white' /><Text fw='bold' color='white'>Google Play</Text>
                            </Button>
                            <Button color='black' className='w-40 h-10'>
                                <FaApple color='white' /><Text fw='bold' color='white'>App Store</Text>
                            </Button>
                        </Flex>
                    </div>
                    <div className="w-full md:w-1/2 h-80 relative mt-12 md:mt-0">
                        <div className='h-full absolute bottom-0 left-1/2 -translate-x-1/2'>
                            <Image src="/app/phoneApp.png" width={800} height={800} alt='phone app' className='h-full w-72' />
                        </div>
                        <div className='absolute lg:bottom-10 bottom-40 left-0 md:-left-8'>
                            <Image src="/app/rapi.png" width={800} height={800} alt='phone app' className='w-32 h-32 lg:h-40 lg:w-40' />
                        </div>

                        <div className='absolute top-0 right-4'>
                            <Image src="/app/pizzaApp.png" width={800} height={800} alt='phone app' className='h-24 w-24' />
                        </div>

                        <div className='absolute bottom-12 right-0'>
                            <Image src="/app/postre.png" width={800} height={800} alt='phone app' className='h-40 w-40' />
                        </div>
                    </div>
                </Flex>
            </Container>

        </div>
    )
}
