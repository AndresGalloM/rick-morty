import './App.css'
import Header from './components/header/Index'
import { UserContextProvider } from './context/user'
import { RoutesList } from './router'
import { Toaster } from 'react-hot-toast'
import { FavoriteProvider } from './context/favorite'

function App() {
  return (
    <UserContextProvider>
      <FavoriteProvider>
        <Header />
        <main>
          <RoutesList />
        </main>
        <Toaster position='bottom-center' />
      </FavoriteProvider>
    </UserContextProvider>
  )
}

export default App
