import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const handleLogin = () => {
    loginWithRedirect()
    navigate('/login')
  }

  if (!isAuthenticated) {
    return (
      <div className="center-button">
        <button
          className="btn btn-primary loginBtn"
          onClick={() => handleLogin()}
        >
          Log In
        </button>
      </div>
    )
  }

  return null
}

export default LoginButton
