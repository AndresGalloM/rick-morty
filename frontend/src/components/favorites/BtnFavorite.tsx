import { useFavorites } from '../../hooks/useFavorites'
import { HeartIcon } from '../Icons'
import { Favorite } from '../../types/favorite'
import './BtnFavorite.css'

const BtnFavorite = ({ id, favoriteType }: Favorite) => {
  const { addFavorite } = useFavorites()

  const handleClick = () => {
    addFavorite({ id, favoriteType })
  }

  return (
    <button className='favorite-button' onClick={handleClick}>
      <HeartIcon />
      <span>Agregar a favorito</span>
    </button>
  )
}

export default BtnFavorite
