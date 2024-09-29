import styles from './styles.module.css'
import Modal from '../Modal/Modal.tsx'
import Field from '../../components/Field/Field.tsx'
import {FormEvent, useContext, useState} from 'react'
import Button from '../../components/Button/Button.tsx'
import {ModalContext, SessionContext} from "../../contexts.ts";

export default function SelectEventModal() {
  const [eventCode, setEventCode] = useState('')
  const session = useContext(SessionContext)
  const modalHandler = useContext(ModalContext)

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    session.setEventId(parseInt(eventCode))
    modalHandler.closeModal()
  }

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Find an Event</h2>
          <p>Enter an event code below to find and create teams</p>
        </div>

        <form onSubmit={handleFormSubmit} className={styles.container}>
          <Field label="Event Code" value={eventCode} onChange={setEventCode} required />

          <div className={styles.buttons}>
            <Button type="submit" variant="accent">Find Event</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
