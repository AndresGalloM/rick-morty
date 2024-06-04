import { useQuery } from '@tanstack/react-query'
import { getMultipleCharacters } from '../../services/favorites'
import CharacterList from '../characters/CharacterList'
import Spinner from '../spinner/Index'

const FavoriteCharacters = ({ ids }: { ids: number[] }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['favoriteCharacters', ids],
    queryFn: () => getMultipleCharacters({ ids }),
    refetchOnWindowFocus: false
  })

  const hasCharacters = Number(data?.length) > 0 && data !== undefined

  return (
    <>
      {isLoading && <Spinner size={40} />}

      {isError && <h2>Error fetching data</h2>}

      {!isLoading && hasCharacters && <CharacterList characters={data} />}

      {!hasCharacters && <h3>There are not favorite locations</h3>}
    </>
  )
}

export default FavoriteCharacters
