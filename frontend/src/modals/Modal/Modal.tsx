import styles from './styles.module.css'
import { ReactNode, useContext } from 'react'
import Button from '../../components/Button/Button.tsx'
import { Close } from '@mui/icons-material'
import { ModalContext } from '../../contexts.ts'

interface ModalProps {
  children: ReactNode | ReactNode[],
}

export default function Modal({ children }: ModalProps) {
  const modalHandler = useContext(ModalContext)

  return (
    <div className={styles.modal}>
      <div className={styles.closeButton}>
        <Button
          startDecorator={<Close />}
          square
          onClick={() => modalHandler.closeModal()}
        />
      </div>
      {children}
    </div>
  )
}
