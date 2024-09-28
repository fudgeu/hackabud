import styles from './styles.module.css'
import Post from '../../components/Post/Post.tsx'
import Button from '../../components/Button/Button.tsx'
import IndividualPostModal from '../../modals/IndividualPostModal/IndividualPostModal.tsx'
import IndividualPost from '../../components/IndividualPost/IndividualPost.tsx'
import { useContext } from 'react'
import { ModalContext } from '../../contexts.ts'
import CreatePostModal from '../../modals/CreatePostModal/CreatePostModal.tsx'

export default function Home() {
  const modalHandler = useContext(ModalContext)

  const openCreatePostModal = () => {
    modalHandler.setModal(<CreatePostModal />)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.helloText}>Hello, username here!</h2>
          <p>Find open teams and individuals below.</p>
        </div>
        <div className={styles.headerRight}>
          <Button variant="accent" onClick={openCreatePostModal}>Create Post</Button>
        </div>
      </div>

      <div className={styles.grid}>
        <Post modal={<IndividualPostModal />} />
        <IndividualPost />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
