import styles from './styles.module.css'
import Tidbit from '../Tidbit/Tidbit.tsx'
import { Group } from '@mui/icons-material'

export default function Post() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profileIcons}>
          [icon]
        </div>

        <div className={styles.headerText}>
          <h3>Some dude</h3>
          <h4>Looking for 2 more!</h4>
          <div className={styles.tidbits}>
            <Tidbit icon={<Group />}>1/4 members</Tidbit>
          </div>
        </div>
      </div>
    </div>
  )
}
