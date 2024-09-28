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
      domain="dev-fonj0d63gm875arj.us.auth0.com"
      clientId="pAgZ0Jkd5QnwNTcD2q6JP7r4E75yGP1L"
      authorizationParams={{ redirect_uri: 'http://localhost:5173/home' }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
)
