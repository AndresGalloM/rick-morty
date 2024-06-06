import { useUser } from '../../../hooks/useUser'
import Spinner from '../../spinner/Index'
import '../Auth.css'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    onSubmitRegister,
    validateInputs,
    isSubmitting
  } = useUser()

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

        <button className='auth-button' onClick={validateInputs}>
          {isSubmitting ? <Spinner size={20} /> : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
