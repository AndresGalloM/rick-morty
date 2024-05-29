import Register from '../views/register'
import Login from '../views/login'
import Locations from '../views/locations/Index'
import Characters from '../views/characters/Index'
import { useUser } from '../hooks/useUser'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/protectedRoute'

export const RoutesList = () => {
  const { isLogged } = useUser()
  return (
    <Routes>
      <Route path='/' element={<Characters />} />
      <Route path='/locations' element={<Locations />} />
      <Route
        element={<ProtectedRoute canAccess={isLogged} redirect='/login' />}
      >
        <Route path='/favorites' element={<h1>Favorites</h1>} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}
