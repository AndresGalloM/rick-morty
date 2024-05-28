import { SubmitHandler, useForm } from 'react-hook-form'
import { User } from '../types/users'
import { useNavigate } from 'react-router-dom'
import { LoginService, RegisterService } from '../services/auth'
import toast from 'react-hot-toast'

export const useUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<User>()
  const navigate = useNavigate()

  const onSubmitRegister: SubmitHandler<User> = async (data) => {
    const { error } = await RegisterService(data)

    if (error) {
      return toast.error(error)
    }

    toast.success('Successfully registered')
    navigate('/login')
  }

  const onSubmitLogin: SubmitHandler<User> = async (data) => {
    const { error } = await LoginService(data)

    if (error) {
      return toast.error(error)
    }

    toast.success('Successfully logged in', { position: 'top-right' })
    navigate('/')
  }

  const validateInputs = () => {
    if (errors.name) return toast.error('Username is required')
    if (errors.password) return toast.error('Password is required')
  }

  return {
    register,
    handleSubmit,
    onSubmitRegister,
    onSubmitLogin,
    validateInputs
  }
}
