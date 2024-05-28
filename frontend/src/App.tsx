import './App.css'
import Header from './components/header/Index'
import { RoutesList } from './router'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Header />
      <main>
        <RoutesList />
      </main>
      <Toaster position='bottom-center' />
    </>
  )
}

export default App
