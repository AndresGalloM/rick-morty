import UserContext from '../context/user'
import toast from 'react-hot-toast'
import { getFavoritesService } from '../services/favorites'
import { FavoriteContext, ListFavorites } from '../types/favorite'
import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext<FavoriteContext>({} as FavoriteContext)

export const FavoriteProvider = ({ children }: { children: JSX.Element[] }) => {
  const { jwt } = useContext(UserContext)
  const [favorites, setFavorites] = useState<ListFavorites>({
    characters: [],
    locations: []
  })

  useEffect(() => {
    if (!jwt) return

    getFavoritesService({ jwt: jwt as string }).then(
      ({ error, payload: { favorites } }) => {
        if (error) {
          return toast.error(error)
        }

        setFavorites(favorites)
      }
    )
  }, [jwt])

  return (
    <Context.Provider
      value={{
        characters: favorites.characters,
        locations: favorites.locations,
        setFavorites
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
