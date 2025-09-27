import { Colors, FontSize, FontWeight, textColors, textFont, textSize } from "@/components/theme"
import { ReactNode } from "react"

interface TextProps {
  as?: 'h1' | 'h2' | 'h3'
  fs?: FontSize
  fw?: FontWeight
  color?: Colors
  className?: string
  children: ReactNode
}

export const Heading = ({
  as: Component = 'h2',
  fs = 'xl',
  fw = 'bold',
  color = 'black',
  className,
  children
}: TextProps) => {

  const textStyles = [
    textSize[fs],
    textFont[fw],
    textColors[color],
    className
  ].filter(Boolean).join(' ')

  return (
    <Component className={textStyles}>
      {children}
    </Component>
  )
}
