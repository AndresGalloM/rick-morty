import './Login.css'
import { Link } from 'react-router-dom'
import { useUser } from '../../../hooks/useUser'

const LoginForm = () => {
  const { register, handleSubmit, onSubmitLogin, validateInputs } = useUser()

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

        <button onClick={validateInputs}>Login</button>
        <p className='foot'>
          Don't have an account yet? <Link to='/register'>Register</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
