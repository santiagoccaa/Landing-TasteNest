import { alingItem, gapItems, justifyItem, Position, Separation } from '@/components/theme'
import { ReactNode } from 'react'

interface FlexProps {
    aling?: Position
    justify?: Position
    direction?: 'row' | 'colum'
    gap?: Separation
    className?: string
    children: ReactNode
}

export const Flex = ({
    aling = 'center',
    justify = 'center',
    direction = 'row',
    gap = "2",
    className,
    children
}: FlexProps) => {

    const flexStyles = [
        'flex',
        alingItem[aling],
        justifyItem[justify],
        gapItems[gap],
        className,
        direction === 'colum' ? 'flex-col' : 'flex-row'
    ].filter(Boolean).join(' ')

    return (
        <div className={flexStyles}>
            {children}
        </div>
    )
}
