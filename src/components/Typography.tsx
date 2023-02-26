import styled from 'styled-components'

interface TitleTextProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  color?: 'title' | 'subtitle' | 'text'
  weight?: string | number
}

interface RegularTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'text' | 'subtitle' | 'label'
  weight?: string | number
}

export const TitleText = styled.h2<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.default};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.default};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};
`
