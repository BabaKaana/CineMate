import Home from './pages/Home'
import Favourites from './pages/Favourites'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import './css/App.css'
import { MovieProvider } from './context/MovieContext'

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'favourites', element: <Favourites /> }
    ]
  }
])

function App() {

  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  )
}

export default App
