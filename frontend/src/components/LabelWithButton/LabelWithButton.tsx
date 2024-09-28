import styles from './styles.module.css'
import Button from '../Button/Button.tsx'
import { ReactNode } from 'react'

interface LabelWithButtonProps {
  htmlFor?: string,
  buttonIcon: ReactNode,
  buttonLabel: string,
  onClick: () => void,
  children: ReactNode,
}

export default function LabelWithButton({ htmlFor, buttonIcon, buttonLabel, onClick, children }: LabelWithButtonProps) {
  return (
    <div className={styles.labelWithButton}>
      <label htmlFor={htmlFor}>{children}</label>
      <Button
        variant="plain"
        size="small"
        startDecorator={buttonIcon}
        onClick={onClick}
      >
        {buttonLabel}
      </Button>
    </div>
  )
}
