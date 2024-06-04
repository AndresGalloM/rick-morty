import { GetCharacters } from '../types/characters'

const URL_RICK_MORTY = import.meta.env.VITE_API_RICK_MORTY

export const getCharactersService: GetCharacters = async ({ pageParam }) => {
  const rawResponse = await fetch(
    `${URL_RICK_MORTY}/character?page=${pageParam}`
  )

  if (!rawResponse.ok) throw new Error('There was an error fetching characters')

  return rawResponse.json()
}
