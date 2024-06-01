import UserContext from '../context/user'
import toast from 'react-hot-toast'
import { useUser } from './useUser'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Favorite, ListFavorites } from '../types/favorite'
import { addFavoriteService, getFavoritesService } from '../services/favorites'

export const useFavorites = () => {
  const [listFavorites, setListFavorites] = useState<ListFavorites>({
    characters: [],
    locations: []
  })
  const { jwt } = useContext(UserContext)
  const { isLogged } = useUser()
  const navigate = useNavigate()

  const getFavorites = async () => {
    const {
      error,
      payload: { favorites }
    } = await getFavoritesService({ jwt: jwt as string })

    if (error) {
      return toast.error(error)
    }

    setListFavorites(favorites)
  }

  const addFavorite = async ({ id, favoriteType }: Favorite) => {
    if (!isLogged) return navigate('/login')

    const { error } = await addFavoriteService({
      id,
      favoriteType,
      jwt: jwt as string
    })

    if (error) {
      return toast.error(error)
    }

    toast.success('Successfully added')
  }

  return {
    addFavorite,
    listFavorites,
    getFavorites,
    thereFavorites: Boolean(
      listFavorites.characters.length && listFavorites.locations.length
    )
  }
}
