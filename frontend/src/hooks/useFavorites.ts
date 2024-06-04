import UserContext from '../context/user'
import toast from 'react-hot-toast'
import FavoriteContext from '../context/favorite'
import { useUser } from './useUser'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Favorite } from '../types/favorite'
import {
  addFavoriteService,
  deleteFavoriteService
} from '../services/favorites'

export const useFavorites = () => {
  const { characters, locations, setFavorites } = useContext(FavoriteContext)
  const { jwt } = useContext(UserContext)
  const { isLogged } = useUser()
  const navigate = useNavigate()

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
    setFavorites((prev) => {
      return {
        ...prev,
        [favoriteType]: [...prev[favoriteType], id]
      }
    })
  }

  const deleteFavorite = async ({ id, favoriteType }: Favorite) => {
    const { error } = await deleteFavoriteService({
      id,
      favoriteType,
      jwt: jwt as string
    })

    if (error) {
      return toast.error(error)
    }

    toast.success('Successfully deleted')
    setFavorites((prev) => {
      return {
        ...prev,
        [favoriteType]: prev[favoriteType].filter((favorite) => favorite !== id)
      }
    })
  }

  return {
    addFavorite,
    deleteFavorite,
    characters,
    locations,
    thereFavorites: Boolean(characters.length || locations.length)
  }
}
