import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 13.25rem;
  padding: 2rem 2.5rem;
  margin-bottom: 4.5rem;
  gap: 2rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const ProfileAvatar = styled.img`
  max-width: 9.25rem;
  width: 100%;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    margin: auto;
  }
`
