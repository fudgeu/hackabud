import styles from './styles.module.css'
import Post from '../../components/Post/Post.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '../../components/Button/Button.tsx'
import IndividualPostModal from '../../modals/IndividualPostModal/IndividualPostModal.tsx'
import IndividualPost from '../../components/IndividualPost/IndividualPost.tsx'
import { useContext } from 'react'
import { ModalContext } from '../../contexts.ts'
import CreatePostChooserModal from '../../modals/CreatePostChooserModal/CreatePostChooserModal.tsx'

export default function Home() {
  const modalHandler = useContext(ModalContext)
  const { user, isLoading, isAuthenticated } = useAuth0()
  const openCreatePostModal = () => {
    modalHandler.setModal(<CreatePostChooserModal />)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          {isAuthenticated
            ? (
                <h2 className={styles.helloText}>
                  Hello,
                  {' '}
                  {user?.name}
                  !
                </h2>
              )
            : (
                <h2 className={styles.helloText}>
                  Hello!
                </h2>
              )}
          <p>Find open teams and individuals below.</p>
        </div>
        <div className={styles.headerRight}>
          {isAuthenticated
            ? (
                <Button variant="accent" onClick={openCreatePostModal}>Create Post</Button>
              )
            : (
                ''
              )}
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
