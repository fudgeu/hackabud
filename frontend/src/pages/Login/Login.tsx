import { useAuth0 } from '@auth0/auth0-react'
import styles from './styles.module.css'

export default function Login() {
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      {isAuthenticated}
    </div>
  )
}
