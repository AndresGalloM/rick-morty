import { GetLocations } from '../types/locations'

const URL_RICK_MORTY = import.meta.env.VITE_API_RICK_MORTY

export const getLocationsService: GetLocations = async ({ pageParam }) => {
  const response = await fetch(`${URL_RICK_MORTY}/location?page=${pageParam}`)

  if (!response.ok) throw new Error('There was an error fetching locations')

  return await response.json()
}
