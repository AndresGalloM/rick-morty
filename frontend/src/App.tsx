import './App.css'
import Header from './components/header/Index'
import { UserContextProvider } from './context/user'
import { RoutesList } from './router'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <UserContextProvider>
      <Header />
      <main>
        <RoutesList />
      </main>
      <Toaster position='bottom-center' />
    </UserContextProvider>
  )
}

export default App
