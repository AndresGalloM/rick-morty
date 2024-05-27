import { useState } from 'react'
import data from '../mocks/locations.json'

export const useLocations = () => {
  const [responseLocations, setResponseLocations] = useState(data)

  const locations = responseLocations.results

  return { locations }
}
