import Spinner from '../../spinner/Index'
import { useUser } from '../../../hooks/useUser'
import { Link } from 'react-router-dom'
import '../Auth.css'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    onSubmitLogin,
    validateInputs,
    isSubmitting
  } = useUser()

  return (
    <div className='form-box'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <div className='input-box'>
          <input
            type='text'
            placeholder='username'
            {...register('name', { required: true })}
          />
        </div>

        <div className='input-box'>
          <input
            type='password'
            placeholder='password'
            {...register('password', { required: true })}
          />
        </div>

        <button className='auth-button' onClick={validateInputs}>
          {isSubmitting ? <Spinner size={20} /> : 'Login'}
        </button>
        <p className='foot'>
          Don't have an account yet? <Link to='/register'>Register</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
