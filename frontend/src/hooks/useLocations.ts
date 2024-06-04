import { useInfiniteQuery } from '@tanstack/react-query'
import { getLocationsService } from '../services/locations'

export const useLocations = () => {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['locations'],
      queryFn: getLocationsService,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.info.next === null) return null

        return lastPageParam + 1
      },
      initialPageParam: 1
    })

  const locations = data?.pages.flatMap((page) => page.results) ?? []

  return {
    locations,
    isLoading,
    isError,
    hasNextPage,
    hasLocations: locations.length > 0,
    fetchNextPage
  }
}
