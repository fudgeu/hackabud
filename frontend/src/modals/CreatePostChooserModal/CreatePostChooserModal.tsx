import styles from './styles.module.css'
import { ReactNode, useContext } from 'react'
import Modal from '../Modal/Modal.tsx'
import { Group, Person } from '@mui/icons-material'
import { ModalContext } from '../../contexts.ts'
import CreateIndividualPostModal from '../CreateModals/CreateIndividualPostModal.tsx'
import CreateTeamPostModal from '../CreateModals/CreateTeamPostModal.tsx'

interface OptionProps {
  icon: ReactNode,
  title: string,
  description: string,
  onClick: () => void,
}

function Option({ icon, title, description, onClick }: OptionProps) {
  return (
    <button className={styles.option} onClick={onClick}>
      {icon}
      <div className={styles.optionText}>
        <span className={styles.title}>
          {title}
        </span>
        <span className={styles.description}>
          {description}
        </span>
      </div>
    </button>
  )
}

export default function CreatePostChooserModal() {
  const modalHandler = useContext(ModalContext)

  return (
    <Modal>
      <div className={styles.container}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Create Post</h2>
          <p>What type of post do you want to make?</p>
        </div>

        <Option
          icon={<Person />}
          title="I'm an individual"
          description="I am looking for a team"
          onClick={() => modalHandler.setModal(<CreateIndividualPostModal />)}
        />

        <Option
          icon={<Group />}
          title="I'm part of a team"
          description="We are looking for more members"
          onClick={() => modalHandler.setModal(<CreateTeamPostModal />)}
        />
      </div>
    </Modal>
  )
}
