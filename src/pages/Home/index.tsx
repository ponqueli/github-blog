import { useCallback, useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Profile, ProfileData } from './components/Profile'
import { HomeContainer, ReposContainer } from './styles'
import { githubAPI } from '../../libs/githubAPI'
import { Spinner } from '../../components/Spinner'
import { RepoItem } from './components/RepoItem'
import { SearchForm } from './components/SearchForm'

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
  const [userName, setUserName] = useState('ponqueli')
  const [repos, setRepos] = useState<IRepo[]>([])
  const [isLoadingRepos, setIsLoadingRepos] = useState(false)
  const [animationParent] = useAutoAnimate<HTMLUListElement>()
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoadingProfileData, setIsLoadingProfileData] = useState(false)

  const getReposByUser = useCallback(async (userName: string = 'ponqueli') => {
    try {
      setIsLoadingRepos(true)
      const { data } = await githubAPI.get(`users/${userName}/repos`, {
        params: {
          sort: 'updated',
        },
      })
      setRepos(data)
    } finally {
      setIsLoadingRepos(false)
    }
  }, [])

  const fetchProfileData = useCallback(
    async (userName: string = 'ponqueli') => {
      try {
        setIsLoadingProfileData(true)
        const { data } = await githubAPI.get(`/users/${userName}`)
        setProfileData(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingProfileData(false)
      }
    },
    [],
  )

  useEffect(() => {
    getReposByUser(userName)
  }, [getReposByUser, userName])

  useEffect(() => {
    fetchProfileData(userName)
  }, [fetchProfileData, userName])

  return (
    <HomeContainer className="container">
      <SearchForm
        fetchProfileData={fetchProfileData}
        setUserName={setUserName}
      />
      <Profile
        isLoadingProfileData={isLoadingProfileData}
        profileData={profileData}
      />
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
