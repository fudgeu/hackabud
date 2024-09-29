import styles from './styles.module.css'
import {Outlet, useLocation} from 'react-router-dom'
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
import { useNavigate } from 'react-router-dom'

export default function RootWrapper() {
  const [userId, setUserId] = useState(-1)
  const [modalStack, setModalStack] = useState<ReactNode[]>([])
  const [eventId, setEventId] = useState(-1)
  const [eventName, setEventName] = useState('Shellhacks 2024')
  const [eventMaxMembers, setEventMaxMembers] = useState(0)

  const [posts, setPosts] = useState<Post[]>([])
  const [reloadQueued, setReloadQueued] = useState(false)
  const [notifs, setNotifs] = useState<ReactNode[]>([])

  const navigate = useNavigate()
  const location = useLocation()
  const isRegistering = location.pathname === '/register'

  const isInTeam = false
  const teamId = -1

  // const [notifs, setNotifs] = useState<ReactNode[]>([
  //   <Notification title="You were invited!" description="Team X invited you to join their team." buttonLabel="Join!" onClick={() => {}} />,
  //   <Notification title="You were invited!" description="Team X invited you to join their team." buttonLabel="Join!" onClick={() => {}} />,
  //   <Notification title="You were invited!" description="Team X invited you to join their team." buttonLabel="Join!" onClick={() => {}} />,
  // ])

  // Authentication stuffs
  const { user, isLoading, isAuthenticated } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      console.log('Authenticated!')
      // Check if user need to be registered first
      if (!user) return
      console.log('Checking if registration complete...')
      fetch(`${URL}/oauth`, {
        method: 'POST',
        body: JSON.stringify({ OAuthId: user.sub }),
        headers: { 'Content-Type': 'application/json' },
      }).then((raw) => raw.json().then((res) => {
        console.log(res)
        if (!res?.id) {
          navigate('/register')
          return
        }
        setUserId(res.id)
      }))
    } else {
      console.log('Not Authenticated!')
    }
  }, [isAuthenticated, navigate, user?.sub])

  const handleSignUp = () => {
    navigate('/register')
  }

  // Load event
  useEffect(() => {
    fetch(`${URL}/sec/event/${eventId}/posts`)
      .then((raw) => raw.json().then((res) => {
        if (res?.status === 404) return
        setPosts(res)
      }))

    fetch(`${URL}/sec/event/${eventId}`, { credentials: 'include' })
      .then((raw) => raw.json().then((res) => {
        if (res?.status === 404) return
        setEventName(res.name)
        setEventMaxMembers(res.teamSize)
      }))

    setReloadQueued(false)
  }, [eventId, reloadQueued])

  const loadNotifs = () => {
    fetch(`${URL}/notif/${1}`)
      .then((raw) => raw.json().then((res: NotificationJson[]) => {
        if (res?.status === 404) return
        notifs.map((notif) => {
          fetch(`${URL}/invite/${notif.invitationId}`)
            .then((raw2) => raw2.json().then((res2: InviteJson) => {
              fetch(`${URL}/team/${res2.fromTeamId}`)
                .then((raw3) => raw3.json().then((res3: TeamJson) => {
                  const renderedNotif = (
                    <Notification
                      title="You got an invite!"
                      description={`You received an invite from ${res3.id}. Click below to join.`}
                      buttonLabel="Join team"
                      onClick={() => {
                      }}
                    />
                  )

                  setNotifs([...notifs, renderedNotif])
                }))
            }))
        })
      }))
  }

  useEffect(() => {
    loadNotifs()
  }, [])

  return (
    <ModalContext.Provider value={{
      setModal: (newModal) => setModalStack((prev) => [...prev, newModal]),
      closeModal: () => setModalStack((prev) => prev.slice(0, prev.length - 1)),
    }}>
      <SessionContext.Provider
        value={{
          eventId,
          eventName,
          eventMaxMembers,
          userId,
          isInTeam,
          teamId,
          posts,
          reload: () => setReloadQueued(true),
          setEventId: (id: number) => setEventId(id),
        }}
      >
        <div>
          <header className={styles.header}>
            <h1>HackaBud</h1>

            <div className={styles.buttons}>
              {!isRegistering && (
                <Button
                  variant="outlined"
                  startDecorator={<Code />}
                  onClick={() => setModalStack([...modalStack, <SelectEventModal />])}
                >
                  {eventName}
                </Button>
              )}
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
