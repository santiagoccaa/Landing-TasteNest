"use client"

import { Button, Container, Flex, Text } from '@/components/UI'
import { RiMenu4Line } from "react-icons/ri";
import Image from "next/image"
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGlobal } from '@/hook/useGlobal';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

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

    const { handleModalRender, handleModal, handleOpenOrder } = useGlobal()

    if (pathName.startsWith('/admin')) return null
    if (pathName.startsWith('/auth')) return null

    return (
        <>
            {/* Desktop */}
            <div className="hidden md:block py-2 shadow">
                <Container>
                    <nav className='flex h-12 justify-between items-center'>
                        <div className='w-2/6'>
                            <Link href={"/"}>
                                <Image src="/general/logo.png" width={400} height={400} alt="logo page" className="w-32 h-14" />
                            </Link>
                        </div>
                        <ul className="flex gap-12">
                            {
                                linksPage.map(({ title, href }) => (
                                    <li key={title}>
                                        <Link href={href} className='group'>
                                            <Text color='black' fw='medium' fs='lg'>{title}</Text>
                                            <div className={`w-full h-1 rounded-full  group-hover:bg-yellow duration-300 ${pathName === href ? 'bg-yellow' : 'bg-transparent'}`} />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <Flex gap='8' justify='end' className='w-2/6'>
                            <button onClick={handleOpenOrder} className='hover:bg-yellow duration-300 p-2 rounded-full cursor-pointer text-xl'>
                                <MdOutlineShoppingBag />
                            </button>
                            <Button color='red' onClick={() => { handleModalRender('table'); handleModal() }}>
                                <Text color='white' fw='bold'>Reserve</Text>
                            </Button>
                            {/* <button
                                onClick={() => { handleModalRender('auth'); handleModal() }}
                                className='hover:bg-sky-500 duration-300 p-1 rounded-full cursor-pointer text-2xl'>
                                <PiUserCircleGearLight />
                            </button> */}
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
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
                            <Button color='yellow' onClick={() => { handleModalRender('table'); handleModal() }}>
                                <Text color='white' fw='bold'>Reserve</Text>
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