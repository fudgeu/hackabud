import styles from './styles.module.css'
import Tidbit from '../Tidbit/Tidbit.tsx'
import {Group, OpenInFull, Person} from '@mui/icons-material'
import { ReactNode } from 'react'

interface PostInfoProps {
  name: string,
  subject: string,
  members: number,
  maxMembers: number,
  tidbits: ReactNode | ReactNode[],
  buttons?: ReactNode | ReactNode[],
}

export default function PostInfo({ name, subject, buttons, members, maxMembers, tidbits }: PostInfoProps) {
  return (
    <div className={styles.header}>
      {/* Left side */}
      <div className={styles.headerLeft}>
        <div className={styles.profileIcons}>
          {members <= 1 ? <Person /> : <Group />}
        </div>

        <div className={styles.headerText}>
          <h3>{name}</h3>
          <h4>{subject}</h4>
          <div className={styles.tidbits}>
            <Tidbit icon={members === 1 ? <Person /> : <Group />}>
              {members === 1 ? 'Individual' : `${members}/${maxMembers} members`}
            </Tidbit>
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
