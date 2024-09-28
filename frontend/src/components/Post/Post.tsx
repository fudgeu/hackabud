import styles from './styles.module.css'
import Tidbit from '../Tidbit/Tidbit.tsx'
import { Group, OpenInFull } from '@mui/icons-material'
import Button from '../Button/Button.tsx'
import { ReactNode, useContext } from 'react'
import { ModalContext } from '../../contexts.ts'
import PostInfo from '../PostInfo/PostInfo.tsx';

interface PostProps {
  modal: ReactNode,
  tidbits: ReactNode | ReactNode[],
  children: ReactNode | ReactNode[],
}

export default function Post({ tidbits, modal, children }: PostProps) {
  const modalHandler = useContext(ModalContext)

  const onExpand = () => {
    modalHandler.setModal(modal)
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <PostInfo
        tidbits={tidbits}
        buttons={<Button square startDecorator={<OpenInFull />} onClick={onExpand} />}
      />

      {children}
    </div>
  )
}
