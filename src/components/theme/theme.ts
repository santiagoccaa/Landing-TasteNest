export type Colors = 'red' | 'yellow' | 'black' | 'gray' | 'white'
export type Position = 'start' | 'center' | 'end' | 'between'
export type FontWeight = 'bold' | 'medium' | 'light'
export type FontSize = 'xx' | 'xxl' | 'xl' | 'lg' | 'sm'
export type Separation = '2' | '4' | '6' | '8' | '10'

export const backgroundColors: Record<Colors, string> = {
    black: 'bg-black',
    gray: 'bg-gray',
    white: "bg-white",
    red: "bg-red",
    yellow: "bg-yellow"
}

export const borderColors: Record<Colors, string> = {
    black: 'border-black',
    gray: 'border-gray',
    white: "border-white",
    red: "border-red",
    yellow: "border-yellow"
}

export const textColors: Record<Colors, string> = {
    black: 'text-black',
    gray: 'text-gray',
    white: "text-white",
    red: "text-red",
    yellow: "text-yellow"
}

export const textFont: Record<FontWeight, string> = {
    bold: 'font-bold',
    medium: 'font-medium',
    light: 'font-light'
}

export const textSize: Record<FontSize, string> = {
    xx: 'text-6xl',
    xxl: 'text-4xl',
    xl: 'text-2xl',
    lg: 'text-lg',
    sm: 'text-sm'
}

export const alingItem: Record<Position, string> = {
    center: "items-center",
    end: "items-end",
    start: "items-start",
    between: 'items-between'
}
export const justifyItem: Record<Position, string> = {
    center: "justify-center",
    end: "justify-end",
    start: "justify-start",
    between: 'justify-between'
}

export const gapItems: Record<Separation, string> = {
    "2": 'gap-2',
    "4": 'gap-4',
    "6": 'gap-6',
    "8": 'gap-8',
    "10": 'gap-10',
}