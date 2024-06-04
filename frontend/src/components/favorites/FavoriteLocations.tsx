import { useQuery } from '@tanstack/react-query'
import { getMultipleLocations } from '../../services/favorites'
import LocationList from '../locations/LocationList'
import Spinner from '../spinner/Index'

const FavoriteLocations = ({ ids }: { ids: number[] }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['favoriteLocations', ids],
    queryFn: () => getMultipleLocations({ ids }),
    refetchOnWindowFocus: false
  })

  const hasLocations = Number(data?.length) > 0 && data !== undefined

  return (
    <>
      {isLoading && <Spinner size={40} />}

      {isError && <h2>Error fetching data</h2>}

      {!isLoading && hasLocations && <LocationList locations={data} />}

      {!hasLocations && <h3>There are not favorite locations</h3>}
    </>
  )
}

export default FavoriteLocations
