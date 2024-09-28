import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import Button from '../../components/Button/Button.tsx'

export default function RootWrapper() {
  return (
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
    </div>
  )
}
