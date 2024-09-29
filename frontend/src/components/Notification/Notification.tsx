import styles from './styles.module.css'
import Button from '../Button/Button.tsx'

interface NotificationProps {
  title: string,
  description: string,
  buttonLabel: string,
  onClick: () => void,
}

export default function Notification({ title, description, buttonLabel, onClick }: NotificationProps) {
  return (
    <div className={styles.notification}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.buttons}>
        <Button variant="accent">
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}
