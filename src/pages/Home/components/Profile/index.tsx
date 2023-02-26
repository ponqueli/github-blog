import { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileDetails,
  ProfileInfoContainer,
} from './styles'
import { Spinner } from '../../../../components/Spinner'
import { githubAPI } from '../../../../libs/githubAPI'
import { RegularText, TitleText } from '../../../../components/Typography'
import { ExternalLink } from '../../../../components/ExternalLink'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'

export interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  name: string
  html_url: string
  company?: string
  followers: number
}

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
          <ProfileDetails>
            <header>
              <TitleText size="xl" color="title">
                {profileData.name}
              </TitleText>
              <ExternalLink
                href={profileData.html_url}
                target="_blank"
                text="github"
                icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                iconPosition="right"
              />
            </header>
            <RegularText color="text" size="m">
              {profileData.bio}
            </RegularText>
            <ProfileInfoContainer>
              <InfoWithIcon
                text={profileData.login}
                icon={<FontAwesomeIcon icon={faGithub} />}
              />
              {profileData.company && (
                <InfoWithIcon
                  text={profileData.company}
                  icon={<FontAwesomeIcon icon={faBuilding} />}
                />
              )}
              <InfoWithIcon
                text={`${profileData.followers} seguidores`}
                icon={<FontAwesomeIcon icon={faUserGroup} />}
              />
            </ProfileInfoContainer>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  )
}
