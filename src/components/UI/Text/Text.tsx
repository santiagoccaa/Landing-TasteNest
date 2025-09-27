import { Colors, FontSize, FontWeight, textColors, textFont, textSize } from "@/components/theme"
import { ReactNode } from "react"

interface TextProps {
  as?: 'p' | 'span'
  fs?: FontSize
  fw?: FontWeight
  color?: Colors
  className?: string
  children: ReactNode
}

export const Text = ({
  as: Component = 'p',
  fs = 'sm',
  fw = 'light',
  color = 'gray',
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
