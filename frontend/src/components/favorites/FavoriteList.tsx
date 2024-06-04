import FavoriteLocations from './FavoriteLocations'
import FavoriteCharacters from './FavoriteCharacters'
import { useState } from 'react'
import { useFavorites } from '../../hooks/useFavorites'
import { FavoriteType } from '../../types/favorite'
import './FavoriteList.css'

const FavoriteList = () => {
  const {
    characters: idsCharacters,
    locations: idsLocations,
    thereFavorites
  } = useFavorites()

  const [favoriteSection, setFavoriteSection] = useState<
    'characters' | 'locations'
  >('characters')

  return (
    <>
      {!thereFavorites && <h3>There are not favorites</h3>}

      {thereFavorites && (
        <>
          <nav className='favorite-sections'>
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
          </nav>

          {favoriteSection === 'characters' && (
            <FavoriteCharacters ids={idsCharacters} />
          )}

          {favoriteSection === 'locations' && (
            <FavoriteLocations ids={idsLocations} />
          )}
        </>
      )}
    </>
  )
}

export default FavoriteList
