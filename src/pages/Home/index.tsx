import { Profile } from './components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer className="container">
      <Profile />
    </HomeContainer>
  )
}
