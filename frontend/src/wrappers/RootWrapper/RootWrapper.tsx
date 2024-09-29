import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import Button from '../../components/Button/Button.tsx'
import { ModalContext, SessionContext } from '../../contexts.ts'
import { ReactNode, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../../pages/LoginButton/LoginButton.tsx'
import { Add, Code, Notifications } from '@mui/icons-material'
import SelectEventModal from '../../modals/SelectEventModal/SelectEventModal.tsx'
import CreateEventModal from '../../modals/CreateModals/CreateEventModal.tsx'
import UserProfile from '../../components/UserProfile/UserProfile.tsx'
import NotificationModal from '../../modals/NotificationModal/NotificationModal.tsx'
import Notification from '../../components/Notification/Notification.tsx'
import { URL } from '../../util.ts'

export default function RootWrapper() {
  const [modalStack, setModalStack] = useState<ReactNode[]>([])
  const [eventId, setEventId] = useState(-1)
  const [eventName, setEventName] = useState('Shellhacks 2024')

  const [posts, setPosts] = useState<Post[]>([])
  const [reloadQueued, setReloadQueued] = useState(false)

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

  // Load event
  useEffect(() => {
    fetch(`${URL}/event/${eventId}/posts`)
      .then((raw) => raw.json().then((res) => {
        if (res?.status === 404) return
        setPosts(res)
      }))

    fetch(`${URL}/event/${eventId}`)
      .then((raw) => raw.json().then((res) => {
        if (res?.status === 404) return
        setEventName(res.name)
      }))

    setReloadQueued(false)
  }, [eventId, reloadQueued])

  return (
    <ModalContext.Provider value={{
      setModal: (newModal) => setModalStack((prev) => [...prev, newModal]),
      closeModal: () => setModalStack((prev) => prev.slice(0, prev.length - 1)),
    }}>
      <SessionContext.Provider
        value={{
          eventId,
          eventName,
          posts,
          reload: () => setReloadQueued(true),
          setEventId: (id: number) => setEventId(id),
        }}
      >
        <div>
          <header className={styles.header}>
            <h1>HackaBud</h1>

            <div className={styles.buttons}>
              <Button
                variant="outlined"
                startDecorator={<Code />}
                onClick={() => setModalStack([...modalStack, <SelectEventModal />])}
              >
                {eventName}
              </Button>
              {isAuthenticated && (
                <Button
                  variant="plain"
                  square
                  startDecorator={<Add />}
                  onClick={() => setModalStack([...modalStack, <CreateEventModal setSelectedEvent={setEventId} />])}
                />
              )}
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
                  onClick={() => handleLogin()}
                >
                  Sign Up
                </Button>
              )}
            </div>

          </header>
          <main className={styles.content}>
            <Outlet />
          </main>

          {/* Modal */}
          {modalStack.length > 0 && (
            <div className={styles.modalBackground}>
              {modalStack[modalStack.length - 1]}
            </div>
          )}
        </div>
      </SessionContext.Provider>
    </ModalContext.Provider>
  )
}
