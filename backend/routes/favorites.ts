import { Router } from 'express'
import { checkAuth } from '../middleware/auth'
import { favorites } from '../db/favorites'

const router = Router()

router.get('/', checkAuth, (req, res) => {
  const { name } = req.params

  const userFavorites =
    favorites.find((favorite) => favorite.nameUser === name)?.favorites ?? []

  res.status(200).json({ error: null, payload: { favorites: userFavorites } })
})

router.post('/', checkAuth, (req, res) => {
  const { name } = req.params
  const { id } = req.body

  if (typeof id !== 'number') {
    return res.status(404).json({ error: 'Id must be a number' })
  }

  const indexUser = favorites.findIndex((user) => user.nameUser === name)

  indexUser === -1
    ? favorites.push({ nameUser: name, favorites: [id] })
    : favorites[indexUser].favorites.push(id)

  const userFavorites = favorites[indexUser]?.favorites ?? [id]

  res.status(201).json({
    error: null,
    payload: { favorites: userFavorites }
  })
})

export default router
