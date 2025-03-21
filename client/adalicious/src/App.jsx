import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/Accueil';
import Menu from './components/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil/>
  },
  {
    path: '/menu',
    element: <Menu />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App