import styles from './styles.module.css'
import Modal from '../Modal/Modal.tsx'
import Textbox from '../../components/Textbox/Textbox.tsx'
import { FormEvent, useId, useState } from 'react'
import Button from '../../components/Button/Button.tsx'
import EditableList from '../../components/EditableList/EditableList.tsx'
import { Add } from '@mui/icons-material'
import LabelWithButton from '../../components/LabelWithButton/LabelWithButton.tsx'

export default function CreateIndividualPostModal() {
  const [curStep, setCurStep] = useState(1)

  const subjectId = useId()
  const schoolId = useId()
  const skillId = useId()
  const goalId = useId()
  const descriptionId = useId()

  const [websiteList, setWebsiteList] = useState<string[]>([''])
  const [skillsList, setSkillsList] = useState<string[]>([''])

  const handleSubmitForm1 = (e: FormEvent) => {
    e.preventDefault()
    setCurStep(2)
  }

  const handleSubmitForm2 = (e: FormEvent) => {
    e.preventDefault()
  }

  const renderForm1 = () => {
    return (
      <form className={styles.form} onSubmit={handleSubmitForm1}>
        <div className={styles.formField}>
          <p>Name</p>
          Your name here
        </div>

        <div className={styles.formField}>
          <label htmlFor={subjectId}>Subject</label>
          <Textbox required id={subjectId} placeholder="Looking to make a game!" />
        </div>

        <div className={styles.formField}>
          <label htmlFor={schoolId}>School</label>
          <Textbox id={schoolId} placeholder="College University"/>
        </div>

        <div className={styles.formField}>
          <label htmlFor={skillId}>Skill</label>
          <Textbox required id={skillId} placeholder="Expert" />
        </div>

        <div className={styles.formField}>
          <label htmlFor={skillId}>Goal</label>
          <Textbox required id={goalId} placeholder="To gain experience" />
        </div>

        <div className={styles.buttons}>
          <Button type="submit" variant="accent">Next</Button>
        </div>
      </form>
    )
  }

  const renderForm2 = () => {
    return (
      <form className={styles.form} onSubmit={handleSubmitForm2}>
        <div className={styles.formField}>
          <LabelWithButton
            buttonLabel="Add new"
            buttonIcon={<Add />}
            onClick={() => setWebsiteList([...websiteList, ''])}
          >
            Websites
          </LabelWithButton>
          <EditableList values={websiteList} updateValues={setWebsiteList} placeholder="URL" />
        </div>

        <div className={styles.formField}>
          <LabelWithButton
            buttonLabel="Add new"
            buttonIcon={<Add />}
            onClick={() => setSkillsList([...skillsList, ''])}
          >
            Skills
          </LabelWithButton>
          <EditableList values={skillsList} updateValues={setSkillsList} placeholder="Skill" />
        </div>

        <div className={styles.formField}>
          <label htmlFor={descriptionId}>More info about yourself</label>
          <Textbox id={descriptionId} />
        </div>

        <div className={styles.buttons}>
          <Button type="button" variant="plain" onClick={() => setCurStep(1)}>Go back</Button>
          <Button type="submit" variant="accent">Post</Button>
        </div>
      </form>
    )
  }

  return (
    <Modal>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Create Post</h2>
          <p>I'm looking for a team!</p>
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
