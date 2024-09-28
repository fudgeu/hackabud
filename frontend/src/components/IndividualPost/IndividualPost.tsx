import styles from './styles.module.css'
import Post from '../Post/Post.tsx'
import IndividualPostModal from '../../modals/IndividualPostModal/IndividualPostModal.tsx'
import Tidbit from '../Tidbit/Tidbit.tsx'
import {School, Stars} from '@mui/icons-material'
import BulletedList from "../BulletedList/BulletedList.tsx";

export default function IndividualPost() {
  return (
    <Post
      modal={<IndividualPostModal />}
      tidbits={[
        <Tidbit icon={<School />}>UCF</Tidbit>,
        <Tidbit icon={<Stars />}>Beginner</Tidbit>,
      ]}
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
        <BulletedList
          label="Skills"
          points={[
            'React',
            'Typescript',
            'Java',
            'Springboot',
          ]}
        />
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
