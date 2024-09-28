import Modal from '../Modal/Modal.tsx'
import styles from '../CreateIndividualPostModal/styles.module.css'
import { useState } from 'react'

export default function CreateTeamPostModal() {
  const [curStep, setCurStep] = useState(1)

  const renderForm1 = () => {

  }

  const renderForm2 = () => {

  }

  return (
    <Modal>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Create Post</h2>
          <p>I'm in a team and am looking for members!</p>
        </div>

        {(() => {
          if (curStep === 1) {
            return renderForm1()
          } else if (curStep === 2) {
            return renderForm2()
          }
        })()}
      </div>
    </Modal>
  )
}
