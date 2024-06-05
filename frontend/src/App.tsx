import Header from './components/header/Index'
import Footer from './components/footer'
import { UserContextProvider } from './context/user'
import { Toaster } from 'react-hot-toast'
import { RoutesList } from './router'
import { FavoriteProvider } from './context/favorite'
import './App.css'

function App() {
  return (
    <UserContextProvider>
      <FavoriteProvider>
        <Header />
        <main>
          <RoutesList />
        </main>
        <Footer />
        <Toaster position='bottom-center' />
      </FavoriteProvider>
    </UserContextProvider>
  )
}

export default App
