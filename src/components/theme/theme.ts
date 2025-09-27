export type Colors = 'red' | 'yellow' | 'black' | 'gray' | 'white'
export type Position = 'start' | 'center' | 'end'
export type FontWeight = 'bold' | 'medium' | 'light'
export type FontSize = 'xxl' | 'xl' | 'lg' | 'sm'
export type Separation = '2' | '4' | '6' | '8' | '10'

export const backgroundColors: Record<Colors, string> = {
    black: 'bg-[#212121]',
    gray: 'bg-[#5C5C5B]',
    white: "bg-[#FFFFFF]",
    red: "bg-[#F3274C]",
    yellow: "bg-[#FFD40D]"
}

export const borderColors: Record<Colors, string> = {
    black: 'border-[#212121]',
    gray: 'border-[#5C5C5B]',
    white: "border-[#FFFFFF]",
    red: "border-[#F3274C]",
    yellow: "border-[#FFD40D]"
}

export const textColors: Record<Colors, string> = {
    black: 'text-[#212121]',
    gray: 'text-[#5C5C5B]',
    white: "text-[#FFFFFF]",
    red: "text-[#F3274C]",
    yellow: "text-[#FFD40D]"
}

export const textFont: Record<FontWeight, string> = {
    bold: 'font-bold',
    medium: 'font-medium',
    light: 'font-light'
}

export const textSize: Record<FontSize, string> = {
    xxl: 'text-4xl',
    xl: 'text-2xl',
    lg: 'text-lg',
    sm: 'text-sm'
}

export const alingItem: Record<Position, string> = {
    center: "items-center",
    end: "items-end",
    start: "items-start"
}
export const justifyItem: Record<Position, string> = {
    center: "justify-center",
    end: "justify-end",
    start: "justify-start"
}

export const gapItems: Record<Separation, string> = {
    "2": 'gap-2',
    "4": 'gap-4',
    "6": 'gap-6',
    "8": 'gap-8',
    "10": 'gap-10',
}