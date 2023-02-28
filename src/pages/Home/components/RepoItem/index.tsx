import { Tooltip } from '@mantine/core'
import { IRepo } from '../..'
import { RegularText, TitleText } from '../../../../components/Typography'
import { getAmountOfTimeFromDateToNow } from '../../../../utils/formatter'
import { RepoItemContainer, RepoItemContent, RepoItemHeader } from './styles'

interface RepoItemProps {
  repo: IRepo
}

export function RepoItem({ repo }: RepoItemProps) {
  const formattedDate = getAmountOfTimeFromDateToNow(repo.created_at)

  return (
    <RepoItemContainer to={`${repo.html_url}`} target="_blank" rel="noreferrer">
      <RepoItemHeader>
        <TitleText as="h3" size="l" color="title" weight={700}>
          {repo.name}
        </TitleText>
        <Tooltip
          label={`${new Intl.DateTimeFormat('pt-BR').format(
            new Date(repo.created_at),
          )}`}
          withArrow
          arrowSize={6}
          position="top"
          transition="fade"
        >
          <span>{formattedDate}</span>
        </Tooltip>
      </RepoItemHeader>

      <Tooltip
        label={repo?.description}
        withArrow
        arrowSize={6}
        position="bottom"
        transition="fade"
      >
        <RepoItemContent>{repo?.description}</RepoItemContent>
      </Tooltip>
      <RegularText color="text" size="s" style={{ marginTop: 'auto' }}>
        {repo.language}
      </RegularText>
    </RepoItemContainer>
  )
}
