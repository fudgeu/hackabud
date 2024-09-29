import styles from './styles.module.css'
import { Group, OpenInFull } from '@mui/icons-material'
import Button from '../Button/Button.tsx'
import { ReactNode, useContext, useState } from 'react'
import { ModalContext } from '../../contexts.ts'
import PostInfo from '../PostInfo/PostInfo.tsx'

interface PostProps {
  modal: ReactNode,
  name: string,
  subject: string,
  tidbits: ReactNode | ReactNode[],
  hoverButtons?: ReactNode | ReactNode[],
  children: ReactNode | ReactNode[],
}

export default function Post({ name, subject, tidbits, modal, hoverButtons = [], children }: PostProps) {
  const [isHovered, setIsHovered] = useState(false)

  const modalHandler = useContext(ModalContext)

  const onExpand = () => {
    modalHandler.setModal(modal)
  }

  return (
    <div
      className={styles.container}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <PostInfo
        name={name}
        subject={subject}
        tidbits={tidbits}
        buttons={<Button square startDecorator={<OpenInFull />} onClick={onExpand} />}
      />

      {children}

      {/* Hover buttons */}
      {isHovered && (
        <div className={styles.hoverButtonsBackground}>
          {hoverButtons}
        </div>
      )}
    </div>
  )
}
