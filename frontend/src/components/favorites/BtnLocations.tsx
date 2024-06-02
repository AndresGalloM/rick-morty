import FavorteContext from '../../context/favorite'
import BtnFavorite from './BtnFavorite'
import { useContext } from 'react'
import { FavoriteType } from '../../types/favorite'

const BtnLocations = ({ id }: { id: number }) => {
  const { locations } = useContext(FavorteContext)
  const isFavorite = locations.includes(id)

  return (
    <BtnFavorite
      id={id}
      isFavorite={isFavorite}
      favoriteType={FavoriteType.LOCATIONS}
    />
  )
}

export default BtnLocations
