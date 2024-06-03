import { useFavorites } from '../../hooks/useFavorites'
import { type BtnFavorite } from '../../types/favorite'
import { HeartBreakIcon, HeartIcon } from '../Icons'
import './BtnFavorite.css'

const BtnFavorite = ({ id, isFavorite, favoriteType }: BtnFavorite) => {
  const { addFavorite, deleteFavorite } = useFavorites()

  const handleAdd = () => {
    addFavorite({ id, favoriteType })
  }

  const handleRemove = () => {
    deleteFavorite({ id, favoriteType })
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
