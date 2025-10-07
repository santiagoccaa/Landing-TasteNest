"use client"

import { useGlobal } from '@/hook/useGlobal';
import { RiCloseLargeFill } from 'react-icons/ri';
import { Button, Heading, Text } from '../UI';

const ModalTable = () => {

    const { handleModalTable, openModalTable } = useGlobal()

    if (!openModalTable) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/30"
        >
            <div className="rounded-lg overflow-hidden relative w-96 bg-secondary p-8">
                <button className='cursor-pointer z-50 hover:-rotate-90 transition-all duration-300 absolute top-2 right-2' onClick={() => {
                    handleModalTable()
                }}>
                    <RiCloseLargeFill size={25} color='black' />
                </button>
                <form className='flex flex-col items-center'>
                    <Heading>
                        Reserver Table
                    </Heading>

                    <div className='flex flex-col my-4 w-full'>
                        <label htmlFor="name">Name</label>
                        <input type='text' name='name' id='name' placeholder='Your Name...' className='p-2 bg-white rounded-lg outline-red' />
                    </div>

                    <div className='flex flex-col my-4 w-full'>
                        <label htmlFor="date">Date</label>
                        <input type='date' name='date' id='date' className='p-2 bg-white rounded-lg outline-red' />
                    </div>

                    <div className='flex flex-col my-4 w-full'>
                        <label htmlFor="hora">Hora</label>
                        <input type='time' name='hora' id='hora' className='p-2 bg-white rounded-lg outline-red' />
                    </div>

                    <Button color='red' className='w-full mt-8'>
                        <Text color='white' fw='bold'>Reserve</Text>
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ModalTable