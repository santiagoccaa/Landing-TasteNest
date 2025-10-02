"use client"

import { Button, Container, Flex, Text } from '@/components/UI'
import { RiMenu4Line } from "react-icons/ri";
import Image from "next/image"
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinksPage {
    title: string,
    href: string
}
const linksPage: LinksPage[] = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Menu',
        href: '/menu'
    }
]

export const Navbar = () => {

    const pathName = usePathname()

    const [navActive, setNavActive] = useState(false)

    if (pathName === "/menu") return;

    return (
        <>
            {/* Desktop */}
            <div className="hidden md:block py-2">
                <Container>
                    <nav className='flex h-12 justify-between items-center'>
                        <div className='w-2/6'>
                            <Image src="/general/logo.png" width={400} height={400} alt="logo page" className="w-32 h-14" />
                        </div>
                        <ul className="flex gap-12">
                            {
                                linksPage.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link href={href} className='group'>
                                            <Text color='black' fw='medium' fs='lg'>{title}</Text>
                                            <div className='w-full h-1 rounded-full bg-transparent group-hover:bg-yellow duration-300' />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <Flex gap='8' justify='end' className='w-2/6'>
                            <button className='hover:bg-yellow duration-300 p-2 rounded-full cursor-pointer'>
                                <MdOutlineShoppingBag size={20} />
                            </button>
                            <Button color='red'>
                                <Text color='white' fw='bold'>Reservar</Text>
                            </Button>
                        </Flex>
                    </nav>
                </Container>
            </div>

            {/* Mobile */}
            <div className="block md:hidden py-2 h-16 relative">
                <ul className={` ${navActive ? 'h-screen' : 'h-0'} absolute top-16 bg-white w-full overflow-hidden transition-all duration-500 flex items-end z-40`}>
                    <Flex direction='col' gap='8' className='absolute top-12 h-96 w-full'>
                        {
                            linksPage.map(({ title, href }) => (
                                <li key={title}>
                                    <Link href={href} onClick={() => setNavActive(!navActive)}>
                                        <Text color='black' fw='bold' fs='lg' className='mt-12'>{title}</Text>
                                    </Link>
                                </li>
                            ))
                        }
                    </Flex>
                    <div className='h-2 bg-yellow w-full' />
                </ul>
                <Container>
                    <nav className='flex justify-between items-center relative'>
                        <div className=''>
                            <Image src="/general/logo.png" width={400} height={400} alt="logo page" className="w-32 h-14" />
                        </div>
                        <div className='flex gap-8 items-center justify-end'>
                            <MdOutlineShoppingBag size={20} />
                            <Button color='yellow'>
                                <Text color='white' fw='bold'>Reservar</Text>
                            </Button>
                            <button onClick={() => setNavActive(!navActive)}>
                                <RiMenu4Line size={20} />
                            </button>
                        </div>
                    </nav>
                </Container>
            </div>
        </>
    )
}