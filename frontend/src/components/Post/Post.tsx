import styles from './styles.module.css'
import Tidbit from '../Tidbit/Tidbit.tsx'
import { Group, OpenInFull } from '@mui/icons-material'
import Button from '../Button/Button.tsx'
import { ReactNode, useContext } from 'react'
import { ModalContext } from '../../contexts.ts'

interface PostProps {
  modal: ReactNode,
}

export default function Post({ modal }: PostProps) {
  const modalHandler = useContext(ModalContext)

  const onExpand = () => {
    modalHandler.setModal(modal)
  }

  return (
    <div className={styles.container}>
      {/* Header */}
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
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className={styles.headerRight}>
          <Button
            startDecorator={<OpenInFull />}
            onClick={onExpand}
          />
        </div>
      </div>
    </div>
  )
}
