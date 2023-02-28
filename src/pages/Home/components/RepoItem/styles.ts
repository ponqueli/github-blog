import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RepoItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 16.25rem;
  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;

  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  transition: border-color 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const RepoItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;

  h3 {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    width: max-content;
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    line-height: 160%;
    color: ${({ theme }) => theme.colors['base-span']};

    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const RepoItemContent = styled.p`
  font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  line-height: 160%;
  color: ${({ theme }) => theme.colors['base-text']};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`
