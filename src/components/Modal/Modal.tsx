"use client"

import { useGlobal } from '@/hook/useGlobal';
import { RiCloseLargeFill } from 'react-icons/ri';
import { ReactNode } from 'react';

import { ModalLogin, ModalProduct, ModalTable } from './variants'

export type RenderModal = 'product' | 'table' | 'auth'

const contentModal: Record<RenderModal, ReactNode> = {
    auth: <ModalLogin />,
    product: <ModalProduct />,
    table: <ModalTable />
}

export const Modal = () => {

    const { openModal, handleModal, contentModalRender } = useGlobal()
    if (!openModal) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/30"
        >
            <div className="rounded-lg overflow-hidden relative w-96">
                <button className='cursor-pointer z-50 hover:-rotate-90 transition-all duration-300 absolute top-2 right-2' onClick={() => {
                    handleModal()
                }}>
                    <RiCloseLargeFill size={25} color='black' />
                </button>
                <div className='p-4 bg-white'>
                    {contentModal[contentModalRender]}
                </div>
            </div>
        </div>
    );
}
