import { useAuth0 } from '@auth0/auth0-react'
import { useAuth } from '../AuthContext/AuthContext.tsx'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()

  const handleLogin = () => {
    logout({ returnTo: window.location.origin })
  }

  if (!isAuthenticated) {
    return (
      <div className="center-button">
        <button
          className="btn btn-primary logoutBtn"
          onClick={() => handleLogin()}
        >
          Log Out
        </button>
      </div>
    )
  }

  return null
}

export default LogoutButton
