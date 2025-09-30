"use client"

import { Button, Container, Flex, Heading, Text } from "@/components/UI"
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useState } from "react";

interface BestDash {
    idx: number,
    price: string
    title: string,
    starts: number,
    image: string
}

const bestDash: BestDash[] = [
    {
        idx: 0,
        price: '90.68',
        title: 'Sicilian Pizza',
        starts: 5,
        image: 'pizza'
    },
    {
        idx: 1,
        price: '120.43',
        title: 'hawaiana Pizza',
        starts: 5,
        image: 'pizza'
    },
    {
        idx: 2,
        price: '54.98',
        title: 'Peperoni Pizza',
        starts: 5,
        image: 'pizza'
    },
]

export const Hero = () => {

    const [selectDash, setSelectDash] = useState(0)
    const dash = bestDash[selectDash];

    return (
        <div className="bg-[url('/hero/hero.png')] bg-cover bg-center h-[calc(100vh-60px)] w-full">
            <Container>
                <Flex direction="col" className="h-[calc(100vh-60px)] lg:flex-row">
                    <Flex direction="col" justify="center" aling="start" className="w-full md:w-1/2 h-full max-h-[700px] relative" gap="6">
                        <Heading fs="xxl" className="lg:text-6xl" color="white">
                            The Perfect Space to <br />
                            Enjoy Fantastic Food
                        </Heading>
                        <Text color="white" className="2xl:text-2xl">
                            Festive dining at Farthings where we are strong believers in <br />
                            using the very best produce
                        </Text>

                        <Flex gap="6" className="pl-4">
                            <div className="w-40 h-14 rounded-xl border-2 border-red-500 relative bg-transparent">
                                <Button color="red" className="h-12 w-40 absolute top-1/2 -translate-y-1/2 -left-4">
                                    <Text color="white" fs="sm" fw="medium">See Our Menu</Text>
                                </Button>
                            </div>
                            <IoPlayCircleOutline size={60} color="white" />

                            <Text color="white" fs="sm" fw="medium">VIDEO</Text>
                        </Flex>

                        <Flex className="mt-12 absolute left-4 bottom-8">
                            {bestDash.map(({ idx }) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectDash(idx)}
                                    className={`w-4 h-4 rounded-full ${idx === selectDash ? 'border-4 border-yellow bg-transparent scale-95' : 'bg-white'} cursor-pointer transition-all duration-300`} />
                            ))}
                        </Flex>
                    </Flex>
                    <Flex direction="col" justify="end" aling="center" className="pb-8 w-full md:w-1/2 lg:h-full h-fit max-h-[700px]">
                        {
                            <div className="w-80 h-40 rounded-2xl border-2 border-yellow relative overflow-hidden">
                                <div className="w-full h-full bg-black opacity-90 absolute top-0 right-0" />
                                <Flex justify="between" className="w-full h-full absolute top-0 right-0">
                                    <Flex direction="col" aling="start" className="p-4">
                                        <Heading color="white"><span className="text-red mr-1">$</span>{dash.price}</Heading>
                                        <Text fs="lg" fw="bold" color="white">{dash.title}</Text>
                                        <Flex>
                                            {Array.from({ length: dash.starts }).map((_, index) => (
                                                <AiFillStar key={index} size={15} className="text-yellow" />
                                            ))}
                                        </Flex>
                                    </Flex>
                                    <Image width={400} height={400} alt="pizza" src={`/hero/${dash.image}.png`} className="w-36 h-36" />
                                </Flex>
                            </div>

                        }
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}

