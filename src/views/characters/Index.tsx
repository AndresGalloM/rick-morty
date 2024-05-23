import CharacterList from '../../components/characters/CharacterList'
import { useCharacters } from '../../hooks/useCharacters'
import './Characters.css'

const Characters = () => {
  const { characters } = useCharacters()

  const hasCharacters = characters.length > 0

  return (
    <>
      {hasCharacters ? (
        <CharacterList characters={characters} />
      ) : (
        <h2>There are not characters</h2>
      )}
    </>
  )
}

export default Characters
