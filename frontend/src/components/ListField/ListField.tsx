import styles from './styles.module.css'
import LabelWithButton from '../LabelWithButton/LabelWithButton.tsx'
import { Add } from '@mui/icons-material'
import EditableList from '../EditableList/EditableList.tsx'

interface ListFieldProps {
  label: string,
  placeholder?: string,
  values: string[],
  setValues: (newValues: string[]) => void,
}

export default function ListField({ label, placeholder, values, setValues }: ListFieldProps) {
  return (
    <div className={styles.formField}>
      <LabelWithButton
        buttonLabel="Add new"
        buttonIcon={<Add />}
        onClick={() => setValues([...values, ''])}
      >
        {label}
      </LabelWithButton>
      <EditableList values={values} updateValues={setValues} placeholder={placeholder} />
    </div>
  )
}
