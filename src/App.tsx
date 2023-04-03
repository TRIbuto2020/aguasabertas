import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EstiloGlobal } from "./styles"
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  }
])

function App() {
  return (
  <>
    <EstiloGlobal />
    <RouterProvider router={rotas} />
  </>
  )
}

export default App
