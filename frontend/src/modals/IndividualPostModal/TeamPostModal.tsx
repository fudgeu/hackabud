import styles from './styles.module.css'
import PostInfo from '../../components/PostInfo/PostInfo.tsx'
import Modal from '../Modal/Modal.tsx'
import Button from '../../components/Button/Button.tsx'
import {HeartBroken, Mail, School, Stars} from '@mui/icons-material'
import Tidbit from '../../components/Tidbit/Tidbit.tsx'

interface TeamPostModalProps {
  name: string,
  subject: string,
  members: number,
  maxMembers: number,
  description: string,
  school: string,
  skillLevel: string,
  memberNames: string[]
}

export default function TeamPostModal({ name, subject, members, maxMembers, description, school, skillLevel, memberNames }: TeamPostModalProps) {
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
          <p className={styles.sectionText}>Description</p>
          <p>{description}</p>

          <p className={styles.sectionText}>Members</p>
          <div className={styles.membersGrid}>
            {members}
          </div>
        </div>
      </div>
    </Modal>
  )
}
