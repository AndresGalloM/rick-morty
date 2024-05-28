import { Route, Routes } from 'react-router-dom'
import Characters from '../views/characters/Index'
import Locations from '../views/locations/Index'
import Login from '../views/login'
import Register from '../views/register'

export const RoutesList = () => {
  return (
    <Routes>
      <Route path='/' element={<Characters />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/favorites' element={<h1>Favorites</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}
