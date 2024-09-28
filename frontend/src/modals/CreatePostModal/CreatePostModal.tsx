import styles from './styles.module.css'
import { ReactNode } from 'react'
import Modal from '../Modal/Modal.tsx'

interface OptionProps {
  icon: ReactNode,
  title: string,
  description: string,
}

function Option({ icon, title, description }: OptionProps) {
  return (
    <button className={styles.option}>
      {icon}
      <div className={styles.optionText}>
        <span className={styles.title}>
          {title}
        </span>
        <span className={styles.description}>
          {description}
        </span>
      </div>
    </button>
  )
}

export default function CreatePostModal() {
  return (
    <Modal>
      <h2>Create Post</h2>
      <p>What type of post do you want to make?</p>

      <Option
        icon={<p>test</p>}
        title="I'm an individual"
        description=""
      />

      <Option
        icon={<p>test</p>}
        title="I'm part of a team"
        description=""
      />
    </Modal>
  )
}
