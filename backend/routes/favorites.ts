import { Router } from 'express'
import { checkAuth } from '../middleware/auth'
import {
  addFavorite,
  deleteFavorite,
  getAllFavorites
} from '../services/favorites'

const router = Router()

router.get('/', checkAuth, getAllFavorites)
router.post('/', checkAuth, addFavorite)
router.delete('/', checkAuth, deleteFavorite)

export default router
