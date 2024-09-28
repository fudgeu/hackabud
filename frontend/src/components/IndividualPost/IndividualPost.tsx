import styles from './styles.module.css'
import Post from '../Post/Post.tsx'
import IndividualPostModal from '../../modals/IndividualPostModal/IndividualPostModal.tsx'
import Tidbit from '../Tidbit/Tidbit.tsx'
import { HeartBroken, School, Stars } from '@mui/icons-material'
import BulletedList from '../BulletedList/BulletedList.tsx'
import Button from '../Button/Button.tsx'

export default function IndividualPost() {
  return (
    <Post
      modal={<IndividualPostModal />}
      tidbits={[
        <Tidbit icon={<School />}>UCF</Tidbit>,
        <Tidbit icon={<Stars />}>Beginner</Tidbit>,
      ]}
      hoverButtons={
        <Button variant="accent" startDecorator={<HeartBroken />}>Match!</Button>
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
