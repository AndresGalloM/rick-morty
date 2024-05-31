import express, { json } from 'express'
import authRouter from './routes/auth'
import favoritesRouter from './routes/favorites'
import cors from 'cors'

const PORT = process.env.PORT ?? 3000

const app = express()

// middlewares
app.use(
  cors({
    origin: ['http://localhost:4000']
  })
)
app.use(json())

// routes
app.use('/auth', authRouter)
app.use('/favorites', favoritesRouter)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
