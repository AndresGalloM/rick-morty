import { useInfiniteQuery } from '@tanstack/react-query'
import { getCharactersService } from '../services/characters'

export const useCharacters = () => {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['characters'],
      queryFn: getCharactersService,
      getNextPageParam: (lastPage, _, lastPageParam) => {
        if (lastPage.info.next === null) return null

        return lastPageParam + 1
      },
      initialPageParam: 1
    })

  const characters = data?.pages.flatMap((page) => page.results) ?? []

  return {
    characters,
    isLoading,
    isError,
    hasNextPage,
    hasCharacters: characters.length > 0,
    fetchNextPage
  }
}
