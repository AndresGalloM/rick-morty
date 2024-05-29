import { LoginUser, RegisterUser } from '../types/users'

const URL = import.meta.env.VITE_API_BACKEND

export const RegisterService: RegisterUser = async ({ name, password }) => {
  const response = await fetch(`${URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password })
  })

  return response.json()
}

export const LoginService: LoginUser = async ({ name, password }) => {
  const response = await fetch(`${URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password })
  })

  return response.json()
}
