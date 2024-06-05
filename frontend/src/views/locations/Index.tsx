import Spinner from '../../components/spinner/Index'
import LocationList from '../../components/locations/LocationList'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useLocations } from '../../hooks/useLocations'
import './Locations.css'

const Locations = () => {
  const {
    locations,
    isLoading,
    isError,
    hasLocations,
    hasNextPage,
    fetchNextPage
  } = useLocations()

  return (
    <>
      {isLoading && (
        <div>
          <Spinner size={40} />
        </div>
      )}

      {isError && <p>Error...</p>}

      {!hasLocations && !isLoading && !isError && (
        <p>There are not locations</p>
      )}

      {hasLocations && (
        <InfiniteScroll
          dataLength={locations.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<Spinner size={40} />}
          hasChildren={true}
          className='infinite-scroll'
        >
          <LocationList locations={locations} />
        </InfiniteScroll>
      )}
    </>
  )
}

export default Locations
