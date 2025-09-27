import { backgroundColors, Colors, roundedItem } from "@/components/theme"
import { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    color: Colors
    className?: string
    rounded?: 'lg' | 'full'
}

export const Button = ({ children, color, className, rounded = 'lg', ...props }: ButtonProps) => {

    const ButtonStyles = [
        'py-2 px-4 flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:scale-105 duration-300',
        backgroundColors[color],
        roundedItem[rounded],
        className
    ].filter(Boolean).join(' ')

    return (
        <button className={ButtonStyles} {...props}>
            {children}
        </button>
    )
}