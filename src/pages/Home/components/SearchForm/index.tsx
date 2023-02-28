import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'

// VALIDATION SCHEMA
const searchFormSchema = zod.object({
  userName: zod.string(),
})

// TIPAGEM DOS DADOS DO FORMULÁRIO
type SearchFormInputs = zod.infer<typeof searchFormSchema>

interface SearchFormProps {
  fetchProfileData: (userName?: string) => Promise<void>
  setUserName: (userName: string) => void
}

export function SearchForm({ fetchProfileData, setUserName }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchRepositoriesByUserName(data: SearchFormInputs) {
    await fetchProfileData(data.userName)
    setUserName(data.userName)
  }

  return (
    <SearchFormContainer>
      <form onSubmit={handleSubmit(handleSearchRepositoriesByUserName)}>
        <input
          type="text"
          placeholder="Buscar usuário"
          {...register('userName')}
        />
      </form>
    </SearchFormContainer>
  )
}
