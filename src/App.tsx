import './App.css'
import Header from './components/header/Index'
import { RoutesList } from './router'

function App() {
  return (
    <>
      <Header />
      <main>
        <RoutesList />
      </main>
    </>
  )
}

export default App
