import styles from './styles.module.css'
import Modal from '../Modal/Modal.tsx'
import {FormEvent, useContext, useState} from 'react'
import Button from '../../components/Button/Button.tsx'
import Field from '../../components/Field/Field.tsx'
import ListField from '../../components/ListField/ListField.tsx'
import {ModalContext, SessionContext} from "../../contexts.ts";
import {URL} from "../../util.ts";

export default function CreateIndividualPostModal() {
  const [curStep, setCurStep] = useState(1)

  const [subjectVal, setSubjectVal] = useState('')
  const [schoolVal, setSchoolVal] = useState('')
  const [skillVal, setSkillVal] = useState('')
  const [goalVal, setGoalVal] = useState('')

  const [websiteList, setWebsiteList] = useState<string[]>([''])
  const [skillsList, setSkillsList] = useState<string[]>([''])
  const [descriptionVal, setDescriptionVal] = useState('')

  const modalHandler = useContext(ModalContext)
  const session = useContext(SessionContext)

  // const handleSubmitForm1 = (e: FormEvent) => {
  //   e.preventDefault()
  //   setCurStep(2)
  // }

  const handleSubmitForm1 = (e: FormEvent) => {
    e.preventDefault()

    // First create team
    // fetch(`${URL}/team/`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     eventId: session.eventId,
    //   }),
    // })

    // Submit to server
    fetch(`${URL}/sec/post`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventId: session.eventId,
        authorType: 'USER',
        authorId: session.userId,
        subject: subjectVal,
        body: descriptionVal,
      }),
    }).then(() => {
      session.reload()
      modalHandler.closeModal()
    })
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
        <Field label="Skill level" value={skillVal} placeholder="Expert" required onChange={setSkillVal} />
        <Field label="Goal" value={goalVal} placeholder="To win!" onChange={setGoalVal} />
        <Field label="More info about yourself" value={descriptionVal} onChange={setDescriptionVal} />

        <div className={styles.buttons}>
          <Button type="submit" variant="accent">Post</Button>
        </div>
      </form>
    )
  }

  const renderForm2 = () => {
    // return (
    //   <form className={styles.form} onSubmit={handleSubmitForm2}>
    //
    //     <div className={styles.buttons}>
    //       <Button type="button" variant="plain" onClick={() => setCurStep(1)}>Go back</Button>
    //       <Button type="submit" variant="accent">Post</Button>
    //     </div>
    //   </form>
    // )
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
