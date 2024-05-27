import { Router } from 'express'
import { checkAuth } from '../middleware/auth'
import { addFavorite, getAllFavorites } from '../services/favorites'

const router = Router()

router.get('/', checkAuth, getAllFavorites)
router.post('/', checkAuth, addFavorite)

export default router
