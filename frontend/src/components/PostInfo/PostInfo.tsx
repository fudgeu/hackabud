import styles from './styles.module.css'
import Tidbit from '../Tidbit/Tidbit.tsx'
import {Group, OpenInFull, Person} from '@mui/icons-material'
import { ReactNode } from 'react'

interface PostInfoProps {
  name: string,
  subject: string,
  tidbits: ReactNode | ReactNode[],
  buttons?: ReactNode | ReactNode[],
}

export default function PostInfo({ name, subject, buttons, tidbits }: PostInfoProps) {
  return (
    <div className={styles.header}>
      {/* Left side */}
      <div className={styles.headerLeft}>
        <div className={styles.profileIcons}>
          <Person />
        </div>

        <div className={styles.headerText}>
          <h3>{name}</h3>
          <h4>{subject}</h4>
          <div className={styles.tidbits}>
            <Tidbit icon={<Group />}>1/4 members</Tidbit>
            {tidbits}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className={styles.headerRight}>
        {buttons}
      </div>
    </div>
  )
}
