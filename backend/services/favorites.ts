import { Favorite, FavoriteType, favorites } from '../db/favorites'
import { Request, Response } from 'express'

type ExpressHandler = (req: Request, res: Response) => void
type FavoriteParams = {
  id: number
  favoriteType: FavoriteType
}

export const getAllFavorites: ExpressHandler = (req, res) => {
  const { name } = req.params

  const userFavorites = favorites.find((favorite) => favorite.nameUser === name)
    ?.favorites ?? { characters: [], locations: [] }

  res.status(200).json({ error: null, payload: { favorites: userFavorites } })
}

export const addFavorite: ExpressHandler = (req, res) => {
  const { name } = req.params
  const { id, favoriteType } = req.body as FavoriteParams

  if (!Object.values(FavoriteType).includes(favoriteType)) {
    return res
      .status(400)
      .json({ error: 'Invalid favorite type', payload: null })
  }

  if (typeof id !== 'number') {
    return res.status(404).json({ error: 'Id must be a number', payload: null })
  }

  let indexUser = favorites.findIndex((user) => user.nameUser === name)

  if (indexUser === -1) {
    const newFavorite: Favorite = {
      nameUser: name,
      favorites: {
        characters: [],
        locations: []
      }
    }
    newFavorite.favorites[favoriteType].push(id)
    indexUser = favorites.push(newFavorite) - 1
  } else {
    if (favorites[indexUser].favorites[favoriteType].includes(id)) {
      return res
        .status(409)
        .json({ error: 'Item already exists', payload: null })
    }

    favorites[indexUser].favorites[favoriteType].push(id)
  }

  res.status(201).json({
    error: null,
    payload: { favorites: favorites[indexUser].favorites }
  })
}

export const deleteFavorite: ExpressHandler = (req, res) => {
  const { name } = req.params
  const { id, favoriteType } = req.body as FavoriteParams

  if (!Object.values(FavoriteType).includes(favoriteType)) {
    return res
      .status(400)
      .json({ error: 'Invalid favorite type', payload: null })
  }

  let indexUser = favorites.findIndex((favorite) => favorite.nameUser === name)

  if (indexUser === -1) {
    return res
      .status(404)
      .json({ error: 'Favorite does not exist', payload: null })
  }

  const userFavorites = favorites[indexUser].favorites

  favorites[indexUser].favorites = {
    ...userFavorites,
    [favoriteType]: userFavorites[favoriteType].filter(
      (favorite) => favorite !== id
    )
  }

  res.status(200).json({
    error: null,
    payload: { favorites: favorites[indexUser].favorites }
  })
}
