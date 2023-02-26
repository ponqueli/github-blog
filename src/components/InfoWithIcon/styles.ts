import styled from 'styled-components'

interface InfoWithIconContainerProps {
  textColor?: string
  iconColor?: string
}

export const InfoWithIconContainer = styled.div<InfoWithIconContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > p {
    flex: 1;
    text-align: left;
    color: ${({ theme, textColor }) =>
      textColor || theme.colors['base-subtitle']};
  }

  & > svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme, iconColor }) => iconColor || theme.colors['base-label']};
  }
`
