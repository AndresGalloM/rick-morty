import LocationList from '../../components/locations/LocationList'
import { useLocations } from '../../hooks/useLocations'
import './Locations.css'

const Locations = () => {
  const { locations } = useLocations()

  const hasLocations = locations.length > 0

  return (
    <>
      {hasLocations ? (
        <LocationList locations={locations} />
      ) : (
        <h2>There are not Locations</h2>
      )}
    </>
  )
}

export default Locations
