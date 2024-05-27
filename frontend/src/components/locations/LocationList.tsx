import { Location } from '../../types/locations'
import LocationItem from './LocationItem'

const LocationList = ({ locations }: { locations: Location[] }) => {
  return (
    <ul className='location-list'>
      {locations.map((location) => {
        return <LocationItem key={location.id} location={location} />
      })}
    </ul>
  )
}

export default LocationList
