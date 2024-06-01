import { Character } from '../../types/characters'
import { FavoriteType } from '../../types/favorite'
import BtnFavorite from '../favorites/BtnFavorite'

const CharacterItem = ({ character }: { character: Character }) => {
  const {
    id,
    name,
    status,
    species,
    image,
    gender,
    origin: { name: originName }
  } = character

  return (
    <li className='character-item'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Species:</strong> {species}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Location:</strong> {originName}
        </p>
      </div>
      <BtnFavorite id={id} favoriteType={FavoriteType.CHARACTERS} />
    </li>
  )
}

export default CharacterItem
