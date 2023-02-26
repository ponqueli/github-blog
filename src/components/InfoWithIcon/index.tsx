import { ReactNode } from 'react'
import { InfoWithIconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  iconColor?: string
  text: string
  textColor?: string
}

export function InfoWithIcon({
  text,
  icon,
  textColor,
  iconColor,
}: InfoWithIconProps) {
  return (
    <InfoWithIconContainer textColor={textColor} iconColor={iconColor}>
      {icon}
      <p>{text}</p>
    </InfoWithIconContainer>
  )
}
