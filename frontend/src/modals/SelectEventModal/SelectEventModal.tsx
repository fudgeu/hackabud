import styles from './styles.module.css'
import Modal from '../Modal/Modal.tsx'
import Field from '../../components/Field/Field.tsx'
import { FormEvent, useState } from 'react'
import Button from '../../components/Button/Button.tsx'

export default function SelectEventModal() {
  const [eventCode, setEventCode] = useState('')

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
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
