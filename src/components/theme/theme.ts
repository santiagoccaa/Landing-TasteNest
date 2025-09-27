export type Colors = 'red' | 'yellow' | 'black' | 'gray' | 'white'
export type Position = 'start' | 'center' | 'end'

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