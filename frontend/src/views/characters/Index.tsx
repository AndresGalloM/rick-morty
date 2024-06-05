import Spinner from '../../components/spinner/Index'
import InfiniteScroll from 'react-infinite-scroll-component'
import CharacterList from '../../components/characters/CharacterList'
import { useCharacters } from '../../hooks/useCharacters'
import './Characters.css'

const Characters = () => {
  const {
    characters,
    hasCharacters,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage
  } = useCharacters()

  return (
    <>
      {isLoading && (
        <div>
          <Spinner size={40} />
        </div>
      )}

      {isError && <p>Error...</p>}

      {!hasCharacters && !isLoading && !isError && (
        <p>There are not characters</p>
      )}

      {hasCharacters && (
        <InfiniteScroll
          dataLength={characters.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<Spinner size={40} />}
          hasChildren={true}
          className='infinite-scroll'
        >
          <CharacterList characters={characters} />
        </InfiniteScroll>
      )}
    </>
  )
}

export default Characters
