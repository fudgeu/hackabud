import styles from './styles.module.css'
import PostInfo from '../../components/PostInfo/PostInfo.tsx'
import Modal from '../Modal/Modal.tsx'
import Button from '../../components/Button/Button.tsx'
import { HeartBroken } from '@mui/icons-material'

export default function IndividualPostModal() {
  return (
    <Modal>
      <div className={styles.container}>
        <PostInfo />

        <div className={styles.content}>
          <p className={styles.sectionText}>Description</p>
          <p>Blah blah sdfsd fasdflkasdjf klasflk jasdlkfjsdkljf lksdjfkljsdkfjlkfjsdklf sdklfjlkjd jfsdkfj sdf sdfsdjfksf</p>
        </div>

        <div className={styles.buttons}>
          <Button startDecorator={<HeartBroken />} variant="accent">Match!</Button>
        </div>
      </div>
    </Modal>
  )
}
