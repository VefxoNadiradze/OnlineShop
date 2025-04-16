import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import { Provider } from 'react-redux'
import { Store } from './redux/store'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import GlobalStyle from './GlobalStyles'
import Products from './pages/Products'
import CurrentItem from './pages/CurrentItem'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'


const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout/>,
     children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/Contact",
          element: <Contact/>
        },
        {
          path: "/About",
          element: <About/>
        },
        {
          path: "/Products/:category",
          element: <Products/>
        },
        {
          path: "/Item/:id",
          element: <CurrentItem/>
        },
        {
          path: "/Cart",
          element: <Cart/>
        },
        {
          path: "/Wishlist",
          element: <Wishlist/>
        }
     ]
   }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <GlobalStyle/>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
