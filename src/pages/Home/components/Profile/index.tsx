import { useState } from 'react'
import { ProfileAvatar, ProfileContainer } from './styles'
import { Spinner } from '../../../../components/Spinner'

export interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  name: string
  html_url: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoadingProfileData, setIsLoadingProfileData] = useState(false)
  return (
    <ProfileContainer>
      {isLoadingProfileData ? (
        <Spinner />
      ) : (
        <>
          <ProfileAvatar />
        </>
      )}
    </ProfileContainer>
  )
}
