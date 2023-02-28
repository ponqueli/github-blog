import styled from 'styled-components'

export const HomeContainer = styled.main``

export const ReposContainer = styled.section`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 14rem;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;

    @media (max-width: 425px) {
      grid-template-columns: 100%;
    }
  }
`
