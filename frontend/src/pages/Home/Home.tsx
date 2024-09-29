import styles from './styles.module.css'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '../../components/Button/Button.tsx'
import FormattedPost from '../../components/FormattedPost/FormattedPost.tsx'
import { useContext } from 'react'
import { ModalContext, SessionContext } from '../../contexts.ts'
import CreatePostChooserModal from '../../modals/CreatePostChooserModal/CreatePostChooserModal.tsx'

export default function Home() {
  const { user, isLoading, isAuthenticated } = useAuth0()

  const modalHandler = useContext(ModalContext)
  const session = useContext(SessionContext)

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

      <div className={session.posts.length === 0 ? '' : styles.grid}>
        {session.posts.map((post) => (
          <FormattedPost post={post} />
        ))}

        {session.posts.length === 0 && (
          <div className={styles.noPosts}>
            <p style={{ fontWeight: 'bold' }}>There are no posts</p>
            <p style={{ color: 'var(--gray-text)' }}>Be the first to create one!</p>
          </div>
        )}
      </div>
    </div>
  )
}
