import styles from './styles.module.css'
import Modal from '../Modal/Modal.tsx'
import {FormEvent, useState} from "react";
import Field from "../../components/Field/Field.tsx";
import Button from "../../components/Button/Button.tsx";

export default function CreateEventModal() {
  const [eventName, setEventName] = useState('')
  const [location, setLocation] = useState('')
  const [teamSizeLimit, setTeamSizeLimit] = useState('')
  const [description, setDescription] = useState('')

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Create Event</h2>
          <p>Create an event for individuals to create teams</p>
        </div>

        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Field label="Name" value={eventName} onChange={setEventName} required />
          <Field label="Location" value={location} onChange={setLocation} required />
          {/* worst number validation on earth */}
          <Field
            type="number"
            label="Team size limit"
            value={teamSizeLimit.toString()}
            required
            onChange={(v) => {
              setTeamSizeLimit(parseInt(v).toString())
            }}
          />
          <Field label="Description" value={description} onChange={setDescription} required />

          <div className={styles.buttons}>
            <Button type="submit" variant="accent">Create</Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
