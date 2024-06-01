import { FavoriteType } from '../../types/favorite'
import { Location } from '../../types/locations'
import BtnFavorite from '../favorites/BtnFavorite'

const LocationItem = ({ location }: { location: Location }) => {
  const { id, name, type, dimension, residents } = location

  return (
    <li className='location-item' key={id}>
      <h3>{name}</h3>
      <div>
        <p>
          <strong>Type:</strong> {type}
        </p>
        <p>
          <strong>Dimension:</strong> {dimension}
        </p>
        <p>
          <strong>Residents:</strong> {residents.length}
        </p>
      </div>
      <BtnFavorite id={id} favoriteType={FavoriteType.LOCATIONS} />
    </li>
  )
}

export default LocationItem
