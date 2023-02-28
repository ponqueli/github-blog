import { useCallback, useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Profile } from './components/Profile'
import { HomeContainer, ReposContainer } from './styles'
import { githubAPI } from '../../libs/githubAPI'
import { Spinner } from '../../components/Spinner'
import { RepoItem } from './components/RepoItem'

export interface IRepo {
  id: number
  name: string
  description: string
  created_at: string
  updated_at: string
  html_url: string
  language: string
}

export function Home() {
  const [repos, setRepos] = useState<IRepo[]>([])
  const [isLoadingRepos, setIsLoadingRepos] = useState(false)
  const [animationParent] = useAutoAnimate<HTMLUListElement>()

  const getReposByUser = useCallback(
    async (userInputSearch: string = 'ponqueli') => {
      try {
        setIsLoadingRepos(true)
        const { data } = await githubAPI.get(`users/${userInputSearch}/repos`, {
          params: {
            sort: 'updated',
          },
        })
        setRepos(data)
      } finally {
        setIsLoadingRepos(false)
      }
    },
    [],
  )

  useEffect(() => {
    getReposByUser()
  }, [getReposByUser])

  return (
    <HomeContainer className="container">
      <Profile />
      <ReposContainer>
        <ul ref={animationParent}>
          {isLoadingRepos ? (
            <Spinner />
          ) : (
            repos?.map((repo) => {
              return <RepoItem key={repo.id} repo={repo} />
            })
          )}
        </ul>
      </ReposContainer>
    </HomeContainer>
  )
}
