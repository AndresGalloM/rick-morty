import BtnLocations from '../favorites/BtnLocations'
import { Location } from '../../types/locations'

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
      <BtnLocations id={id} />
    </li>
  )
}

export default LocationItem
