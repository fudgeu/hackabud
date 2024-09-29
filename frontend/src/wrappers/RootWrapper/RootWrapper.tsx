import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import Button from '../../components/Button/Button.tsx'
import { ModalContext } from '../../contexts.ts'
import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

import LoginButton from '../../pages/LoginButton/LoginButton.tsx'
import { Add, Code, Notifications } from '@mui/icons-material'
import SelectEventModal from '../../modals/SelectEventModal/SelectEventModal.tsx'
import CreateEventModal from '../../modals/CreateModals/CreateEventModal.tsx'
import UserProfile from '../../components/UserProfile/UserProfile.tsx'
import NotificationModal from '../../modals/NotificationModal/NotificationModal.tsx'
import Notification from '../../components/Notification/Notification.tsx'

export default function RootWrapper() {
  const [modalStack, setModalStack] = useState<ReactNode[]>([])
  const [curEventName, setCurEventName] = useState('Shellhacks 2024')
  const navigate = useNavigate()

  const [notifs, setNotifs] = useState<ReactNode[]>([
    <Notification title="You were invited!" description="Team X invited you to join their team." buttonLabel="Join!" onClick={() => {}} />,
    <Notification title="You were invited!" description="Team X invited you to join their team." buttonLabel="Join!" onClick={() => {}} />,
    <Notification title="You were invited!" description="Team X invited you to join their team." buttonLabel="Join!" onClick={() => {}} />,
  ])

  // Authentication stuffs
  const { user, isLoading, isAuthenticated } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      console.log('Authenticated!')
    } else {
      console.log('Not Authenticated!')
    }
  }, [isAuthenticated])

  const handleSignUp = () => {
    navigate('/register')
  }

  return (
    <ModalContext.Provider value={{
      setModal: (newModal) => setModalStack((prev) => [...prev, newModal]),
      closeModal: () => setModalStack((prev) => prev.slice(0, prev.length - 1)),
    }}>
      <div>
        <header className={styles.header}>
          <h1>HackaBud</h1>

          <div className={styles.buttons}>
            <Button
              variant="outlined"
              startDecorator={<Code />}
              onClick={() => setModalStack([...modalStack, <SelectEventModal />])}
            >
              {curEventName}
            </Button>
            <Button
              variant="plain"
              square
              startDecorator={<Add />}
              onClick={() => setModalStack([...modalStack, <CreateEventModal />])}
            />
          </div>

          <div className={styles.buttons}>
            {isAuthenticated
              ? (
                  <Button
                    varient="plain"
                    startDecorator={<Notifications />}
                    onClick={() => setModalStack([...modalStack, <NotificationModal notifs={notifs} />])}
                  />
                )
              : ''}
            {isAuthenticated ? <UserProfile /> : <LoginButton />}
            {!isAuthenticated && (
              <Button
                variant="login"
                onClick={() => handleSignUp()}
              >
                Sign Up
              </Button>
            )}
          </div>

        </header>
        <main className={styles.content}>
          <Outlet />
        </main>

        {/*  Modal */}
        {modalStack.length > 0 && (
          <div className={styles.modalBackground}>
            {modalStack[modalStack.length - 1]}
          </div>
        )}
      </div>
    </ModalContext.Provider>
  )
}
