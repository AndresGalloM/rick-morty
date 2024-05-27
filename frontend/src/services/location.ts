import { Locations } from '../types/locations'

const URL = 'https://rickandmortyapi.com/api/location'

export const getLocations = async (): Promise<{
  error: string | null
  payload: Locations | null
}> => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      return {
        error: 'Error fetching locations',
        payload: null
      }
    }

    const data = await response.json()

    return {
      error: null,
      payload: data
    }
  } catch (error) {
    return {
      error: 'Unexpected error, try again later',
      payload: null
    }
  }
}
