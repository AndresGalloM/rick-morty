import { useState } from 'react'
import data from '../mocks/characters.json'

export const useCharacters = () => {
  const [responseCharacters, setResponseCharacters] = useState(data)

  const characters = responseCharacters.results

  return { characters }
}
