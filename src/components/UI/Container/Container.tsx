import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className='container mx-auto px-2 lg:px-4'>
            {children}
        </div>
    )
}
