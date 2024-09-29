import styles from './styles.module.css'
import Modal from '../Modal/Modal.tsx'
import { ReactNode, useState } from 'react'

interface NotificationModalProps {
  notifs: ReactNode[],
}

export default function NotificationModal({ notifs }: NotificationModalProps) {
  const [notifications, setNotifications] = useState<ReactNode[]>([])

  return (
    <Modal>
      <div className={styles.container}>
        <h2>Notifications</h2>

        {notifs.length > 0 && (
          <div className={styles.notificationBox}>
            {notifs}
          </div>
        )}

        {notifs.length === 0 && 'No notifications!'}
      </div>
    </Modal>
  )
}
