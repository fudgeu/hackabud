import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootWrapper from './wrappers/RootWrapper/RootWrapper.tsx'
import Home from './pages/Home/Home.tsx'
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootWrapper />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-xwer71pzdtvuk22b.us.auth0.com"
      clientId="H2olDrViN6O05UXnrzH5mmqakC9eAzYZ"
      authorizationParams={{ redirect_uri: 'https://hackabud.k-puig.com/home' }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
)
