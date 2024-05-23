import { Character } from '../../types/characters'
import CharacterItem from './CharacterItem'

const CharacterList = ({ characters }: { characters: Character[] }) => {
  return (
    <ul className='character-list'>
      {characters.map((character) => {
        return <CharacterItem key={character.id} character={character} />
      })}
    </ul>
  )
}

export default CharacterList
