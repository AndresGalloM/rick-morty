import BtnCharacters from '../favorites/BtnCharacters'
import { Character } from '../../types/characters'

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
      <img src={image} alt={name} loading='lazy' />
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
      <BtnCharacters id={id} />
    </li>
  )
}

export default CharacterItem
