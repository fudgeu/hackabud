import { useAuth0 } from '@auth0/auth0-react'
import styles from './styles.module.css'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()

  const handleLogin = () => {
    logout({ returnTo: 'http://localhost:5173/home' })
  }

  if (isAuthenticated) {
    return (
      <>
        <li onClick={() => handleLogin()}>Log Out</li>
      </>
    )
  }

  return null
}

export default LogoutButton
