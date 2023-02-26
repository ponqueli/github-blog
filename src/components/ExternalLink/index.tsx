import { ComponentProps, ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
  icon: ReactNode
  iconPosition?: 'right' | 'left'
}

export function ExternalLink({
  text,
  icon,
  iconPosition = 'right',
  ...rest
}: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {iconPosition === 'right' ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </ExternalLinkContainer>
  )
}
