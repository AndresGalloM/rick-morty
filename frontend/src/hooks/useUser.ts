import UserContext from '../context/user'
import toast from 'react-hot-toast'
import { User } from '../types/users'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginService, RegisterService } from '../services/auth'

export const useUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<User>()
  const navigate = useNavigate()
  const { jwt, setJwt } = useContext(UserContext)

  const onSubmitRegister: SubmitHandler<User> = async (data) => {
    const { error } = await RegisterService(data)

    if (error) {
      return toast.error(error)
    }

    toast.success('Successfully registered')
    navigate('/login')
  }

  const onSubmitLogin: SubmitHandler<User> = async (data) => {
    const {
      error,
      payload: { token }
    } = await LoginService(data)

    if (error) {
      return toast.error(error)
    }

    window.localStorage.setItem('token', token as string)
    setJwt(token as string)
    toast.success('Successfully logged in', { position: 'top-right' })
    navigate('/')
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setJwt(null)
    navigate('/')
  }

  const validateInputs = () => {
    if (errors.name) return toast.error('Username is required')
    if (errors.password) return toast.error('Password is required')
  }

  return {
    isLogged: Boolean(jwt),
    logout,
    register,
    handleSubmit,
    onSubmitRegister,
    onSubmitLogin,
    validateInputs,
    isSubmitting
  }
}
