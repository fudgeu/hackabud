import styles from './styles.module.css'
import PostInfo from '../../components/PostInfo/PostInfo.tsx'
import Modal from '../Modal/Modal.tsx'

export default function IndividualPostModal() {
  return (
    <Modal>
      <PostInfo />
    </Modal>
  )
}
