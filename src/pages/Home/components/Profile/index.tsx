import { useCallback, useEffect, useState } from 'react'
import { ProfileAvatar, ProfileContainer } from './styles'
import { Spinner } from '../../../../components/Spinner'
import { githubAPI } from '../../../../libs/githubAPI'

export interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  name: string
  html_url: string
  company?: string
  followers: number
}

// get username from .env.example file
const username = import.meta.env.VITE_GITHUB_USERNAME

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoadingProfileData, setIsLoadingProfileData] = useState(false)

  const fetchProfileData = useCallback(async () => {
    try {
      setIsLoadingProfileData(true)
      const { data } = await githubAPI.get(`/users/${username}`)
      setProfileData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingProfileData(false)
    }
  }, [])

  useEffect(() => {
    fetchProfileData()
  }, [fetchProfileData])

  return (
    <ProfileContainer>
      {isLoadingProfileData ? (
        <Spinner />
      ) : (
        <>
          <ProfileAvatar src={profileData.avatar_url} alt="profile picture" />
        </>
      )}
    </ProfileContainer>
  )
}
