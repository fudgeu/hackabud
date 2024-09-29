import styles from './styles.module.css'
import Modal from '../Modal/Modal.tsx'
import Textbox from '../../components/Textbox/Textbox.tsx'
import { FormEvent, useId, useState } from 'react'
import Button from '../../components/Button/Button.tsx'
import EditableList from '../../components/EditableList/EditableList.tsx'
import { Add } from '@mui/icons-material'
import LabelWithButton from '../../components/LabelWithButton/LabelWithButton.tsx'
import Field from '../../components/Field/Field.tsx'
import ListField from '../../components/ListField/ListField.tsx'

export default function CreateIndividualPostModal() {
  const [curStep, setCurStep] = useState(1)

  const [subjectVal, setSubjectVal] = useState('')
  const [schoolVal, setSchoolVal] = useState('')
  const [skillVal, setSkillVal] = useState('')
  const [goalVal, setGoalVal] = useState('')

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

        <Field label="Subject" value={subjectVal} placeholder="Looking to make a game!" required onChange={setSubjectVal} />
        <Field label="School" value={schoolVal} placeholder="College University" onChange={setSchoolVal} />
        <Field label="Skill" value={skillVal} placeholder="Expert" required onChange={setSkillVal} />
        <Field label="Goal" value={goalVal} placeholder="To win!" onChange={setGoalVal} />

        <div className={styles.buttons}>
          <Button type="submit" variant="accent">Next</Button>
        </div>
      </form>
    )
  }

  const renderForm2 = () => {
    return (
      <form className={styles.form} onSubmit={handleSubmitForm2}>
        <ListField label="Websites" values={websiteList} setValues={setWebsiteList} placeholder="URL" />
        <ListField label="Skills" values={skillsList} setValues={setSkillsList} placeholder="Skill" />
        <Field label="More info about yourself" value="" onChange={() => {}} />

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
