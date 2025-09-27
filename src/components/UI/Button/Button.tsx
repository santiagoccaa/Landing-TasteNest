import { backgroundColors, Colors } from "@/components/theme"
import { ReactNode } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    color: Colors
    className?: string
}

export const Button = ({ children, color, className, ...props }: ButtonProps) => {

    const ButtonStyles = [
        'py-2 px-4 rounded-lg flex items-center gap-2 shadow-sm cursor-pointer hover:scale-105 duration-300',
        backgroundColors[color],
        className
    ].filter(Boolean).join(' ')

    return (
        <button className={ButtonStyles} {...props}>
            {children}
        </button>
    )
}