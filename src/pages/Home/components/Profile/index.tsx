import { useState } from 'react'
import { ProfileAvatar, ProfileContainer } from './styles'
import { Spinner } from '../../../../components/Spinner'

export function Profile() {
  const [isLoadingProfileData, setIsLoadingProfileData] = useState(true)
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
