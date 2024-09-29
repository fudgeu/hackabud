import styles from './styles.module.css'
import Modal from '../Modal/Modal.tsx'
import Button from '../../components/Button/Button.tsx'

interface InfoModalProps {
  title: string,
  description: string,
  buttonText: string,
  onClick: () => void,
}

export default function InfoModal({ title, description, buttonText, onClick }: InfoModalProps) {
  return (
    <Modal>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.button}>
          <Button variant="accent" onClick={onClick}>{buttonText}</Button>
        </div>
      </div>
    </Modal>
  )
}
