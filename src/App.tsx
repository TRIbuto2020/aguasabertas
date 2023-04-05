import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EstiloGlobal } from "./styles"
import Home from './pages/Home'
import Calc from './pages/Calc'

const rotas = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/Calculadora',
    element:<Calc />
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
