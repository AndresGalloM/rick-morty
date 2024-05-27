import express, { json } from 'express'
import authRouter from './routes/auth'
import favoritesRouter from './routes/favorites'

const PORT = process.env.PORT ?? 3000

const app = express()

// middlewares
app.use(json())

// routes
app.use('/auth', authRouter)
app.use('/favorites', favoritesRouter)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
