import { Button, Heading } from '@/components/UI'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='flex flex-col gap-4 justify-center items-center text-center h-96'>
            <Heading fs='xx'>404</Heading>
            <Heading fs='xl' fw='medium'>Ops... Not Found</Heading>
            <Button color='red'>
                <Link href={"/"} className='text-white'>Go to Home</Link>
            </Button>
        </div>
    )
}
