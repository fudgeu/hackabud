import styles from './styles.module.css'
import { ReactNode } from 'react'
import { SvgIconComponent } from '@mui/icons-material'

interface TidbitProps {
  icon: ReactNode,
  children: ReactNode | ReactNode[],
}

export default function Tidbit({ icon, children }: TidbitProps) {
  return (
    <div className={styles.tidbit}>
      {icon}
      {children}
    </div>
  )
}
