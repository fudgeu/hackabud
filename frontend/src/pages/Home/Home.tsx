import styles from './styles.module.css'
import Post from '../../components/Post/Post.tsx'
import Button from '../../components/Button/Button.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.helloText}>Hello, username here!</h2>
          <p>Find open teams and individuals below.</p>
        </div>
        <div className={styles.headerRight}>
          <Button variant="accent">Create Post</Button>
        </div>
      </div>

      <div className={styles.grid}>
        <Post />
        <Post />
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
