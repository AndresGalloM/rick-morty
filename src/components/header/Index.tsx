import { NavLink } from 'react-router-dom'
import './Header.css'

const routes = [
  {
    path: '/',
    title: 'Characters'
  },
  {
    path: '/locations',
    title: 'Locations'
  },
  {
    path: '/favorites',
    title: 'Proyectos'
  }
]

const Header = () => {
  return (
    <header>
      <nav>
        {routes.map(({ path, title }) => (
          <NavLink key={path} to={path}>
            {title}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
