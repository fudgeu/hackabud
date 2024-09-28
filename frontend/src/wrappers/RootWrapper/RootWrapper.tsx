import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import Button from '../../components/Button/Button.tsx'
import { ModalContext } from '../../contexts.ts'
import { ReactNode, useState } from 'react'

export default function RootWrapper() {
  const [modalStack, setModalStack] = useState<ReactNode[]>([])

  return (
    <ModalContext.Provider value={{
      setModal: (newModal) => setModalStack((prev) => [...prev, newModal]),
      closeModal: () => setModalStack((prev) => prev.slice(0, prev.length - 1)),
    }}>
      <div>
        <header className={styles.header}>
          <h1>Hackabud</h1>

          <div className={styles.hackathonPicker}>
            <Button variant="accent">Hackathon Picker</Button>
          </div>

          <div className={styles.userSettings}>
            User Settings go here
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
