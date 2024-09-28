import styles from './styles.module.css'
import { ReactNode } from 'react'
import Button from "../../components/Button/Button.tsx";
import {Close} from "@mui/icons-material";

interface ModalProps {
  children: ReactNode | ReactNode[],
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.closeButton}>
        <Button startDecorator={<Close />} />
      </div>
      {children}
    </div>
  )
}
