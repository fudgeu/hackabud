import Modal from '../Modal/Modal.tsx'
import styles from './styles.module.css'
import { FormEvent, useContext, useState } from 'react'
import Field from '../../components/Field/Field.tsx'
import Button from '../../components/Button/Button.tsx'
import ListField from '../../components/ListField/ListField.tsx'
import { SessionContext } from '../../contexts.ts'

export default function CreateTeamPostModal() {
  const [curStep, setCurStep] = useState(1)

  const [nameVal, setNameVal] = useState('')
  const [subjectVal, setSubjectVal] = useState('')
  const [skillVal, setSkillVal] = useState('')

  const [skillsList, setSkillsList] = useState<string[]>([''])
  const [neededSkillsList, setNeededSkillsList] = useState<string[]>([''])
  const [descriptionVal, setDescriptionVal] = useState('')

  const session = useContext(SessionContext)

  const handleSubmitForm1 = (e: FormEvent) => {
    e.preventDefault()

    // Submit to server
    fetch(`${URL}/sec/post`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventId: session.eventId,
        authorType: 'TEAM',
        authorId: session.teamId,
        subject: subjectVal,
        body: descriptionVal,
      }),
    }).then(() => {
      session.reload()
      modalHandler.closeModal()
    })
  }

  const handleSubmitForm2 = (e: FormEvent) => {
    e.preventDefault()
  }

  const renderForm1 = () => {
    return (
      <form className={styles.form} onSubmit={handleSubmitForm1}>
        <Field label="Team name" value={nameVal} required onChange={setNameVal} placeholder="Generic Team 2" />
        <Field label="Subject" value={subjectVal} required onChange={setSubjectVal} placeholder="Working on a game project!" />
        <Field label="Skill level" value={skillVal} required onChange={setSkillVal} placeholder="Beginners" />
        <Field label="More info about your team" value={descriptionVal} onChange={setDescriptionVal} />

        <div className={styles.buttons}>
          <Button key="next" type="submit" variant="accent">Next</Button>
        </div>
      </form>
    )
  }

  const renderForm2 = () => {
    return (
      <form className={styles.form} onSubmit={handleSubmitForm2}>

        <div className={styles.buttons}>
          <Button key="goback" type="button" variant="plain" onClick={() => setCurStep(1)}>Go back</Button>
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
