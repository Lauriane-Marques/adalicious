import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/Accueil';
import Menu from './components/Menu'
import Order from './components/Order'
import Kitchen from './components/Kitchen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil/>
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/orders/:id',
    element: <Order />
  },
  {
    path: '/kitchen',
    element: <Kitchen />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App