import EditableList from '../../components/EditableList/EditableList'
import styles from './styles.module.css'
import Field from '../../components/Field/Field.tsx'

export default function Register() {
  return (
    <div className={styles.reg}>
      <div className={styles.regContainer}>
        <div className={styles.regEntries}>
          <Field
            label="Name"
            placeholder="Looking to make a game!"
            variant="white"
            value=""
            onChange={function (newVal: string): void {
              throw new Error('Function not implemented.')
            }} />
          <Field
            label="Email Address"
            placeholder="Looking to make a game!"
            variant="white"
            value=""
            onChange={function (newVal: string): void {
              throw new Error('Function not implemented.')
            }} />
        </div>
      </div>
    </div>
  )
}
