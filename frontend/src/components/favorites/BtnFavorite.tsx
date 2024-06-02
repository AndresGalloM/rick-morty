import { useFavorites } from '../../hooks/useFavorites'
import { HeartBreakIcon, HeartIcon } from '../Icons'
import { Favorite, FavoriteType } from '../../types/favorite'
import './BtnFavorite.css'
import FavorteContext from '../../context/favorite'
import { useContext, useEffect } from 'react'

const BtnFavorite = ({
  id,
  isFavorite,
  favoriteType
}: {
  id: number
  isFavorite: boolean
  favoriteType: FavoriteType
}) => {
  const { addFavorite } = useFavorites()

  const handleAdd = () => {
    addFavorite({ id, favoriteType })
  }

  const handleRemove = () => {
    // removeFavorite({ id, favoriteType })
  }

  return (
    <>
      {isFavorite ? (
        <button className='favorite-button remove' onClick={handleRemove}>
          <HeartBreakIcon />
          <span>Remove favorite</span>
        </button>
      ) : (
        <button className='favorite-button' onClick={handleAdd}>
          <HeartIcon />
          <span>Add to favorites</span>
        </button>
      )}
    </>
  )
}

export default BtnFavorite
