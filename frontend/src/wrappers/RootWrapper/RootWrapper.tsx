import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import Button from '../../components/Button/Button.tsx'
import { ModalContext } from '../../contexts.ts'
import { ReactNode, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

import LoginButton from '../../pages/LoginButton/LoginButton.tsx'
import LogoutButton from '../../pages/LogoutButton/LogoutButton.tsx'
import { Code } from '@mui/icons-material'
import SelectEventModal from '../../modals/SelectEventModal/SelectEventModal.tsx'

export default function RootWrapper() {
  const [modalStack, setModalStack] = useState<ReactNode[]>([])
  const [curEventName, setCurEventName] = useState('Shellhacks 2024')

  // Authentication stuffs
  const { user, isLoading, isAuthenticated } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      console.log('Authenticated!')
    } else {
      console.log('Not Authenticated!')
    }
  }, [isAuthenticated])

  return (
    <ModalContext.Provider value={{
      setModal: (newModal) => setModalStack((prev) => [...prev, newModal]),
      closeModal: () => setModalStack((prev) => prev.slice(0, prev.length - 1)),
    }}>
      <div>
        <header className={styles.header}>
          <h1>HackaBud</h1>

          <div className={styles.hackathonPicker}>
            <Button
              variant="outlined"
              startDecorator={<Code />}
              onClick={() => setModalStack([...modalStack, <SelectEventModal />])}
            >
              {curEventName}
            </Button>
          </div>

          <div>
            <div className={styles.userInfo}>
              {isAuthenticated
                ? <img src={user?.picture} alt="Profile" />
                : ''}
            </div>

            <div className={styles.userSettings}>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </div>
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
