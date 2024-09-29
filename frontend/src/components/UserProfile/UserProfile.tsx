import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useState } from 'react'
import LogoutButton from '../../pages/LogoutButton/LogoutButton.tsx'

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0()
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  if (isAuthenticated) {
    return (
      <div className={styles.userInfo}>
        {isAuthenticated
          ? (
              <>
                <img
                  src={user?.picture}
                  alt="Profile"
                  onClick={toggleDropdown}
                  className={styles.profileImage}
                />
                {isDropdownOpen && (
                  <div className={styles.dropdown}>
                    <ul>
                      <li>Profile Settings</li>
                      <LogoutButton />
                    </ul>
                  </div>
                )}
              </>
            )
          : ('')}
      </div>
    )
  }

  return null
}

export default UserProfile
