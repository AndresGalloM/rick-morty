import { Router } from 'express'
import { users } from '../db/users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = Router()

const SALT_ROUNDS = 10
const SECRET_KEY = process.env.SECRET_KEY as string

router.post('/register', async (req, res) => {
  const { name, password }: { name: string; password: string } = req.body

  if (name === '') {
    return res.status(400).json({ error: 'Name is required', payload: {} })
  }

  if (password === '') {
    return res.status(400).json({ error: 'Password is required', payload: {} })
  }

  const existUser = users.some((user) => user.name === name)

  if (existUser) {
    return res.status(409).json({ error: 'User already exists', payload: {} })
  }

  const newUser = {
    name,
    password: await bcrypt.hash(password, SALT_ROUNDS)
  }

  const { password: pass, ...user } = newUser

  users.push(newUser)

  res.status(201).json({ error: null, payload: { user } })
})

router.post('/login', async (req, res) => {
  const { name, password } = req.body

  if (name === '') {
    return res.status(400).json({ error: 'Name is required', payload: {} })
  }

  if (password === '') {
    return res.status(400).json({ error: 'Password is required', payload: {} })
  }

  const user = users.find((user) => user.name === name)

  if (!user) {
    return res.status(404).json({ error: 'User not found', payload: {} })
  }

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    return res.status(401).json({ error: 'Invalid password', payload: {} })
  }

  const token = jwt.sign(user, SECRET_KEY, { expiresIn: 10 * 60 })

  res.status(200).json({ error: null, payload: { token } })
})

export default router
