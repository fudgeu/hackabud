import styles from './styles.module.css'
import Tidbit from '../Tidbit/Tidbit.tsx'
import { Group, OpenInFull } from '@mui/icons-material'
import Button from '../Button/Button.tsx'
import { ReactNode } from 'react'

interface PostInfoProps {
  tidbits: ReactNode | ReactNode[],
  buttons?: ReactNode | ReactNode[],
}

export default function PostInfo({ buttons, tidbits }: PostInfoProps) {
  return (
    <div className={styles.header}>
      {/* Left side */}
      <div className={styles.headerLeft}>
        <div className={styles.profileIcons}>
          [icon]
        </div>

        <div className={styles.headerText}>
          <h3>Some dude</h3>
          <h4>Looking for 2 more!</h4>
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
