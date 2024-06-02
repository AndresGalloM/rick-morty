import toast from 'react-hot-toast'
import CharacterList from '../characters/CharacterList'
import LocationList from '../locations/LocationList'
import { useEffect, useState } from 'react'
import { useFavorites } from '../../hooks/useFavorites'
import {
  getMultipleCharacters,
  getMultipleLocations
} from '../../services/favorites'
import { Character } from '../../types/characters'
import { Location } from '../../types/locations'
import './FavoriteList.css'
import { FavoriteType } from '../../types/favorite'

const FavoriteList = () => {
  const {
    characters: idsCharacters,
    locations: idsLocations,
    thereFavorites
  } = useFavorites()

  const [characters, setCharacters] = useState<Character[] | null>(null)
  const [locations, setLocations] = useState<Location[] | null>(null)
  const [favoriteSection, setFavoriteSection] = useState<
    'characters' | 'locations'
  >('characters')

  useEffect(() => {
    if (!idsCharacters.length) return
    getMultipleCharacters({ ids: idsCharacters }).then(({ error, payload }) => {
      if (error) {
        toast.error(error)
      }

      setCharacters(payload)
    })

    if (!idsLocations.length) return
    getMultipleLocations({ ids: idsLocations }).then(({ error, payload }) => {
      if (error) {
        toast.error(error)
      }

      setLocations(payload)
    })
  }, [idsCharacters, idsLocations])

  const renderCharacterList = () => {
    if (!characters?.length) return
    return <CharacterList characters={characters} />
  }

  const renderLocationList = () => {
    if (!locations?.length) return
    return <LocationList locations={locations} />
  }

  return (
    <>
      {thereFavorites ? (
        <>
          <button
            className={`button-section ${
              favoriteSection === FavoriteType.CHARACTERS ? 'active' : ''
            }`}
            onClick={() => {
              setFavoriteSection('characters')
            }}
          >
            Characters
          </button>
          <button
            className={`button-section ${
              favoriteSection === FavoriteType.LOCATIONS ? 'active' : ''
            }`}
            onClick={() => {
              setFavoriteSection('locations')
            }}
          >
            Locations
          </button>

          {favoriteSection === 'characters' && renderCharacterList()}
          {favoriteSection === 'locations' && renderLocationList()}
        </>
      ) : (
        <h3>There are not favorites</h3>
      )}
    </>
  )
}

export default FavoriteList