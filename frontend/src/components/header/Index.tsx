import { useUser } from '../../hooks/useUser'
import { NavLink } from 'react-router-dom'
import { MouseEvent } from 'react'
import './Header.css'

const Header = () => {
  const { isLogged, logout } = useUser()

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    logout()
  }

  const renderLoggedButtons = () => {
    return isLogged ? (
      <>
        <NavLink to='/favorites'>Favorites</NavLink>
        <button className='logout' onClick={handleClick}>
          Logout
        </button>
      </>
    ) : (
      <NavLink to='/login'>Login</NavLink>
    )
  }

  return (
    <header>
      <nav>
        <NavLink to='/'>Characters</NavLink>
        <NavLink to='/locations'>Locations</NavLink>
        {renderLoggedButtons()}
      </nav>
    </header>
  )
}

export default Header
