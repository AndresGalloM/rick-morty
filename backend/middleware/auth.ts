import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const SECRET_KEY = process.env.SECRET_KEY as string

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1] ?? null

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized', payload: {} })
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY) as JwtPayload & {
      name: string
      password: string
    }
    req.params.name = payload.name
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid Token', payload: {} })
  }
}
