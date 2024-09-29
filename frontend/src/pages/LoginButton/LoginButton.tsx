import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import Button from '../../components/Button/Button.tsx'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const handleLogin = () => {
    loginWithRedirect()
    navigate('/login')
  }

  if (!isAuthenticated) {
    return (
      <div>
        <Button
          variant="login"
          onClick={() => handleLogin()}
        >
          Log In / Register
        </Button>
      </div>
    )
  }

  return null
}

export default LoginButton
