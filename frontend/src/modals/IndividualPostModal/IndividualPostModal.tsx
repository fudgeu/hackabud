import styles from './styles.module.css'
import PostInfo from '../../components/PostInfo/PostInfo.tsx'
import Modal from '../Modal/Modal.tsx'
import Button from '../../components/Button/Button.tsx'
import { HeartBroken, OpenInFull, School, Stars } from '@mui/icons-material'
import Tidbit from '../../components/Tidbit/Tidbit.tsx'

interface IndividualPostModalProps {
  name: string,
  subject: string,
  members: number,
  maxMembers: number,
  description: string,
  school: string,
  skillLevel: string,
}

export default function IndividualPostModal({ name, subject, members, maxMembers, description, school, skillLevel }: IndividualPostModalProps) {
  return (
    <Modal>
      <div className={styles.container}>
        <PostInfo
          name={name}
          subject={subject}
          tidbits={[
            <Tidbit icon={<School />}>{school}</Tidbit>,
            <Tidbit icon={<Stars />}>{skillLevel}</Tidbit>,
          ]}
          members={members}
          maxMembers={maxMembers}
        />

        <div className={styles.content}>
          <div className={styles.z}>
            <p className={styles.sectionText}>Description</p>
            <p>{description}</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button startDecorator={<HeartBroken/>} variant="accent">Invite!</Button>
        </div>
      </div>
    </Modal>
  )
}
