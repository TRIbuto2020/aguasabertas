import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EstiloGlobal } from "./styles"
import Home from './pages/Home'
import Calc from './pages/Calc'
import Score from './pages/Score'

const rotas = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/Calculadora',
    element:<Calc />
  },
  {
    path: '/Placar',
    element:<Score />
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
