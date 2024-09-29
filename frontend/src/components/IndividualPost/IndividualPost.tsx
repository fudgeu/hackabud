import styles from './styles.module.css'
import Post from '../Post/Post.tsx'
import IndividualPostModal from '../../modals/IndividualPostModal/IndividualPostModal.tsx'
import Tidbit from '../Tidbit/Tidbit.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import { HeartBroken, School, Stars } from '@mui/icons-material'
import BulletedList from '../BulletedList/BulletedList.tsx'
import Button from '../Button/Button.tsx'
import { useEffect, useState } from 'react'

interface IndividualPostProps {
  post: Post,
}

export default function IndividualPost({ post }: IndividualPostProps) {
  const { user, isLoading, isAuthenticated } = useAuth0()
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setSubject(post.subject)
    setDescription(post.body)
  }, [post])

  return (
    <Post
      name={name}
      subject={subject}
      modal={<IndividualPostModal />}
      tidbits={[
        <Tidbit icon={<School />}>UCF</Tidbit>,
        <Tidbit icon={<Stars />}>Beginner</Tidbit>,
      ]}
      hoverButtons={
        isAuthenticated && <Button variant="accent" startDecorator={<HeartBroken />}>Match!</Button>
      }
    >
      <div className={styles.postContent}>
        <BulletedList
          label="Skills"
          points={[
            'React',
            'Typescript',
            'Java',
            'Springboot',
          ]}
        />
      </div>
    </Post>
  )
}
