import './Register.css'
import { useUser } from '../../../hooks/useUser'

const RegisterForm = () => {
  const { register, handleSubmit, onSubmitRegister, validateInputs } = useUser()

  return (
    <div className='form-box'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmitRegister)}>
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

        <button onClick={validateInputs}>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
