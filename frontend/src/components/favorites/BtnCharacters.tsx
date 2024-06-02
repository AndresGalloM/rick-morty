import FavorteContext from '../../context/favorite'
import BtnFavorite from './BtnFavorite'
import { useContext } from 'react'
import { FavoriteType } from '../../types/favorite'

const BtnCharacters = ({ id }: { id: number }) => {
  const { characters } = useContext(FavorteContext)
  const isFavorite = characters.includes(id)

  return (
    <BtnFavorite
      id={id}
      isFavorite={isFavorite}
      favoriteType={FavoriteType.CHARACTERS}
    />
  )
}

export default BtnCharacters
